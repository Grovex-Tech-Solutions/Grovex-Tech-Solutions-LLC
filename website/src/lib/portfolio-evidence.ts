import {
  PROJECT_MATURITY,
  type PortfolioProject,
  type ProjectMaturity,
  type PublicEvidenceLink,
} from "@/types/portfolio-evidence";

const maturitySet = new Set<string>(PROJECT_MATURITY);

export const portfolioProjects = [
  {
    id: "grovex-website",
    title: "GroveX website and positioning",
    summary:
      "A deployed public website with a browsable source repository and static-build workflow.",
    maturity: "published-system",
    caveat:
      "Evidence demonstrates this published GroveX system; it does not claim a client outcome.",
    featured: true,
    evidence: [
      {
        label: "Open published website",
        href: "https://grovextech.com",
        access: "public",
      },
      {
        label: "Browse public source",
        href: "https://github.com/Grovex-Tech-Solutions/Grovex-Tech-Solutions-LLC",
        access: "public",
      },
    ],
  },
  {
    id: "finance-feedback-engine",
    title: "Finance Feedback Engine",
    summary:
      "An auditable research system for evaluating decision quality with gated, paper-mode evidence.",
    maturity: "paper-research",
    caveat:
      "Paper-only research; not brokerage results or financial advice. Metrics remain withheld unless the source explicitly meets the publication contract.",
    featured: true,
    evidence: [
      {
        label: "See public evidence",
        href: "/portfolio/finance-feedback-engine/",
        access: "public",
      },
      {
        label: "Read publication policy",
        href: "https://ffe.grovextech.com/publication-policy.html",
        access: "public",
      },
      {
        label: "Implementation repository — private",
        access: "private",
      },
    ],
  },
] as const satisfies readonly PortfolioProject[];

export type MaturityPresentation = {
  label: string;
  description: string;
  tone: "neutral" | "research" | "published" | "delivered";
};

const maturityPresentations: Record<ProjectMaturity, MaturityPresentation> = {
  concept: {
    label: "Concept",
    description: "Described intent without an implementation claim.",
    tone: "neutral",
  },
  prototype: {
    label: "Prototype",
    description: "Working code that is not represented as an operated service.",
    tone: "neutral",
  },
  "paper-research": {
    label: "Paper-only research",
    description: "Research or simulation only; no live-capital claim.",
    tone: "research",
  },
  "published-system": {
    label: "Published system",
    description: "Deployed and publicly reachable.",
    tone: "published",
  },
  "client-delivered": {
    label: "Client-delivered",
    description: "Delivered externally with publication approval retained.",
    tone: "delivered",
  },
};

const unverifiedPresentation: MaturityPresentation = {
  label: "Status unverified",
  description: "No favorable maturity claim is shown without an allowlisted status.",
  tone: "neutral",
};

export function maturityPresentation(value: unknown): MaturityPresentation {
  if (typeof value !== "string") return unverifiedPresentation;

  const normalized = value.trim().toLowerCase();
  if (!maturitySet.has(normalized)) return unverifiedPresentation;

  return maturityPresentations[normalized as ProjectMaturity] ?? unverifiedPresentation;
}

export function publicEvidenceLinks(
  project: PortfolioProject,
): PublicEvidenceLink[] {
  return project.evidence.filter(
    (item): item is PublicEvidenceLink =>
      item.access === "public" &&
      (item.href.startsWith("https://") ||
        (item.href.startsWith("/") && !item.href.startsWith("//"))),
  );
}

export function canPresentOnHomepage(project: PortfolioProject): boolean {
  return (
    project.featured === true &&
    project.maturity !== "concept" &&
    publicEvidenceLinks(project).length > 0
  );
}

export const homepageEvidenceProjects = portfolioProjects
  .filter(canPresentOnHomepage)
  .slice(0, 2);
