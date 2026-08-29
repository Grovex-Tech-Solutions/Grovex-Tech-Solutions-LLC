import { act, cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import FfeLiveFeedPanel from "@/app/portfolio/finance-feedback-engine/FfeLiveFeedPanel";

const payload = (freshness_status?: string) => ({
  meta: {
    milestone: "FFE_PUBLIC",
    milestone_label: "Public research feed",
    mode: "paper",
    delay_minutes: 15,
    generated_at: "2026-08-29T12:15:00Z",
    source_as_of: "2026-08-29T12:00:00Z",
    freshness_status,
  },
  metrics: [{ key: "coverage", label: "Decision coverage", mode: "SIM", display: "94.2%" }],
});

function mockFetch(body: unknown, ok = true) {
  vi.stubGlobal("fetch", vi.fn().mockResolvedValue({
    ok,
    status: ok ? 200 : 503,
    json: async () => body,
  }));
}

afterEach(() => {
  cleanup();
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

describe("FFE public feed panel", () => {
  it("shows no placeholder values while loading", () => {
    vi.stubGlobal("fetch", vi.fn(() => new Promise(() => undefined)));
    render(<FfeLiveFeedPanel />);
    expect(screen.getByText(/No placeholder values are shown while loading/i)).toBeVisible();
    expect(screen.queryByText("94.2%")).not.toBeInTheDocument();
  });

  it("fails closed when the response is invalid", async () => {
    mockFetch({ metrics: [] });
    render(<FfeLiveFeedPanel />);
    expect(await screen.findByText("Feed unavailable")).toBeVisible();
    expect(screen.getByText(/No cached or hard-coded values are substituted/i)).toBeVisible();
    expect(screen.getByText(/paper-only research system/i)).toBeVisible();
    expect(screen.getByText(/financial advice/i)).toBeVisible();
  });

  it("withholds a valid snapshot whose freshness is unverified", async () => {
    mockFetch(payload());
    render(<FfeLiveFeedPanel />);
    expect(await screen.findByText("Freshness unverified")).toBeVisible();
    expect(screen.getByText(/Metric values withheld/i)).toBeVisible();
    expect(screen.queryByText("94.2%")).not.toBeInTheDocument();
  });

  it("shows a valid metric only for an explicitly current snapshot", async () => {
    mockFetch(payload("current"));
    render(<FfeLiveFeedPanel />);
    await waitFor(() => expect(screen.getByText("Publisher-declared current")).toBeVisible());
    expect(screen.getByText("94.2%")).toBeVisible();
    expect(screen.getByText("Simulated evidence")).toBeVisible();
    expect(screen.getByText("Paper-only research")).toBeVisible();
  });

  it("does not let an older success overwrite the latest failed refresh", async () => {
    vi.useFakeTimers();
    type MockResponse = { ok: boolean; status: number; json: () => Promise<unknown> };
    let resolveOlder: (response: MockResponse) => void = () => undefined;
    const olderRequest = new Promise<MockResponse>((resolve) => {
      resolveOlder = resolve;
    });
    const fetchMock = vi.fn()
      .mockImplementationOnce(() => olderRequest)
      .mockResolvedValueOnce({ ok: true, status: 200, json: async () => ({ metrics: [] }) });
    vi.stubGlobal("fetch", fetchMock);

    render(<FfeLiveFeedPanel />);
    await act(async () => {
      await vi.advanceTimersByTimeAsync(5 * 60 * 1000);
    });
    expect(screen.getByText("Feed unavailable")).toBeVisible();

    await act(async () => {
      resolveOlder({ ok: true, status: 200, json: async () => payload("current") });
      await Promise.resolve();
    });
    expect(screen.getByText("Feed unavailable")).toBeVisible();
    expect(screen.queryByText("94.2%")).not.toBeInTheDocument();
  });
});
