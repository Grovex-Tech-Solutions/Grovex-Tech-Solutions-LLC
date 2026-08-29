import { describe, expect, it } from "vitest";
import {
  canPublishMetrics,
  freshnessPresentation,
  getEvidenceModeLabel,
  getFeedFreshness,
  isFeedPayload,
  isValidTimestamp,
  type FeedPayload,
} from "@/lib/ffe-evidence";
import { metadata } from "@/app/portfolio/finance-feedback-engine/page";

const completeFeed = (freshness_status?: string): FeedPayload => ({
  meta: {
    mode: "paper",
    generated_at: "2026-08-29T12:15:00Z",
    source_as_of: "2026-08-29T12:00:00Z",
    freshness_status,
  },
  metrics: [{ key: "coverage", label: "Decision coverage", mode: "SIM", display: "94.2%" }],
});

describe("FFE public evidence freshness contract", () => {
  it("fails closed when the publisher does not declare freshness", () => {
    const feed = completeFeed();
    expect(getFeedFreshness(feed)).toBe("unverified");
    expect(canPublishMetrics(feed)).toBe(false);
    expect(freshnessPresentation("unverified").description).toContain("withheld");
  });

  it.each(["aging", "stale"])("withholds %s metrics", (freshness: string) => {
    const feed = completeFeed(freshness);
    expect(getFeedFreshness(feed)).toBe(freshness);
    expect(canPublishMetrics(feed)).toBe(false);
  });

  it("publishes metrics only for an explicit current state with valid, ordered timestamps", () => {
    expect(canPublishMetrics(completeFeed("current"))).toBe(true);
    expect(canPublishMetrics({ ...completeFeed("current"), meta: { freshness_status: "current" } })).toBe(false);

    const reversed = completeFeed("current");
    if (reversed.meta) reversed.meta.source_as_of = "2026-08-29T12:30:00Z";
    expect(canPublishMetrics(reversed)).toBe(false);
  });

  it("treats unknown publisher states as unverified", () => {
    expect(getFeedFreshness(completeFeed("live-ish"))).toBe("unverified");
  });

  it("does not accept empty or malformed metric fields", () => {
    const feed = completeFeed("current");
    feed.metrics = [{ key: "coverage", label: "", mode: "SIM", display: "94.2%" }];
    expect(canPublishMetrics(feed)).toBe(false);
  });

  it("withholds explicitly current data when its evidence mode is unknown, illustrative, or retired", () => {
    for (const mode of ["live-money", "illustrative", "retired"]) {
      const feed = completeFeed("current");
      if (feed.meta) feed.meta.mode = mode;
      expect(canPublishMetrics(feed)).toBe(false);
    }

    const unknownMetric = completeFeed("current");
    unknownMetric.metrics = [{ key: "coverage", label: "Decision coverage", mode: "production", display: "94.2%" }];
    expect(canPublishMetrics(unknownMetric)).toBe(false);

    const retiredMetric = completeFeed("current");
    retiredMetric.metrics = [{ key: "coverage", label: "Decision coverage", mode: "retired", display: "94.2%" }];
    expect(canPublishMetrics(retiredMetric)).toBe(false);
  });

  it("rejects calendar-invalid RFC 3339 timestamps", () => {
    const feed = completeFeed("current");
    if (feed.meta) feed.meta.source_as_of = "2026-02-30T12:00:00Z";
    expect(isValidTimestamp(feed.meta?.source_as_of)).toBe(false);
    expect(canPublishMetrics(feed)).toBe(false);
  });

  it("rejects wrong-shaped optional metadata before render", () => {
    const payload = completeFeed("current") as unknown as { meta: { freshness_status: unknown } };
    payload.meta.freshness_status = { state: "current" };
    expect(isFeedPayload(payload)).toBe(false);
  });

  it("labels evidence maturity without promoting paper or simulation to live", () => {
    expect(getEvidenceModeLabel("paper")).toBe("Paper-only research");
    expect(getEvidenceModeLabel("SIM")).toBe("Simulated evidence");
    expect(getEvidenceModeLabel("backtest")).toBe("Backtest evidence");
    expect(getEvidenceModeLabel("illustrative")).toBe("Illustrative evidence");
    expect(getEvidenceModeLabel("retired")).toBe("Retired evidence");
    expect(getEvidenceModeLabel(undefined)).toBe("Evidence mode unverified");
  });
});

describe("FFE public evidence metadata", () => {
  it("carries the paper-only and not-financial-advice qualifier into search and social previews", () => {
    const serialized = JSON.stringify(metadata).toLowerCase();
    expect(serialized).toContain("paper-only");
    expect(serialized).toContain("not live trading results");
    expect(serialized).toContain("financial advice");
    expect(metadata.openGraph).toBeDefined();
    expect(metadata.twitter).toBeDefined();
  });
});
