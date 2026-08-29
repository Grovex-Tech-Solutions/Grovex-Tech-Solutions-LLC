import Link from "next/link";
import {
  maturityPresentation,
  publicEvidenceLinks,
} from "@/lib/portfolio-evidence";
import type { PortfolioProject } from "@/types/portfolio-evidence";

const darkToneClasses = {
  neutral: "border-slate-400/30 bg-slate-400/10 text-slate-200",
  research: "border-amber-300/30 bg-amber-300/10 text-amber-100",
  published: "border-teal-300/30 bg-teal-300/10 text-teal-100",
  delivered: "border-sky-300/30 bg-sky-300/10 text-sky-100",
} as const;

const lightToneClasses = {
  neutral: "border-slate-500/30 bg-slate-500/10 text-slate-800",
  research: "border-amber-600/30 bg-amber-500/10 text-amber-900",
  published: "border-teal-600/30 bg-teal-500/10 text-teal-900",
  delivered: "border-sky-600/30 bg-sky-500/10 text-sky-900",
} as const;

export default function EvidenceCard({
  project,
  variant = "full",
  headingLevel = "h3",
}: {
  project: PortfolioProject;
  variant?: "compact" | "full";
  headingLevel?: "h3" | "h4";
}) {
  const maturity = maturityPresentation(project.maturity);
  const publicLinks = publicEvidenceLinks(project);
  const privateNotes = project.evidence.filter(
    (item) => item.access === "private",
  );
  const compact = variant === "compact";
  const Heading = headingLevel;

  return (
    <article
      className={
        compact
          ? "h-full rounded-2xl border border-white/15 bg-white/[0.07] p-4 text-left backdrop-blur"
          : "flex h-full flex-col rounded-3xl border border-border bg-background p-6 shadow-soft"
      }
      data-evidence-project={project.id}
    >
      <Heading
        className={
          compact
            ? "text-base font-bold text-white"
            : "text-2xl font-bold text-foreground"
        }
      >
        {project.title}
      </Heading>

      <div className="mt-3">
        <span
          className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] ${(compact ? darkToneClasses : lightToneClasses)[maturity.tone]}`}
        >
          {maturity.label}
        </span>
        <span className="sr-only">. {maturity.description}</span>
      </div>

      <p
        className={
          compact
            ? "mt-3 text-sm leading-6 text-slate-200"
            : "mt-4 leading-7 text-slate-700 dark:text-slate-200"
        }
      >
        {project.summary}
      </p>

      {project.caveat ? (
        <p
          className={
            compact
              ? "mt-3 text-xs font-medium leading-5 text-slate-200"
              : "mt-4 rounded-2xl border border-amber-500/20 bg-amber-500/10 p-4 text-sm font-medium leading-6 text-foreground"
          }
        >
          {project.caveat}
        </p>
      ) : null}

      <div className={compact ? "mt-4" : "mt-6"}>
        {publicLinks.length > 0 ? (
          <ul className="flex flex-wrap gap-3" aria-label={`${project.title} evidence`}>
            {(compact ? publicLinks.slice(0, 1) : publicLinks).map((item) => {
              const external = item.href.startsWith("https://");
              const className = compact
                ? "inline-flex min-h-11 items-center font-bold text-teal-200 underline decoration-teal-200/50 underline-offset-4 hover:text-white"
                : "inline-flex min-h-11 items-center justify-center rounded-xl bg-teal-800 px-4 py-2 text-sm font-bold text-white transition hover:bg-teal-900";

              return (
                <li key={item.label}>
                  {external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={className}
                    >
                      {item.label}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : (
                    <Link href={item.href} className={className}>
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="text-sm font-semibold text-foreground-secondary">
            No public evidence link is available.
          </p>
        )}

        {!compact && privateNotes.length > 0 ? (
          <ul className="mt-4 text-sm font-medium text-slate-700 dark:text-slate-200">
            {privateNotes.map((item) => (
              <li key={item.label}>{item.label}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
