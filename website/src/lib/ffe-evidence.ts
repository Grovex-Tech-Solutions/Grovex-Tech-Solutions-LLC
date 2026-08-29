import type { FeedFreshness, FeedMetric, FeedPayload } from "@/types/ffe-evidence";

export type { FeedFreshness, FeedMetric, FeedPayload } from "@/types/ffe-evidence";

const FRESHNESS_STATES = new Set<FeedFreshness>(["current", "aging", "stale"]);
const RECOGNIZED_EVIDENCE_MODES = new Set([
  "paper",
  "sim",
  "simulation",
  "simulated",
  "shadow",
  "backtest",
  "illustrative",
  "retired",
  "delayed",
  "public",
]);
const RFC3339_PATTERN = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.\d+)?(?:Z|([+-])(\d{2}):(\d{2}))$/;

function isOptionalString(value: unknown): value is string | undefined {
  return value === undefined || typeof value === "string";
}

function isLeapYear(year: number): boolean {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

export function isValidTimestamp(value: unknown): value is string {
  if (typeof value !== "string") return false;
  const match = RFC3339_PATTERN.exec(value);
  if (!match) return false;

  const [, yearText, monthText, dayText, hourText, minuteText, secondText, offsetSign, offsetHourText, offsetMinuteText] = match;
  const year = Number(yearText);
  const month = Number(monthText);
  const day = Number(dayText);
  const hour = Number(hourText);
  const minute = Number(minuteText);
  const second = Number(secondText);
  const offsetHour = offsetSign ? Number(offsetHourText) : 0;
  const offsetMinute = offsetSign ? Number(offsetMinuteText) : 0;
  const daysByMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  return (
    month >= 1 &&
    month <= 12 &&
    day >= 1 &&
    day <= daysByMonth[month - 1] &&
    hour <= 23 &&
    minute <= 59 &&
    second <= 59 &&
    offsetHour <= 23 &&
    offsetMinute <= 59 &&
    Number.isFinite(Date.parse(value))
  );
}

export function isValidMetric(metric: unknown): metric is FeedMetric {
  if (!metric || typeof metric !== "object") return false;
  const candidate = metric as FeedMetric;
  return (
    typeof candidate.key === "string" && candidate.key.trim().length > 0 &&
    typeof candidate.label === "string" && candidate.label.trim().length > 0 &&
    typeof candidate.mode === "string" && candidate.mode.trim().length > 0 &&
    typeof candidate.display === "string" && candidate.display.trim().length > 0 &&
    (candidate.series === undefined ||
      (Array.isArray(candidate.series) && candidate.series.every((point) => typeof point === "number" && Number.isFinite(point))))
  );
}

export function isFeedPayload(value: unknown): value is FeedPayload {
  if (!value || typeof value !== "object") return false;
  const candidate = value as FeedPayload;
  const meta = candidate.meta;
  if (!meta || typeof meta !== "object" || Array.isArray(meta)) return false;
  if (
    !isOptionalString(meta.generated_at) ||
    !isOptionalString(meta.source_as_of) ||
    !isOptionalString(meta.mode) ||
    !isOptionalString(meta.milestone_label) ||
    !isOptionalString(meta.milestone) ||
    !isOptionalString(meta.freshness_status)
  ) return false;
  if (meta.delay_minutes !== undefined &&
      (typeof meta.delay_minutes !== "number" || !Number.isFinite(meta.delay_minutes) || meta.delay_minutes < 0)) return false;
  if (candidate.metrics !== undefined &&
      (!Array.isArray(candidate.metrics) || !candidate.metrics.every(isValidMetric))) return false;
  if (candidate.milestone !== undefined) {
    if (!candidate.milestone || typeof candidate.milestone !== "object" || Array.isArray(candidate.milestone)) return false;
    if (!isOptionalString(candidate.milestone.summary)) return false;
  }
  return true;
}

export function getFeedFreshness(payload: FeedPayload | null): FeedFreshness {
  const declared = payload?.meta?.freshness_status?.trim().toLowerCase();
  return declared && FRESHNESS_STATES.has(declared as FeedFreshness)
    ? (declared as FeedFreshness)
    : "unverified";
}

export function getEvidenceModeLabel(value: string | undefined): string {
  const mode = value?.trim().toLowerCase();
  if (!mode) return "Evidence mode unverified";
  if (mode === "paper") return "Paper-only research";
  if (mode === "sim" || mode === "simulation" || mode === "simulated") return "Simulated evidence";
  if (mode === "shadow") return "Paper / shadow evidence";
  if (mode === "backtest") return "Backtest evidence";
  if (mode === "illustrative") return "Illustrative evidence";
  if (mode === "retired") return "Retired evidence";
  if (mode === "delayed") return "Delayed published evidence";
  if (mode === "public") return "Published snapshot";
  return "Evidence mode unverified";
}

function isRecognizedEvidenceMode(value: string | undefined): boolean {
  return RECOGNIZED_EVIDENCE_MODES.has(value?.trim().toLowerCase() ?? "");
}

function isPublishableMetricMode(value: string | undefined): boolean {
  const mode = value?.trim().toLowerCase() ?? "";
  return isRecognizedEvidenceMode(mode) && mode !== "illustrative" && mode !== "retired";
}

export function canPublishMetrics(payload: FeedPayload | null): payload is FeedPayload & { metrics: FeedMetric[] } {
  if (!payload || getFeedFreshness(payload) !== "current") return false;
  if (!isValidTimestamp(payload.meta?.generated_at) || !isValidTimestamp(payload.meta?.source_as_of)) return false;
  if (Date.parse(payload.meta.source_as_of) > Date.parse(payload.meta.generated_at)) return false;
  if (!isPublishableMetricMode(payload.meta?.mode)) return false;
  return Array.isArray(payload.metrics) && payload.metrics.length > 0 &&
    payload.metrics.every((metric) => isValidMetric(metric) && isPublishableMetricMode(metric.mode));
}

export function freshnessPresentation(freshness: FeedFreshness): {
  label: string;
  description: string;
  tone: string;
} {
  if (freshness === "current") {
    return {
      label: "Publisher-declared current",
      description: "The publisher explicitly marked this snapshot current. Evidence maturity labels still apply.",
      tone: "border-emerald-400/40 bg-emerald-400/10 text-emerald-100",
    };
  }
  if (freshness === "aging") {
    return {
      label: "Publisher-declared aging",
      description: "This snapshot is aging. Metric values are withheld until the publisher declares a current snapshot.",
      tone: "border-amber-400/40 bg-amber-400/10 text-amber-100",
    };
  }
  if (freshness === "stale") {
    return {
      label: "Publisher-declared stale",
      description: "This snapshot is stale. Metric values are withheld.",
      tone: "border-rose-400/40 bg-rose-400/10 text-rose-100",
    };
  }
  return {
    label: "Freshness unverified",
    description: "The publisher did not provide an approved freshness state. Metric values are withheld.",
    tone: "border-white/15 bg-white/[0.04] text-slate-200",
  };
}
