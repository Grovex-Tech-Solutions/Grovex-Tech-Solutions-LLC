#!/usr/bin/env node

import fs from "node:fs/promises";
import process from "node:process";
import { chromium } from "playwright";

const origin = (process.env.GROVEX_PREVIEW_ORIGIN
  ?? "https://d7ac172f.grovex-tech-solutions-llc.pages.dev").replace(/\/$/, "");
const feedUrl = process.env.GROVEX_FFE_FEED_URL
  ?? "https://ffe.grovextech.com/feed.json";
const outputPath = process.env.GROVEX_FFE_DELIVERY_OUTPUT;
const executablePath = process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH;
const feedFetchTimeoutMs = 30_000;

const result = {
  schema: "grovex-ffe-browser-delivery/v1",
  checkedAt: new Date().toISOString(),
  origin,
  route: `${origin}/portfolio/finance-feedback-engine/`,
  feedUrl,
  browserFetch: null,
  pageState: null,
  requestFailures: [],
  verified: false,
};

let browser;

try {
  browser = await chromium.launch({
    headless: true,
    ...(executablePath ? { executablePath } : {}),
  });
  const page = await browser.newPage();
  page.on("requestfailed", (request) => {
    if (request.url().startsWith(feedUrl)) {
      result.requestFailures.push({
        url: request.url(),
        errorText: request.failure()?.errorText ?? "unknown",
      });
    }
  });

  const navigation = await page.goto(result.route, {
    waitUntil: "domcontentloaded",
    timeout: 60_000,
  });
  if (!navigation?.ok()) {
    throw new Error(`Preview route returned ${navigation?.status() ?? "no response"}`);
  }

  const cacheBustedUrl = `${feedUrl}${feedUrl.includes("?") ? "&" : "?"}delivery_probe=${Date.now()}`;
  const observedResponsePromise = page.waitForResponse(
    (response) => response.url() === cacheBustedUrl,
    { timeout: feedFetchTimeoutMs },
  ).catch(() => null);
  result.browserFetch = await page.evaluate(async ({ url, timeoutMs }) => {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), timeoutMs);
    try {
      const response = await fetch(url, {
        cache: "no-store",
        headers: { Accept: "application/json" },
        signal: controller.signal,
      });
      const text = await response.text();
      let payload = null;
      try {
        payload = JSON.parse(text);
      } catch {
        // Keep payload null; the result reports the non-JSON response without exposing it.
      }
      return {
        ok: response.ok,
        status: response.status,
        contentType: response.headers.get("content-type"),
        accessControlAllowOrigin: response.headers.get("access-control-allow-origin"),
        hasTypedMeta: Boolean(
          payload
          && typeof payload === "object"
          && payload.meta
          && typeof payload.meta === "object"
          && typeof payload.meta.mode === "string"
          && typeof payload.meta.generated_at === "string"
        ),
      };
    } catch (error) {
      if (controller.signal.aborted) {
        return { error: `Feed fetch timed out after ${timeoutMs}ms` };
      }
      return { error: error instanceof Error ? error.message : String(error) };
    } finally {
      window.clearTimeout(timeout);
    }
  }, { url: cacheBustedUrl, timeoutMs: feedFetchTimeoutMs });
  const observedResponse = await observedResponsePromise;
  if (observedResponse) {
    const headers = await observedResponse.allHeaders();
    result.browserFetch = {
      ...result.browserFetch,
      status: result.browserFetch.status ?? observedResponse.status(),
      contentType: result.browserFetch.contentType ?? headers["content-type"] ?? null,
      accessControlAllowOrigin: result.browserFetch.accessControlAllowOrigin
        ?? headers["access-control-allow-origin"]
        ?? null,
    };
  }

  const liveStatus = page.locator('[aria-live="polite"]');
  await liveStatus.waitFor({ state: "visible", timeout: 10_000 });
  await page.waitForFunction(
    () => document.querySelector('[aria-live="polite"]')?.textContent?.trim() !== "Loading",
    undefined,
    { timeout: 15_000 },
  ).catch(() => null);
  const liveText = (await liveStatus.textContent())?.trim() ?? "";
  result.pageState = [
    "Feed unavailable",
    "Freshness unverified",
    "Publisher-declared current",
    "Publisher-declared aging",
    "Publisher-declared stale",
    "Loading",
  ].find((candidate) => liveText === candidate) ?? "Unknown";

  result.verified = Boolean(
    result.browserFetch
    && result.browserFetch.ok === true
    && result.browserFetch.status === 200
    && result.browserFetch.hasTypedMeta === true
    && [
      "Freshness unverified",
      "Publisher-declared current",
      "Publisher-declared aging",
      "Publisher-declared stale",
    ].includes(result.pageState)
    && result.requestFailures.length === 0
  );
} catch (error) {
  result.error = error instanceof Error ? error.message : String(error);
} finally {
  await browser?.close();
}

const serialized = `${JSON.stringify(result, null, 2)}\n`;
if (outputPath) {
  await fs.writeFile(outputPath, serialized);
}
process.stdout.write(serialized);
if (!result.verified) {
  process.exitCode = 1;
}
