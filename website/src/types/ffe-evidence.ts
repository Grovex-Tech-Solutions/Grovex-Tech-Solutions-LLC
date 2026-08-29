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
    generated_at?: string;
    source_as_of?: string;
    delay_minutes?: number;
    mode?: string;
    milestone_label?: string;
    milestone?: string;
    freshness_status?: string;
  };
  metrics?: FeedMetric[];
  milestone?: {
    summary?: string;
  };
};
