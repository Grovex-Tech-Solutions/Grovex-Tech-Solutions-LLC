export type FeedFreshness = "current" | "aging" | "stale" | "unverified";

export type FeedMetric = {
  key: string;
  label: string;
  mode: string;
  display: string;
  series?: number[];
};

export type FeedPayload = {
  meta?: {
    milestone?: string;
    milestone_label?: string;
    mode?: string;
    delay_minutes?: number;
    generated_at?: string;
    source_as_of?: string;
    source?: string;
    freshness_status?: string;
  };
  metrics?: FeedMetric[];
};

const FRESHNESS_STATES = new Set<FeedFreshness>(["current", "aging", "stale"]);
const PUBLIC_EVIDENCE_MODES = new Set([
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
const PUBLISHABLE_METRIC_MODES = new Set(
  [...PUBLIC_EVIDENCE_MODES].filter((mode) => mode !== "illustrative" && mode !== "retired"),
);

export function isValidTimestamp(value?: string): value is string {
  return typeof value === "string" && value.trim().length > 0 && !Number.isNaN(Date.parse(value));
}

export function getFeedFreshness(payload: FeedPayload | null): FeedFreshness {
  const declared = payload?.meta?.freshness_status?.trim().toLowerCase() as FeedFreshness | undefined;
  return declared && FRESHNESS_STATES.has(declared) ? declared : "unverified";
}

export function canPublishMetrics(payload: FeedPayload | null): boolean {
  if (!payload || getFeedFreshness(payload) !== "current") return false;
  if (!isValidTimestamp(payload.meta?.generated_at) || !isValidTimestamp(payload.meta?.source_as_of)) return false;
  if (Date.parse(payload.meta.source_as_of) > Date.parse(payload.meta.generated_at)) return false;
  if (!isPublishableMetricMode(payload.meta?.mode)) return false;
  return Array.isArray(payload.metrics)
    && payload.metrics.length > 0
    && payload.metrics.every((metric) => isValidMetric(metric) && isPublishableMetricMode(metric.mode));
}

export function isRecognizedEvidenceMode(mode?: string): boolean {
  return typeof mode === "string" && PUBLIC_EVIDENCE_MODES.has(mode.trim().toLowerCase());
}

function isPublishableMetricMode(mode?: string): boolean {
  return typeof mode === "string" && PUBLISHABLE_METRIC_MODES.has(mode.trim().toLowerCase());
}

export function isFeedPayload(value: unknown): value is FeedPayload {
  if (!value || typeof value !== "object") return false;
  const candidate = value as FeedPayload;
  if (!candidate.meta || typeof candidate.meta !== "object" || !Array.isArray(candidate.metrics)) return false;
  return candidate.metrics.every(isValidMetric);
}

export function isValidMetric(metric: unknown): metric is FeedMetric {
  if (!metric || typeof metric !== "object") return false;
  const candidate = metric as Partial<FeedMetric>;
  return [candidate.key, candidate.label, candidate.mode, candidate.display].every(
    (value) => typeof value === "string" && value.trim().length > 0,
  );
}

export function getEvidenceModeLabel(mode?: string): string {
  switch (mode?.trim().toLowerCase()) {
    case "paper":
      return "Paper-only research";
    case "sim":
    case "simulation":
    case "simulated":
      return "Simulated evidence";
    case "shadow":
      return "Paper / shadow evidence";
    case "backtest":
      return "Backtest evidence";
    case "illustrative":
      return "Illustrative evidence";
    case "retired":
      return "Retired evidence";
    case "delayed":
      return "Delayed evidence";
    case "public":
      return "Published evidence";
    default:
      return "Evidence mode unverified";
  }
}

export const freshnessPresentation: Record<FeedFreshness, { label: string; detail: string; publishMetrics: boolean }> = {
  current: {
    label: "Publisher-declared current",
    detail: "The upstream public feed explicitly declares this snapshot current. Check its timestamps and paper-mode label before use.",
    publishMetrics: true,
  },
  aging: {
    label: "Publisher-declared aging",
    detail: "The upstream publisher marks this snapshot as aging. Values are withheld until a current snapshot is published.",
    publishMetrics: false,
  },
  stale: {
    label: "Publisher-declared stale",
    detail: "The upstream publisher marks this snapshot stale. Values are withheld.",
    publishMetrics: false,
  },
  unverified: {
    label: "Freshness unverified",
    detail: "The feed does not declare an authoritative freshness state. The website will not infer one from an invented age threshold, so values are withheld.",
    publishMetrics: false,
  },
};
