"use client";

import { useEffect, useState } from "react";
import {
  canPublishMetrics,
  freshnessPresentation,
  getEvidenceModeLabel,
  getFeedFreshness,
  isFeedPayload,
  type FeedPayload,
} from "./feedEvidence";

const FEED_URL = "https://ffe.grovextech.com/feed.json";

function formatTimestamp(value?: string) {
  if (!value) return "Unavailable";
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return "Invalid publisher timestamp";
  return parsed.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZone: "UTC",
    timeZoneName: "short",
  });
}

export default function FfeLiveFeedPanel() {
  const [feed, setFeed] = useState<FeedPayload | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;

    async function loadFeed() {
      try {
        const response = await fetch(`${FEED_URL}?ts=${Date.now()}`, {
          cache: "no-store",
          headers: { Accept: "application/json" },
        });
        if (!response.ok) {
          throw new Error(`Feed request failed: ${response.status}`);
        }
        const payload: unknown = await response.json();
        if (!isFeedPayload(payload)) {
          throw new Error("Feed response did not match the public evidence contract");
        }
        if (!cancelled) {
          setFeed(payload);
          setStatus("ready");
        }
      } catch {
        if (!cancelled) {
          setFeed(null);
          setStatus("error");
        }
      }
    }

    void loadFeed();
    const interval = window.setInterval(() => {
      void loadFeed();
    }, 5 * 60 * 1000);

    return () => {
      cancelled = true;
      window.clearInterval(interval);
    };
  }, []);

  const freshness = getFeedFreshness(feed);
  const freshnessCopy = freshnessPresentation[freshness];
  const metrics = canPublishMetrics(feed) ? feed?.metrics?.slice(0, 4) ?? [] : [];
  const stateLabel = status === "loading"
    ? "Loading"
    : status === "error"
      ? "Feed unavailable"
      : freshnessCopy.label;

  return (
    <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8" aria-labelledby="ffe-public-feed-heading">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            Public research snapshot
          </div>
          <h2 id="ffe-public-feed-heading" className="text-3xl font-black sm:text-4xl">
            Public evidence is shown only when its publisher declares the snapshot current.
          </h2>
          <p className="mt-5 leading-8 text-slate-300">
            This page reads the sanitized feed at ffe.grovextech.com. It does not infer freshness from an arbitrary age threshold: missing, aging, stale, malformed, or unavailable evidence fails closed and its metric values are withheld.
          </p>
          <p className="mt-4 leading-8 text-slate-300">
            FFE is a paper-only research system. Published values are research artifacts—not brokerage records, live trading results, recommendations, or financial advice.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={FEED_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-cyan-300 px-5 py-3 font-bold text-slate-950 transition hover:scale-[1.02] hover:bg-cyan-200"
            >
              Inspect public feed JSON
            </a>
            <a
              href="https://ffe.grovextech.com/publication-policy.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-white/20 px-5 py-3 font-bold text-white transition hover:bg-white/10"
            >
              Read publication policy
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur">
          <div className="flex flex-col gap-3 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-sm uppercase tracking-[0.24em] text-slate-400">Publisher-gated endpoint</div>
              <div className="mt-1 text-2xl font-black">
                {feed?.meta?.milestone ?? "Milestone unavailable"} · {feed?.meta?.milestone_label ?? "Label unavailable"}
              </div>
            </div>
            <div aria-live="polite" className={`rounded-full px-3 py-1 text-sm font-bold ${status === "error" || freshness === "aging" || freshness === "stale" ? "bg-amber-300/15 text-amber-100" : freshness === "current" ? "bg-emerald-300/15 text-emerald-100" : "bg-cyan-300/15 text-cyan-100"}`}>
              {stateLabel}
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-slate-300">
            {status === "loading"
              ? "Requesting the public evidence snapshot. No placeholder values are shown while loading."
              : status === "error"
                ? "The public feed is unavailable or invalid. No cached or hard-coded values are substituted."
                : freshnessCopy.detail}
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Evidence mode</div>
              <div className="mt-2 text-xl font-black">{getEvidenceModeLabel(feed?.meta?.mode)}</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Publisher delay floor</div>
              <div className="mt-2 text-xl font-black">
                {typeof feed?.meta?.delay_minutes === "number" ? `${feed.meta.delay_minutes}+ min` : "Unavailable"}
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Source as of</div>
              <div className="mt-2 text-lg font-bold">{formatTimestamp(feed?.meta?.source_as_of)}</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Generated at</div>
              <div className="mt-2 text-lg font-bold">{formatTimestamp(feed?.meta?.generated_at)}</div>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {metrics.length > 0 ? metrics.map((metric) => (
              <div key={metric.key} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-cyan-100/70">{getEvidenceModeLabel(metric.mode)}</div>
                <div className="mt-2 text-lg font-black">{metric.display}</div>
                <div className="mt-1 text-sm text-slate-300">{metric.label}</div>
              </div>
            )) : (
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-slate-300 sm:col-span-2">
                Metric values withheld. Values appear only when the publisher explicitly declares a valid, timestamped snapshot current; paper, simulation, backtest, illustrative, and retired labels remain distinct.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
