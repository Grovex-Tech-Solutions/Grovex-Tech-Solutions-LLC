# GXAUDIT-10 — Website credibility and design brief

**Status:** Design brief approved; frontend implementation not authorized

**Prepared:** 2026-08-29

**Scope:** GroveX Technologies & Solutions LLC public website

**Decision marker:** `OWNER_DECISION_GXAUDIT_10_2026_08_29`

## 1. Executive direction

Keep the current GroveX visual system and improve how it communicates proof. Do not perform a broad redesign.

The site has two legitimate jobs that should remain visibly related but structurally distinct:

1. **Service conversion:** help a local small-business buyer understand what GroveX does, why it is a credible fit, and how to start a conversation.
2. **Technical evidence:** let a technical reviewer inspect project maturity, methods, public-safe artifacts, limitations, and dated progress without implying live-capital performance or access to private repositories.

The recommended design move is a **claim-to-evidence layer**, not more marketing volume. Every material technical or performance-adjacent claim should answer:

- What is the claim?
- What public-safe artifact supports it?
- What is the project's maturity and operating mode?
- When was the evidence last updated?
- What limitation or caveat applies?

The home and service routes should stay buyer-oriented. Detailed research and audit material should live behind explicit portfolio, research, progress, and audit paths.

## 2. Authorization boundary

This document is the entire authorized deliverable for GXAUDIT-10.

It does **not** authorize:

- editing frontend components, copy, routes, generated output, or production content;
- deploying the site or changing DNS, Cloudflare, GitHub Pages, or CI;
- publishing private repositories or migration-source data;
- exposing broker, account, order, trade, training, or protected trace data;
- representing paper results as live-capital performance;
- creating or using testimonials without attributable approval;
- touching or reintroducing the defunct legacy property or brand.

Implementation must be split into separately approved, reviewable tickets.

## 3. Evidence reviewed

The brief is grounded in the repository and public surfaces as observed on 2026-08-29:

- `website/src/app/page.tsx`
- `website/src/app/components/EnhancedHero.tsx`
- `website/src/app/components/OperatingSystemSection.tsx`
- `website/src/app/components/PortfolioSection.tsx`
- `website/src/app/components/WhyChooseUs.tsx`
- `website/src/app/components/Testimonials.tsx`
- `website/src/app/portfolio/page.tsx`
- `website/src/app/portfolio/finance-feedback-engine/page.tsx`
- `website/src/app/portfolio/finance-feedback-engine/FfeLiveFeedPanel.tsx`
- `website/src/app/about/page.tsx`
- `website/src/app/services/page.tsx`
- `website/src/components/MobileNavigation.tsx`
- `website/src/lib/structured-data.ts`
- `website/src/content/global/business.json`
- `website/src/content/testimonials.json`
- `website/src/lib/content/loader.ts`
- `website/src/app/portfolio/page.tsx.bak`
- `.github/workflows/grovex-website.yml`
- `docs/public-research-audit-program.md`
- `docs/website-specification.md`
- `website/content-audit-report.md`
- `website/professional-standards-validation.md`
- public responses from `grovextech.com`, `ffe.grovextech.com`, and linked GitHub pages.

Observed public checks:

| Surface | Observation |
|---|---|
| `grovextech.com`, `/portfolio`, and the FFE showcase | HTTP 200 |
| `ffe.grovextech.com`, `feed.json`, and publication policy | HTTP 200 |
| FFE public feed | `mode: paper`; generated/source timestamps were 2026-06-26 |
| Portfolio-linked private FFE repository URL | HTTP 404 to an unauthenticated public visitor |
| Unrendered testimonial, backup-page, and audit artifacts in the public repository | Publicly readable despite not being mounted in the current application |

These are point-in-time observations, not permanent guarantees.

## 4. Current-state assessment

### 4.1 Keep

- The home page's local-business orientation and clear contact path.
- The practical “business foundations → systems → optimization” narrative.
- Existing typography, card system, responsive layouts, and restrained local-business hierarchy; resolve the documented warm-palette versus implemented cool-palette conflict before prescribing new status colors.
- The separation between the portfolio index and the deeper FFE showcase.
- Existing paper-mode and “not a promise of returns” caveats on the FFE page.
- The public research/audit program's fail-closed publication principles.
- Explicit project maturity language where it is already used.

### 4.2 Change before adding more proof surfaces

| Priority | Finding | Credibility consequence | Required future correction |
|---|---|---|---|
| P0 | The FFE showcase calls the public feed “live,” while the observed feed reports source and generated timestamps from 2026-06-26. | A reachable feed can still be stale; “live” implies freshness that the artifact does not prove. | Show `source_as_of`, `generated_at`, mode, and an explicit freshness state. Fail closed to **stale** or **unavailable** and suppress metric interpretation when outside the approved freshness window. |
| P0 | The site describes the FFE source as inspectable and links to a repository that returns 404 to public visitors. | Public users cannot inspect the cited implementation. | Remove the public-proof implication. Link to public-safe docs, methodology, audits, releases, or a deliberately published artifact index. A private repository may be labeled private but must not be presented as public evidence. |
| P0 | The public repository contains several separate sets of unverified testimonial/person/business data, a fallback that manufactures a sample testimonial, and a committed backup page with unsupported outcome metrics. These are not rendered today, but they remain publicly readable and shippable. | Unmounting is not deletion or validation; a future import or loader failure could publish false social proof. | Remove the unverified datasets, fallback content, backup page, and obsolete audit claims from the repository tip. Future schemas must require consent, source, date, and verification, and missing data must return an empty set. |
| P0 | Site-wide JSON-LD asserts `foundingDate: 2014` and `numberOfEmployees: 2-10`, while the visible About story points to a 2025 start and a solo founder; another public content file says `10-50`. | Machine-readable identity claims contradict visible copy and each other. | Remove these fields until the owner confirms the legal facts, then source structured data and visible identity from one validated record. |
| P0 | The active business/ticket identity is “GroveX Technologies & Solutions LLC,” while website source consistently uses “Grovex Technologies & Software Solutions LLC”; the tree also varies between `GroveX`, `Grovex`, and `GroveX Tech`. | Repository, machine-readable, and owner-governance records disagree about identity. | Verify the registration, then establish one canonical public display name and exact legal-name field; apply them consistently to metadata, JSON-LD, footer, about, contact, and policy surfaces. |
| P1 | The FFE panel defaults missing upstream `mode` and delay values to `paper` and `15`, and renders fetched data as ready without a freshness policy. | A missing safety field is silently repaired into a reassuring claim. | Missing or unsupported mode must render `insufficient evidence`; missing delay must be omitted; freshness must derive from a publisher-owned contract. |
| P1 | Feed metric modes such as `PUBLIC`, `SIM`, `SHADOW`, and `DELAYED` share one card treatment with no plain-language legend. | Simulation and measured/delayed evidence can look equivalent. | Define and visually distinguish each mode before showing its value; carry the mode and caveat with any excerpted metric. |
| P1 | Mobile navigation describes Portfolio as “completed projects,” while portfolio entries include active and in-development work. | Navigation overstates maturity before the visitor sees status labels. | Rename the description to “project work and public evidence” or equivalent. |
| P1 | Project cards combine maturity, public artifacts, private source links, and generic “View Code” actions in one visual treatment. | Visitors cannot quickly distinguish shipped work, research infrastructure, prototypes, and planned work. | Give every card a maturity badge, operating-mode badge when relevant, evidence date, and only actions that the public visitor can actually use. |
| P1 | The `/services` page presents two different scopes for a `$499` “Starter Website” package. | A buyer sees conflicting deliverables at the point where precision matters most. | Establish one canonical dated package and clearly state inclusions and exclusions. |
| P1 | The existing research/audit program proposes strong evidence routes, but the marketing site has no concise shared claim/proof grammar. | Technical detail is concentrated in one showcase and is difficult to compare across projects. | Define reusable evidence primitives and a public-safe manifest before adding several bespoke dashboards. |
| P2 | Some broad experience and capability language lacks an adjacent artifact or clear scope qualifier. | Credibility relies on prose rather than verifiable delivery evidence. | Prefer specific, attributable statements and link each material claim to a relevant public artifact or clearly mark it as process/capability description. |

### 4.3 Remove or prohibit

- Do not use customer logos, testimonials, ratings, outcome percentages, client counts, or “trusted by” treatments without attributable approval and retained evidence.
- Do not use private-repository links as public proof.
- Do not call a feed, metric, audit, or status “live” solely because its URL responds.
- Do not present development status as completion.
- Do not publish investment-return comparisons, alpha claims, simulated-vs-live ambiguity, or real-account evidence.
- Do not create decorative dashboards with invented or manually curated “sample” numbers.

## 5. Audience and information architecture

### 5.1 Primary audience: local service buyer

A small-business visitor should be able to answer, in order:

1. Can GroveX solve the kind of operational problem I have?
2. Is it local, reachable, and clear about scope?
3. What work or process demonstrates competence?
4. What happens after I make contact?

Keep this path short:

`Home → Service detail or Portfolio → Contact`

The home page should show no more than a compact proof preview: two or three verified artifacts, each with a plain-language result or purpose and a visible status.

### 5.2 Secondary audience: technical reviewer

A reviewer should be able to answer:

1. What is built versus planned?
2. What evidence is public and inspectable?
3. What mode, dataset boundary, and freshness apply?
4. What failed, remains unknown, or is intentionally private?
5. How can the artifact be reproduced or audited without privileged access?

Use this path:

`Portfolio → Project showcase → Methodology / Progress / Audit artifact`

### 5.3 Recommended route responsibilities

| Route | Responsibility | Must not become |
|---|---|---|
| `/` | Local positioning, service model, compact proof preview, contact | A research dashboard or trading-product pitch |
| `/services` and service detail routes | Scope, deliverables, process, pricing boundary, next step | Unsupported claims or generic capability lists |
| `/portfolio` | Comparable project cards with maturity, public proof, date, and usable actions | A uniform gallery that implies every project is complete |
| `/portfolio/[project]` | Project problem, scope, maturity, architecture summary, artifacts, limitations | A private-repository proxy or performance advertisement |
| `/research` | Methodology and evidence standards | A stream of uncaveated findings |
| `/progress` | Dated, generated project/milestone status | A manually flattering activity feed |
| `/audits` | Public-safe audit index and artifact metadata | Raw internal traces or real-account data |
| `/about` | Identity, local presence, operating principles, attributable experience | Inflated biography or unsupported social proof |
| `/privacy` and `/terms` | Plain-language handling of contact/booking data and service-site terms, reviewed by the owner or counsel | Boilerplate presented as legal advice or policy the business does not follow |

`/research`, `/progress`, and `/audits` should only be implemented after a sanitized static manifest and freshness/failure behavior are defined. Empty honest routes are worse than no routes; do not add them until at least one qualified artifact exists.

### 5.4 Page-by-page design recommendations

| Current surface | Keep | Future approved change | Avoid |
|---|---|---|---|
| `app/page.tsx` composition | Hero → practical systems → services → portfolio → about → contact progression | Add at most one compact verified-proof row between the service narrative and portfolio when qualified artifacts exist | Turning the home route into a KPI or research dashboard |
| `EnhancedHero.tsx` | Local, practical buyer language and primary consult action | A restrained secondary action such as “See verified work,” only when its destination contains qualified proof | Research jargon, trading metrics, unverifiable superlatives, or multiple competing calls to action |
| `OperatingSystemSection.tsx` | Foundations → systems → optimization mental model | Pair each layer with one concrete public-safe example where available | Suggesting every visitor needs bespoke software or AI |
| `WhyChooseUs.tsx` | Process and communication emphasis | Prefer “How we work” framing; connect material claims to process artifacts or scoped examples | Implying endorsements or measured outcomes the site cannot substantiate |
| `PortfolioSection.tsx` | Compact visual preview and current design language | Show maturity plus one qualified evidence action per item; omit filler categories with no artifact | Generic placeholder projects or identical treatment for planned and delivered work |
| `portfolio/page.tsx` | Deeper project browsing and public organization link | Replace broad proof slogans with comparable maturity/mode/date/caveat fields; remove the unauthenticated FFE 404 action | “Completed projects,” “View Code,” or “GitHub-backed” when the specific evidence is private or incomplete |
| `portfolio/finance-feedback-engine/page.tsx` | Paper-mode caveats, architecture explanation, publication-policy links | Lead with mode/freshness/limitations; use public-safe artifact links and label source as private if mentioned | Equating a reachable endpoint with current evidence or claiming public inspectability of private code |
| `FfeLiveFeedPanel.tsx` | The real public feed integration and visible source timestamp | Rename conceptually to a public evidence/status snapshot; render explicit current/aging/stale/unavailable states; remove reassuring defaults when required fields are absent | Unconditional “live” copy, frontend-invented thresholds, defaulted safety labels, or stale metrics presented as current |
| `about/page.tsx` | Local identity, operating principles, and attributable experience | Apply canonical identity and link specific experience claims to public-safe evidence where practical | Vanity counters, inflated biography, or unapproved partner/client references |
| `lib/structured-data.ts` and public business content | Consistent address/contact facts | Remove disputed founding/headcount fields until owner-confirmed; move public identity to one validated record | Contradictory invisible claims in site-wide JSON-LD |
| `services/components/*` | Clear service lanes and published pricing | Reconcile the duplicate `$499` package into one dated scope | Two definitions for one package or capability claims presented as delivered work |
| `MobileNavigation.tsx` | Current simple route set | Describe Portfolio as project work and public evidence; align CTA purpose with desktop | Calling all portfolio entries completed projects |
| Testimonial/content loaders and backup artifacts | Nothing from current unverified data | Delete unverified entries and unsupported metrics; require consent/source/date/verification; return `[]` when absent | Publishing or manufacturing any current name, business, rating, quote, or outcome |
| Future `/research`, `/progress`, `/audits` | The governance model in `public-research-audit-program.md` | Create only after the first sanitized manifest and qualified artifact are available | Empty showcase routes, raw internal data, or hand-edited status theater |

### 5.5 Copy direction

Use dated specifics and buyer language instead of aspiration or category jargon. Final copy still requires fact confirmation.

| Surface | Direction |
|---|---|
| Home hero | The existing “Reliable websites, systems, and IT support for local business” is clear. Keep it or test a similarly concrete local line; do not replace it with an abstract AI/research claim. |
| Local identity | Replace repeated “is being built” language with an owner-confirmed present-tense statement such as “Owner-operated in Turtle Creek since `[confirmed year]`.” Never publish the bracketed placeholder. |
| Primary CTA | Prefer a plain description of the next step, such as “Get a 20-minute look at your setup,” over consultant language when targeting a small local operator. State price and obligation honestly. |
| Portfolio FFE action | Use “Read the engineering write-up” or “See public evidence,” only when the target resolves; do not use “View proof” for a paper-mode system. |
| FFE hero | Lead with “Paper account · simulated · not financial advice.” Explain that implementation source is private and identify the exact public architecture/methodology artifacts available. |
| FFE status | Use “Public evidence snapshot,” with source date and derived current/aging/stale/unavailable state. Withhold figures when policy says stale. |
| Team language | Use owner/operator language unless additional staff are factually confirmed. Avoid “our team” as a generic trust device. |

The FFE product boundary should be explicit: it is evidence of how GroveX approaches auditable system engineering, not a customer trading product, return advertisement, or promise that every client engagement uses the same architecture.

## 6. Claim-to-evidence design system

### 6.1 Evidence card anatomy

Use one reusable anatomy on portfolio, project, research, and audit surfaces:

1. **Claim or artifact title** — one concrete statement.
2. **Artifact type** — audit, release, methodology, code, demo, benchmark, or case study.
3. **Maturity** — planned, prototype, active development, paper validation, production, or retired.
4. **Operating mode** — where relevant: static, sandbox, paper, or live. “Live” must never be inferred.
5. **Evidence date** — artifact date plus `source_as_of` when data-backed.
6. **Freshness state** — current, aging, stale, unavailable, or not applicable; thresholds come from the artifact contract, not UI guesswork.
7. **Scope/caveat** — the most important limitation in plain language.
8. **Public action** — a link that is expected to work for an unauthenticated visitor.
9. **Stable identifier** — audit ID, release tag, commit, ticket, or content digest when safe to expose.

### 6.2 Visual hierarchy

Preserve the existing GroveX component language. First reconcile the warm-palette guidance in the design documents with the cool blue/cyan implementation; do not create a third palette. Then add semantic status roles:

- **Artifact/action:** the approved existing brand accent, reserved for usable public links and navigation—not proof by itself.
- **Neutral:** planned, descriptive, or not-applicable status.
- **Warning:** aging, incomplete, or uncertain evidence.
- **Failure:** stale, unavailable, failed, or retired evidence; never use this treatment merely for decoration.
- **Monospace metadata row:** dates, identifiers, mode, and digest fragments.
- **Plain-language caveat block:** always visible, not hidden behind a tooltip.

Do not encode status by color alone. Every token requires text and accessible contrast.

### 6.3 Screen-level composition sketches

These sketches define hierarchy, not final copy or a frontend specification.

**Home — conversion first, proof as a compact supporting layer**

```text
[Local buyer hero]
  Practical promise + Book a Consult + optional See Verified Work
[Business foundations → systems → optimization]
[Service choices]
[Verified work preview]
  [Artifact card: local/web] [Artifact card: technical/paper]
  Each: maturity | as-of | caveat | usable public action
[About/local presence]
[Contact]
```

Use the existing systems-map/pixel-art language as a subtle thread between sections. The proof preview should feel denser and more technical than service cards, but remain shorter than the service story.

**Portfolio — comparison before detail**

```text
[Portfolio purpose + evidence legend]
[Filters only if the project set later justifies them]
[Project card]
  title                       [maturity]
  one-sentence bounded scope  [mode, if applicable]
  artifact date | freshness
  primary caveat
  [Open showcase] [Open public artifact]
```

**Technical project — boundaries before metrics**

```text
[Project name + bounded purpose]
[maturity] [mode] [freshness] [source as of]
[What this demonstrates] [What this does not demonstrate]
[Public artifacts]
[Architecture / method]
[Paper or backtest evidence, only when qualified]
[Limitations and known failures]
[Dated progress / audits]
```

The distinctive visual moment should come from coherent information design—status rails, monospace provenance, restrained system diagrams, and existing GroveX pixel assets—not decorative charts or invented activity.

### 6.4 Claim pattern

Preferred:

> **Paper-mode evidence pipeline**
>
> Public snapshot generated 2026-06-26 from a source as of 2026-06-26. **Status: stale.** Research-use only; not live-capital performance. [Read publication policy]

Not acceptable:

> Live trading intelligence with transparent performance.

### 6.5 Case-study pattern

A case study may be labeled **Verified** only when all applicable fields have retained provenance:

- client/owner publication approval;
- problem and bounded scope;
- delivered artifact or accessible demonstration;
- dates and current operating status;
- outcome evidence with measurement method;
- limitations and what GroveX did not do.

Until then, use one of:

- **Internal build** — first-party project with public-safe artifacts;
- **Demonstration** — explicitly synthetic or illustrative, with no implied customer;
- **In development** — current work with dated progress evidence;
- **Planned** — no implementation claim.

Never create a fictional client, quote, logo, rating, before/after metric, or “representative” outcome.

## 7. Finance Feedback Engine presentation

FFE is a useful proof surface only if the site makes its boundaries more prominent than its metrics.

### 7.1 Required hierarchy

1. **Research infrastructure / paper mode** at the top of the page.
2. **Current freshness state** derived from artifact timestamps and contract thresholds.
3. **What the public artifact demonstrates**: publication workflow, auditability, milestone structure, and paper-mode research process.
4. **What it does not demonstrate**: live-capital returns, profitability, investment suitability, or public access to private implementation.
5. **Public-safe links** to publication policy, methodology, roadmap, and dated artifacts.
6. Metrics only after those boundaries, and only when fresh enough for the intended interpretation.

### 7.2 Failure behavior

- URL available + evidence stale → show **Stale**, not Live.
- URL unavailable or schema invalid → show **Unavailable** and no cached success implication.
- Mode missing or unsupported → show **Insufficient evidence**.
- Freshness threshold missing → show the dates without claiming currentness.
- Private source → label it private or omit the link; point to a public-safe artifact instead.

The UI must not repair, extrapolate, or silently substitute missing data.

### 7.3 Credible paper/backtest evidence pattern

A future public financial-research card should emphasize study validity before outcomes. Show only public-safe, governed fields:

- paper, simulation, backtest, forward-paper, or live mode as an explicit label;
- hypothesis and decision being tested;
- instrument/universe and date range;
- train, validation, holdout, and embargo boundaries when applicable;
- sample count and coverage;
- baseline/comparator and predeclared success gate;
- transaction-cost, fee, spread, slippage, latency, and market-impact assumptions;
- out-of-sample or forward-paper result separately from in-sample result;
- uncertainty, failure modes, invalidations, and known contamination;
- artifact version, generated/source dates, and stable digest/reference.

Do not lead with cumulative return, win rate, Sharpe-like statistics, or model rankings. Never combine incompatible datasets or let a contaminated/retired leaderboard support a current claim. If assumptions or holdout evidence are absent, render `insufficient evidence` with the reason instead of a performance badge.

### 7.4 Transparent agent-workflow pattern

Agent-assisted delivery can demonstrate process discipline, but the credible unit is the governed workflow—not an anthropomorphic “autonomous agent” claim.

A future workflow card may show:

1. bounded ticket and acceptance criteria;
2. named human authority/approval boundary;
3. agent role (analysis, drafting, implementation, or review);
4. branch and reviewable change set;
5. deterministic tests, security checks, and evidence artifacts;
6. human/owner decision when required;
7. merge/deploy state and read-back verification;
8. known limitations or rejected findings.

Use public-safe ticket, PR, release, test-summary, and audit references where available. Do not publish hidden prompts, chain-of-thought, credentials, session transcripts, protected traces, private repository data, or raw tool payloads. Claude and other LLM outputs must be described as advisory unless a separately governed system has explicit authority; passing prose review is never equivalent to deterministic validation.

## 8. Recommended component and content model

These are design targets, not implementation instructions or authorization.

### 8.1 Shared data contract

A future public-safe artifact manifest should explicitly carry fields equivalent to:

```text
id
project
artifact_type
title
summary
maturity
mode
published_at
source_as_of
freshness_policy
status
public_url
scope_caveat
provenance_ref
```

The publisher owns sanitization and validity. The frontend renders declared state and fails closed; it must not infer stronger claims from absent fields.

### 8.2 Reusable presentation primitives

| Primitive | Purpose | Initial use |
|---|---|---|
| `MaturityBadge` | Distinguish planned, in-development, validated, production, and retired work | Portfolio cards and project hero |
| `EvidenceStatus` | Display mode, artifact/source dates, and freshness | FFE showcase and future progress cards |
| `ArtifactCard` | Render one public-safe item with provenance and caveat | Portfolio, research, and audit routes |
| `ClaimWithProof` | Pair buyer-facing capability language with a concrete artifact | Home proof preview and service pages |
| `LimitationsPanel` | Keep boundaries visible near evidence | Technical project pages |
| `EmptyEvidenceState` | Explain why no qualified artifact is shown | Research/audit route and failed feeds |

Do not build a generalized dashboard framework first. Implement the smallest primitives against one real artifact, then reuse only what proves common.

## 9. Bite-sized implementation sequence

Each slice requires separate owner approval, a Plane ticket, tests, and a reviewed PR.

### Slice A — Immediate public credibility cleanup

This slice is deliberately subtractive. It must not wait on the identity decision, but still requires its own owner-approved ticket and PR.

- Remove all unverified testimonial datasets, manufactured fallback entries, unsupported backup-page metrics, and stale audit certifications from the public repository tip.
- Replace inaccessible private-source actions with honest public-safe actions or no action.
- Make FFE freshness and paper mode unmissable; remove unconditional “live” language and fail-open mode/delay defaults.
- Correct navigation and project-status wording.
- Add the approved financial-research disclosure to visible copy and metadata.

**Exit:** no rendered page or public repository file contains unverified social proof or outcome metrics; no source action fails unauthenticated; missing/stale evidence is withheld rather than repaired into a reassuring state.

### Slice A2 — Owner-confirmed identity and buyer facts

- Verify the exact legal name, display name, founding date, headcount representation, advertised hours, and response-time commitment.
- Remove unresolved structured-data fields until they are confirmed.
- Source visible identity and JSON-LD from one validated record.
- Reconcile the duplicate `$499` package description.

**Exit:** rendered and machine-readable business facts agree with owner-confirmed records, and one service package has one dated scope.

### Slice B — One evidence primitive

- Define the minimal public artifact contract.
- Build `EvidenceStatus` and `ArtifactCard` against FFE's publication policy and one dated snapshot.
- Add stale/unavailable/insufficient-evidence fixtures and tests.

**Exit:** one project displays claim, mode, date, freshness, caveat, and a usable public artifact without frontend inference.

### Slice C — Portfolio comparison

- Apply maturity and artifact semantics to every portfolio card.
- Remove actions that fail for public visitors.
- Add a compact, verified proof preview to the home page only if qualified artifacts exist.

**Exit:** a visitor can distinguish shipped, active, demonstration, planned, and retired work before opening a project.

### Slice D — Research, progress, and audit indexes

- Generate sanitized static manifests from governed public-safe artifacts.
- Add `/research`, `/progress`, and `/audits` only as each has qualified content.
- Render explicit generated/source dates and fail-closed empty states.

**Exit:** pages are generated from traceable artifacts, contain no protected data, and cannot imply freshness when publication stops.

### Slice E — Verified case studies

- Add only owner/client-approved case studies with retained provenance.
- Keep internal builds and demonstrations visibly distinct from customer outcomes.

**Exit:** every endorsement and outcome claim can be traced to approval and evidence.

## 10. Design acceptance criteria for future implementation

A future implementation is ready for review only if all applicable checks pass.

### Existing validation baseline and gaps

From `website/`, the repository currently exposes these real checks:

```bash
npm run lint
npm run build
npm test
npm run test:content
npm run test:seo
npm run test:accessibility
```

`next build` supplies type checking; there is no standalone `typecheck` script. The current GitHub workflow runs install, lint, and build but omits `npm test`, so Vitest assertions are not CI-gating. The current accessibility script does not constitute a full axe browser pass. A future implementation must either close those gaps or state exactly which checks remain non-gating; it must not claim CI enforcement that does not exist.

### Credibility

- [ ] Every project shows an explicit maturity state.
- [ ] Paper, sandbox, static, and live modes are never conflated.
- [ ] Every performance-adjacent claim has a public-safe artifact, date, and caveat.
- [ ] Stale, missing, invalid, or unsupported evidence fails closed.
- [ ] Every visible external action works for an unauthenticated visitor or is honestly labeled unavailable/private.
- [ ] No rendered or publicly readable repository artifact contains an unverified testimonial, client, rating, logo, fabricated outcome, or stale certification.
- [ ] Company display/legal names and structured business facts match owner-confirmed records.
- [ ] Financial-research surfaces state paper/simulated mode, limitations, and “not financial advice” where outcome-adjacent material appears.

### Buyer experience

- [ ] Home and service routes remain focused on local-business problems and next steps.
- [ ] Technical detail does not displace primary contact/service actions.
- [ ] Portfolio status is understandable without opening each project.
- [ ] Mobile labels do not overstate maturity.

### Technical reviewer experience

- [ ] Artifact type, maturity, mode, published date, source date, freshness, and limitations are visible.
- [ ] Public proof does not depend on repository authentication.
- [ ] A private implementation is never described as publicly inspectable.
- [ ] Research and audit pages are traceable to generated, sanitized artifacts.

### Accessibility and responsive behavior

- [ ] Status is conveyed by text and semantics, not color alone.
- [ ] Evidence metadata remains legible and ordered on narrow screens.
- [ ] External-link purpose and unavailable states are announced clearly.
- [ ] Motion and decorative systems graphics do not obscure proof or caveats.
- [ ] Keyboard order follows claim → metadata → caveat → action.

### Governance and privacy

- [ ] No credentials, real-account data, raw broker payloads, protected traces, or private migration-source data enter the repository or generated site.
- [ ] Every artifact has a producer/owner and a deterministic sanitization boundary.
- [ ] New claims and routes map to separately approved Plane tickets.
- [ ] Deployment remains a separate action with its own verification.

## 11. Owner decisions required before implementation

Keep these decisions separate from this brief:

1. Confirm the canonical public display name and exact legal name against the registration.
2. Confirm or remove the founding date, headcount range, seven-day advertised hours, and response-time commitment.
3. Approve the publisher-owned freshness policy for each generated artifact; do not let frontend code invent thresholds.
4. Choose which public-safe FFE artifact replaces the private source link.
5. Decide whether `ReflexNet` should be publicly defined or removed from buyer-facing pages.
6. Approve each implementation slice and any new public route independently.

Removal of unverified testimonials, manufactured fallbacks, and unsupported metrics is not contingent on choosing replacement social proof. No replacement may be created without attributable consent and evidence.

## 12. Definition of done for GXAUDIT-10

GXAUDIT-10 is complete when this brief is reviewed and stored with repository history, with Plane evidence pointing to the immutable revision.

Frontend work is explicitly **not** part of this definition of done. Completion of GXAUDIT-10 must not be read as approval to implement any recommendation above.
