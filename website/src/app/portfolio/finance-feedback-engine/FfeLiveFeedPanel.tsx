"use client";

import { useEffect, useState } from "react";

type FeedMetric = {
  key: string;
  label: string;
  mode: string;
  display: string;
  series?: number[];
};

type FeedPayload = {
  meta?: {
    milestone?: string;
    milestone_label?: string;
    mode?: string;
    delay_minutes?: number;
    generated_at?: string;
    source_as_of?: string;
    source?: string;
  };
  metrics?: FeedMetric[];
};

const FEED_URL = "https://ffe.grovextech.com/feed.json";

function formatTimestamp(value?: string) {
  if (!value) return "Unavailable";
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
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
        const payload = (await response.json()) as FeedPayload;
        if (!cancelled) {
          setFeed(payload);
          setStatus("ready");
        }
      } catch {
        if (!cancelled) {
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

  const metrics = feed?.metrics?.slice(0, 4) ?? [];

  return (
    <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8" aria-labelledby="ffe-live-feed-heading">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.8)]" />
            Live public feed
          </div>
          <h2 id="ffe-live-feed-heading" className="text-3xl font-black sm:text-4xl">
            Sanitized paper-mode evidence is now served from the live portal.
          </h2>
          <p className="mt-5 leading-8 text-slate-300">
            The showcase fetches the public-safe feed directly from ffe.grovextech.com. The upstream workflow fails closed on sensitive content before deploying, so the website can show current evidence without exposing private account, broker, order, or recommendation data.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={FEED_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-emerald-300 px-5 py-3 font-bold text-slate-950 transition hover:scale-[1.02] hover:bg-emerald-200"
            >
              Open live feed JSON
            </a>
            <a
              href="https://ffe.grovextech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-white/20 px-5 py-3 font-bold text-white transition hover:bg-white/10"
            >
              Visit technical portal
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur">
          <div className="flex flex-col gap-3 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-sm uppercase tracking-[0.24em] text-slate-400">Workflow-gated endpoint</div>
              <div className="mt-1 text-2xl font-black">{feed?.meta?.milestone ?? "FFE"} · {feed?.meta?.milestone_label ?? "Public feed"}</div>
            </div>
            <div className={`rounded-full px-3 py-1 text-sm font-bold ${status === "ready" ? "bg-emerald-300/15 text-emerald-100" : status === "error" ? "bg-amber-300/15 text-amber-100" : "bg-cyan-300/15 text-cyan-100"}`}>
              {status === "ready" ? "Live" : status === "error" ? "Feed unavailable" : "Loading"}
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Mode</div>
              <div className="mt-2 text-xl font-black">{feed?.meta?.mode ?? "paper"}</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Delay floor</div>
              <div className="mt-2 text-xl font-black">{feed?.meta?.delay_minutes ?? 15}+ min</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 sm:col-span-2">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Source as of</div>
              <div className="mt-2 text-lg font-bold">{formatTimestamp(feed?.meta?.source_as_of)}</div>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {metrics.length > 0 ? metrics.map((metric) => (
              <div key={metric.key} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-cyan-100/70">{metric.mode}</div>
                <div className="mt-2 text-lg font-black">{metric.display}</div>
                <div className="mt-1 text-sm text-slate-300">{metric.label}</div>
              </div>
            )) : (
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-300 sm:col-span-2">
                Waiting for the public-safe feed response.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
