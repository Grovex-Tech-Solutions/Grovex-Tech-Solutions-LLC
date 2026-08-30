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

const browser = await chromium.launch({
  headless: true,
  ...(executablePath ? { executablePath } : {}),
});

try {
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

  result.browserFetch = await page.evaluate(async ({ url }) => {
    const cacheBustedUrl = `${url}${url.includes("?") ? "&" : "?"}delivery_probe=${Date.now()}`;
    try {
      const response = await fetch(cacheBustedUrl, {
        cache: "no-store",
        headers: { Accept: "application/json" },
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
      return { error: error instanceof Error ? error.message : String(error) };
    }
  }, { url: feedUrl });

  await page.waitForTimeout(1_000);
  const body = await page.locator("body").innerText();
  result.pageState = ["Loading", "Feed unavailable", "Freshness unverified", "Current", "Aging", "Stale"]
    .find((candidate) => body.includes(candidate)) ?? "Unknown";

  result.verified = Boolean(
    result.browserFetch
    && result.browserFetch.ok === true
    && result.browserFetch.status === 200
    && result.browserFetch.hasTypedMeta === true
  );
} catch (error) {
  result.error = error instanceof Error ? error.message : String(error);
} finally {
  await browser.close();
}

const serialized = `${JSON.stringify(result, null, 2)}\n`;
if (outputPath) {
  await fs.writeFile(outputPath, serialized);
}
process.stdout.write(serialized);
if (!result.verified) {
  process.exitCode = 1;
}
