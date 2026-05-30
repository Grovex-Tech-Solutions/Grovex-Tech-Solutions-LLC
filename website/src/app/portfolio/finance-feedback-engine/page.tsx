import { Metadata } from "next";
import Link from "next/link";

const portalLinks = [
  {
    label: "Technical portal",
    href: "http://ffe.grovextech.com/",
    description: "Public entry point for the FFE architecture, roadmap, and evidence surfaces.",
  },
  {
    label: "GitHub source",
    href: "https://github.com/Grovex-Tech-Solutions/finance_feedback_engine",
    description: "Inspectable implementation history for the trading-system runtime and docs portal.",
  },
  {
    label: "Roadmap",
    href: "http://ffe.grovextech.com/roadmap.html",
    description: "Milestone framing from runtime correctness toward measured trading-quality improvement.",
  },
  {
    label: "Experiment ledger",
    href: "http://ffe.grovextech.com/experimentation.html",
    description: "Sanitized public view of how experiment outcomes are tracked and promoted, tuned, or killed.",
  },
  {
    label: "Publication policy",
    href: "http://ffe.grovextech.com/publication-policy.html",
    description: "Boundaries for what FFE can publish without exposing private account, broker, or live-position data.",
  },
] as const;

const proofPillars = [
  {
    title: "Runtime-first discipline",
    body: "FFE treats trading decisions as production software events: typed contracts, replayable artifacts, and explicit promotion gates come before broad experimentation.",
    accent: "from-cyan-300 to-blue-500",
  },
  {
    title: "Measured improvement loops",
    body: "Changes are framed as narrow experiments with baseline comparison, spillover checks, and reversible rollout paths instead of anecdotal one-cycle wins.",
    accent: "from-violet-300 to-fuchsia-500",
  },
  {
    title: "Public evidence, private safety",
    body: "The public portal exposes architecture, roadmap, and sanitized metrics while keeping broker state, live positions, account data, and private runtime logs out of view.",
    accent: "from-emerald-300 to-teal-500",
  },
] as const;

const maturitySignals = [
  "GitHub Pages technical portal deployed at ffe.grovextech.com",
  "Roadmap organized around evidence-backed milestones and exit gates",
  "Experiment catalog designed around baseline, post-change, and spillover readouts",
  "Publication policy separates public proof from sensitive trading/account state",
] as const;

const flowStages = [
  {
    step: "01",
    title: "Observe",
    detail: "Capture decisions, market context, runtime health, and policy metadata as inspectable events.",
  },
  {
    step: "02",
    title: "Compare",
    detail: "Read outcomes against baselines so each change can be judged by behavior, not vibes.",
  },
  {
    step: "03",
    title: "Gate",
    detail: "Promote, tune, or kill strategies through explicit evidence gates and rollback rules.",
  },
  {
    step: "04",
    title: "Publish",
    detail: "Expose architecture, roadmap, and sanitized findings while protecting private trading state.",
  },
] as const;

const researchSignals = [
  { label: "Decision events", value: "Typed", caption: "Contracts make every proposed action reviewable." },
  { label: "Outcome linkage", value: "Replayable", caption: "Signals can be checked against later market movement." },
  { label: "Experiment gates", value: "Evidence-led", caption: "Promotion requires baseline and spillover context." },
  { label: "Public surface", value: "Sanitized", caption: "Proof without account exposure." },
] as const;

const metricBars = [
  { label: "Auditability", width: "92%", color: "bg-cyan-300" },
  { label: "Experiment discipline", width: "84%", color: "bg-violet-300" },
  { label: "Runtime observability", width: "88%", color: "bg-emerald-300" },
] as const;

export const metadata: Metadata = {
  title: "Finance Feedback Engine | GroveX Portfolio",
  description:
    "Explore the GroveX Finance Feedback Engine: a public technical showcase for auditable trading-system feedback loops, experiment discipline, and evidence-backed runtime improvement.",
  alternates: {
    canonical: "https://grovextech.com/portfolio/finance-feedback-engine",
  },
  openGraph: {
    title: "Finance Feedback Engine | GroveX Portfolio",
    description:
      "A GroveX technical showcase for trading-system runtime correctness, auditability, and measured decision-quality improvement.",
    type: "website",
    url: "https://grovextech.com/portfolio/finance-feedback-engine",
    images: [
      {
        url: "https://grovextech.com/assets/derrr/social-preview.png",
        width: 1200,
        height: 630,
        alt: "Finance Feedback Engine technical portal preview",
      },
    ],
  },
};

function SignalGraph() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-5 shadow-2xl backdrop-blur">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.22),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.18),transparent_30%),radial-gradient(circle_at_60%_85%,rgba(16,185,129,0.18),transparent_32%)]" />
      <div className="relative rounded-3xl border border-cyan-300/20 bg-slate-950/80 p-5">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100/70">Live feedback map</div>
            <div className="mt-1 text-2xl font-black text-white">Decision quality loop</div>
          </div>
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-amber-300" />
            <span className="h-3 w-3 rounded-full bg-emerald-300" />
          </div>
        </div>

        <svg aria-hidden="true" viewBox="0 0 640 330" className="h-auto w-full overflow-visible">
          <defs>
            <linearGradient id="ffeLine" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="50%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path d="M42 250 C120 120 210 180 270 110 S420 80 505 150 580 185 604 74" fill="none" stroke="url(#ffeLine)" strokeLinecap="round" strokeWidth="9" filter="url(#glow)" />
          <path d="M42 250 C120 120 210 180 270 110 S420 80 505 150 580 185 604 74" fill="none" stroke="white" strokeLinecap="round" strokeWidth="2" opacity="0.8" />
          {[42, 160, 270, 386, 505, 604].map((x, index) => {
            const y = [250, 154, 110, 101, 150, 74][index];
            return (
              <g key={x}>
                <circle cx={x} cy={y} r="13" fill="#020617" stroke="#67e8f9" strokeWidth="4" />
                <circle cx={x} cy={y} r="4" fill="#f8fafc" />
              </g>
            );
          })}
          <g opacity="0.28" stroke="#94a3b8" strokeWidth="1">
            {[70, 130, 190, 250, 310, 370, 430, 490, 550].map((x) => <line key={x} x1={x} x2={x} y1="30" y2="292" />)}
            {[70, 120, 170, 220, 270].map((y) => <line key={y} x1="36" x2="606" y1={y} y2={y} />)}
          </g>
        </svg>

        <div className="grid gap-3 sm:grid-cols-3">
          {metricBars.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/[0.05] p-3">
              <div className="mb-2 flex items-center justify-between text-xs text-slate-300">
                <span>{metric.label}</span>
                <span>{metric.width}</span>
              </div>
              <div className="h-2 rounded-full bg-white/10">
                <div className={`h-full rounded-full ${metric.color}`} style={{ width: metric.width }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function FinanceFeedbackEnginePortfolioPage() {
  return (
    <main data-page-marker="ffe-showcase-page" className="overflow-hidden">
      <section className="relative isolate bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.35),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.3),transparent_35%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
        <div className="absolute left-1/2 top-16 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-100">
              GroveX public systems proof
            </div>
            <h1 className="max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">
              Finance Feedback Engine
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
              A living technical showcase for building trading-system feedback loops with production discipline: audit trails, typed decision contracts, replayable evidence, and experiment gates that ask whether changes actually improve decision quality.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:max-w-2xl">
              {researchSignals.map((signal) => (
                <div key={signal.label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-sm">
                  <div className="text-sm text-cyan-100/75">{signal.label}</div>
                  <div className="mt-1 text-2xl font-black text-white">{signal.value}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-300">{signal.caption}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="http://ffe.grovextech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-cyan-300 px-6 py-3 font-bold text-slate-950 shadow-[0_0_40px_rgba(103,232,249,0.35)] transition hover:scale-[1.02] hover:bg-cyan-200"
              >
                Open the technical portal
              </a>
              <a
                href="https://github.com/Grovex-Tech-Solutions/finance_feedback_engine"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-white/20 px-6 py-3 font-bold text-white transition hover:scale-[1.02] hover:bg-white/10"
              >
                View the source repo
              </a>
            </div>
          </div>

          <SignalGraph />
        </div>
      </section>

      <section className="bg-background px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <div className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Infographic architecture
            </div>
            <h2 className="text-3xl font-black text-foreground sm:text-4xl">The loop is the product.</h2>
            <p className="mt-4 leading-8 text-foreground-secondary">
              FFE makes each trading-system iteration visible as a research-grade workflow: observe the decision, compare the outcome, gate the change, and publish safe evidence.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-4">
            {flowStages.map((stage, index) => (
              <article key={stage.step} className="relative rounded-3xl border border-border bg-background-secondary/50 p-6 shadow-soft">
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-4xl font-black text-primary/30">{stage.step}</span>
                  {index < flowStages.length - 1 ? <span className="hidden text-2xl text-primary/40 lg:block">→</span> : null}
                </div>
                <h3 className="text-xl font-bold text-foreground">{stage.title}</h3>
                <p className="mt-3 leading-7 text-foreground-secondary">{stage.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-background to-background-secondary px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Public evidence surfaces
            </div>
            <h2 className="text-3xl font-black text-foreground sm:text-4xl">
              Built to show the work without exposing the account.
            </h2>
            <p className="mt-5 leading-8 text-foreground-secondary">
              FFE is not a promise of returns. It is GroveX proof of disciplined systems engineering around a hard domain: every public surface should help reviewers understand how decisions are generated, tested, governed, and evaluated while private runtime details stay private.
            </p>
            <ul className="mt-6 space-y-3">
              {maturitySignals.map((signal) => (
                <li key={signal} className="flex gap-3 text-foreground-secondary">
                  <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-primary" />
                  <span>{signal}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {portalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-border bg-background p-5 shadow-soft transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-large"
              >
                <div className="text-lg font-bold text-foreground group-hover:text-primary">{link.label}</div>
                <p className="mt-3 text-sm leading-6 text-foreground-secondary">{link.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {proofPillars.map((pillar) => (
              <article key={pillar.title} className="overflow-hidden rounded-2xl border border-border bg-background-secondary/50 shadow-soft">
                <div className={`h-2 bg-gradient-to-r ${pillar.accent}`} />
                <div className="p-6">
                  <h2 className="text-xl font-bold text-foreground">{pillar.title}</h2>
                  <p className="mt-4 leading-7 text-foreground-secondary">{pillar.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-black sm:text-4xl">A portfolio piece for serious technical buyers.</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            FFE demonstrates the same GroveX operating pattern used for client work: make the system observable, define the acceptance gate, ship a narrow slice, verify behavior from the source of truth, and keep improving one loop at a time.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/portfolio"
              className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-white/20 px-6 py-3 font-bold text-white transition hover:bg-white/10"
            >
              Back to portfolio
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-white px-6 py-3 font-bold text-slate-950 transition hover:scale-[1.02] hover:bg-slate-100"
            >
              Discuss a systems build
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
