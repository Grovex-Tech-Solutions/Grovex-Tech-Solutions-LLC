export const PROJECT_MATURITY = [
  "concept",
  "prototype",
  "paper-research",
  "published-system",
  "client-delivered",
] as const;

export type ProjectMaturity = (typeof PROJECT_MATURITY)[number];

export type PublicEvidenceLink = {
  label: string;
  access: "public";
  href: `https://${string}` | `/${string}`;
};

export type PrivateEvidenceNote = {
  label: string;
  access: "private";
};

export type EvidenceLink = PublicEvidenceLink | PrivateEvidenceNote;

export type PortfolioProject = {
  id: string;
  title: string;
  summary: string;
  maturity: ProjectMaturity;
  caveat?: string;
  evidence: readonly EvidenceLink[];
  featured?: boolean;
};
