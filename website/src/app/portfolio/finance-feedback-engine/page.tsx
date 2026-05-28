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
  },
  {
    title: "Measured improvement loops",
    body: "Changes are framed as narrow experiments with baseline comparison, spillover checks, and reversible rollout paths instead of anecdotal one-cycle wins.",
  },
  {
    title: "Public evidence, private safety",
    body: "The public portal exposes architecture, roadmap, and sanitized metrics while keeping broker state, live positions, account data, and private runtime logs out of view.",
  },
] as const;

const maturitySignals = [
  "GitHub Pages technical portal deployed at ffe.grovextech.com",
  "Roadmap organized around evidence-backed milestones and exit gates",
  "Experiment catalog designed around baseline, post-change, and spillover readouts",
  "Publication policy separates public proof from sensitive trading/account state",
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

export default function FinanceFeedbackEnginePortfolioPage() {
  return (
    <main data-page-marker="ffe-showcase-page" className="overflow-hidden">
      <section className="relative isolate bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.35),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.3),transparent_35%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
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

          <aside className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-md sm:p-8">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-100/80">
              Current public status
            </div>
            <dl className="mt-6 space-y-5">
              <div>
                <dt className="text-sm text-slate-400">Surface</dt>
                <dd className="mt-1 text-xl font-bold text-white">Technical portal live</dd>
              </div>
              <div>
                <dt className="text-sm text-slate-400">Primary focus</dt>
                <dd className="mt-1 text-xl font-bold text-white">Runtime correctness → measured trading quality</dd>
              </div>
              <div>
                <dt className="text-sm text-slate-400">Evidence model</dt>
                <dd className="mt-1 text-xl font-bold text-white">Roadmap, metrics catalog, experiment ledger</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="bg-background px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {proofPillars.map((pillar) => (
              <article key={pillar.title} className="rounded-2xl border border-border bg-background-secondary/50 p-6 shadow-soft">
                <h2 className="text-xl font-bold text-foreground">{pillar.title}</h2>
                <p className="mt-4 leading-7 text-foreground-secondary">{pillar.body}</p>
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
