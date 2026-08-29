import type { Metadata } from "next";
import Link from "next/link";
import EvidenceCard from "@/app/components/EvidenceCard";
import { WebPageStructuredData } from "@/components/StructuredData";
import { portfolioProjects } from "@/lib/portfolio-evidence";
import { generateWebPageSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Public GroveX project evidence with explicit maturity labels, limitations, and artifact links.",
  keywords: [
    "GroveX portfolio",
    "public software evidence",
    "paper research",
    "published systems",
    "Turtle Creek technology",
  ],
  alternates: {
    canonical: "https://grovextech.com/portfolio/",
  },
  openGraph: {
    title: "Portfolio | GroveX",
    description:
      "Public project evidence with maturity labels, limitations, and artifact links.",
    url: "https://grovextech.com/portfolio/",
    type: "website",
  },
};

const pageSchema = generateWebPageSchema(
  "GroveX Public Project Evidence",
  "Public GroveX project evidence with explicit maturity labels, limitations, and artifact links.",
  "https://grovextech.com/portfolio/",
  [
    { name: "Home", url: "https://grovextech.com" },
    { name: "Portfolio", url: "https://grovextech.com/portfolio/" },
  ],
);

export default function PortfolioPage() {
  return (
    <>
      <WebPageStructuredData data={pageSchema} />
      <main className="min-h-screen bg-background">
        <section className="relative overflow-hidden bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(94,234,212,0.2),transparent_32%),radial-gradient(circle_at_82%_14%,rgba(96,165,250,0.15),transparent_30%)]" />
          <div className="relative mx-auto max-w-5xl text-center">
            <div className="mb-6 inline-flex rounded-full border border-teal-200/25 bg-teal-200/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-teal-100">
              Public project evidence
            </div>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Work is labeled by maturity, not marketing confidence.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
              These entries link to artifacts an unauthenticated visitor can inspect. Caveats stay next to the claim, and private implementation is never offered as a public action.
            </p>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="portfolio-projects-heading">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <h2 id="portfolio-projects-heading" className="text-3xl font-black text-foreground sm:text-4xl">
                Evidence-backed entries
              </h2>
              <p className="mt-4 text-lg leading-8 text-foreground-secondary">
                A published system and paper-only research are not equivalent. The status badge and limitation text make that boundary visible before the evidence links.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              {portfolioProjects.map((project) => (
                <EvidenceCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background-secondary px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="evidence-policy-heading">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-teal-800/20 bg-teal-800/10 px-4 py-2 text-sm font-semibold text-teal-900 dark:text-teal-100">
                Evidence policy
              </div>
              <h2 id="evidence-policy-heading" className="text-3xl font-black text-foreground sm:text-4xl">
                Missing proof stays visible as missing.
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <article className="rounded-3xl border border-border bg-background p-6 shadow-soft">
                <h3 className="text-xl font-bold text-foreground">Public means inspectable</h3>
                <p className="mt-3 leading-7 text-foreground-secondary">
                  Public actions must resolve for an unauthenticated visitor. A private repository may be disclosed in text, but never presented as a link.
                </p>
              </article>
              <article className="rounded-3xl border border-border bg-background p-6 shadow-soft">
                <h3 className="text-xl font-bold text-foreground">Status fails closed</h3>
                <p className="mt-3 leading-7 text-foreground-secondary">
                  Unknown maturity becomes “Status unverified.” Concepts without public evidence do not enter the homepage evidence row.
                </p>
              </article>
              <article className="rounded-3xl border border-border bg-background p-6 shadow-soft">
                <h3 className="text-xl font-bold text-foreground">Research is not an outcome</h3>
                <p className="mt-3 leading-7 text-foreground-secondary">
                  Paper-mode research is labeled separately from deployed systems and carries its limitations beside every action.
                </p>
              </article>
              <article className="rounded-3xl border border-border bg-background p-6 shadow-soft">
                <h3 className="text-xl font-bold text-foreground">No empty showcase shell</h3>
                <p className="mt-3 leading-7 text-foreground-secondary">
                  This page stays intentionally small until another truthful artifact and maturity state are available.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-black sm:text-4xl">Need a practical system, not a vague claim?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-200">
              Start with the problem, constraints, and the smallest useful outcome. We will tell you what fits and what does not.
            </p>
            <Link href="/contact" className="mt-8 inline-flex min-h-[52px] items-center justify-center rounded-xl bg-teal-300 px-6 py-3 font-bold text-slate-950 transition hover:bg-teal-200">
              Start a practical conversation
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
