import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import EvidenceCard from "@/app/components/EvidenceCard";
import {
  canPresentOnHomepage,
  homepageEvidenceProjects,
  maturityPresentation,
  portfolioProjects,
  publicEvidenceLinks,
} from "@/lib/portfolio-evidence";
import { PROJECT_MATURITY, type PortfolioProject } from "@/types/portfolio-evidence";

const maturitySet = new Set<string>(PROJECT_MATURITY);

describe("portfolio evidence semantics", () => {
  it("uses only allowlisted maturity states", () => {
    for (const project of portfolioProjects) {
      expect(maturitySet.has(project.maturity)).toBe(true);
    }
  });

  it.each(["shipped", "", undefined])(
    "fails closed for unrecognized status %s",
    (status) => {
      expect(maturityPresentation(status).label).toBe("Status unverified");
    },
  );

  it("publishes only safe public evidence links", () => {
    for (const project of portfolioProjects) {
      expect(publicEvidenceLinks(project).length).toBeGreaterThan(0);
      for (const link of publicEvidenceLinks(project)) {
        expect(link.access).toBe("public");
        expect(link.href).toMatch(/^(https:\/\/|\/(?!\/))/);
        expect(link.href).not.toMatch(/github\.com\/.*finance_feedback_engine/i);
      }
    }
  });

  it("rejects protocol-relative evidence links", () => {
    const unsafeProject = {
      id: "unsafe",
      title: "Unsafe evidence fixture",
      summary: "Test fixture only.",
      maturity: "prototype",
      evidence: [
        {
          label: "Protocol-relative link",
          href: "//example.com",
          access: "public",
        },
      ],
    } as unknown as PortfolioProject;

    expect(publicEvidenceLinks(unsafeProject)).toEqual([]);
  });

  it("renders private evidence as text, never as an action", () => {
    const project = portfolioProjects.find(
      (entry) => entry.id === "finance-feedback-engine",
    );
    expect(project).toBeDefined();

    render(<EvidenceCard project={project!} />);

    expect(screen.getByText(/implementation repository — private/i)).toBeVisible();
    expect(
      screen.queryByRole("link", { name: /implementation repository/i }),
    ).not.toBeInTheDocument();
  });

  it("renders an explicit empty state and no action without public evidence", () => {
    const emptyProject: PortfolioProject = {
      id: "empty",
      title: "Bounded concept",
      summary: "No implementation claim.",
      maturity: "concept",
      evidence: [],
    };

    expect(canPresentOnHomepage(emptyProject)).toBe(false);
    render(<EvidenceCard project={emptyProject} />);

    expect(screen.getByText("No public evidence link is available.")).toBeVisible();
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("requires exactly two qualified homepage evidence entries", () => {
    expect(homepageEvidenceProjects.length).toBe(2);
    for (const project of homepageEvidenceProjects) {
      expect(canPresentOnHomepage(project)).toBe(true);
      expect(publicEvidenceLinks(project).length).toBeGreaterThan(0);
    }
  });

  it("does not restore unsupported client or outcome claims", () => {
    const serialized = JSON.stringify(portfolioProjects);
    expect(serialized).not.toMatch(
      /Turtle Creek Hardware|Wilmerding Bakery|Mon Valley Tutoring|Penn Ave Auto Repair|Turtle Creek Community Center/i,
    );
    expect(serialized).not.toMatch(/\b\d+% (increase|reduction|improvement)/i);
  });

  it("presents paper research with its caveat before its actions", () => {
    const project = portfolioProjects.find(
      (entry) => entry.id === "finance-feedback-engine",
    );
    expect(project).toBeDefined();

    const { container } = render(<EvidenceCard project={project!} />);
    const text = container.textContent ?? "";

    expect(text).toMatch(/Paper-only research/i);
    expect(text).toMatch(/not brokerage results/i);
    expect(text).not.toMatch(/View proof|returns|profitable|track record/i);

    expect(text.indexOf(project!.title)).toBeLessThan(
      text.indexOf("Paper-only research"),
    );
    expect(text.indexOf("Paper-only research")).toBeLessThan(
      text.indexOf(project!.summary),
    );
    expect(text.indexOf(project!.summary)).toBeLessThan(
      text.indexOf(project!.caveat!),
    );
    expect(text.indexOf(project!.caveat!)).toBeLessThan(
      text.indexOf("See public evidence"),
    );
  });
});
