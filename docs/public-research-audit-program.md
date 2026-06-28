# GroveX Public Research & Audit Program

**Status:** Phase 0 planning anchor  
**Owner:** GroveX Technologies & Solutions LLC  
**Scope:** Public visibility, grounded research workflow, KPI dashboards, paper-account evidence, and modular product progress for PF, FFE, and TA.  
**Core constraint:** PF, FFE, and TA remain independently useful modular products. Public audit work must not introduce hidden runtime coupling.

## 0. Durable tracking anchors

- **Plane project:** `GXAUDIT` — GroveX Public Research & Audits
- **Plane project UUID:** `95970b63-9bd1-4d87-917d-de6cc27a76ce`
- **Initial tickets:** `GXAUDIT-1` through `GXAUDIT-9`
- **Repo source of truth:** `docs/public-research-audit-program.md`
- **Website implementation root:** `website/`

Initial Plane ticket set:

| Ticket | Title |
|---|---|
| `GXAUDIT-1` | Phase 0 — Anchor governance, public-safety policy, and product boundaries |
| `GXAUDIT-2` | Phase 1 — Define KPI schema and evidence contracts |
| `GXAUDIT-3` | Phase 2 — Build audit generator v0 |
| `GXAUDIT-4` | Phase 3 — Publish GroveX website research/progress/audit pages |
| `GXAUDIT-5` | Phase 4 — Create n8n live evidence/update workflow |
| `GXAUDIT-6` | Phase 5 — Build paper-account KPI dashboard |
| `GXAUDIT-7` | Phase 6 — Standardize research cards and benchmark library |
| `GXAUDIT-8` | Guardrail — PF/FFE/TA modularity and coupling drift detector |
| `GXAUDIT-9` | First public audit — Modular financial research stack Phase 0 |

## 1. North Star

Build a public, evidence-backed development and research audit layer that shows:

1. what GroveX is building,
2. why each workflow is grounded in proven research/industry practice,
3. what phase each product is in,
4. what KPIs prove progress or expose risk,
5. what paper-account evidence supports or refutes each thesis,
6. what changed in code, Plane, CI, data, and runtime since the prior audit.

The public story is deliberately process-first:

> GroveX is publishing a disciplined, evidence-grounded process for building modular financial research software, with paper-account validation and transparent audit trails. This is not live-capital performance and not financial advice.

## 2. Products and boundaries

| Product | Public role | Non-negotiable boundary |
|---|---|---|
| PF / personal-finance | Portfolio/system wrapper, dashboards, options lifecycle, portfolio optimization, public KPI presentation | Must work standalone without requiring FFE or TA |
| FFE / Finance Feedback Engine | Decision-quality layer that turns TA signals + portfolio context into validated maneuvers and operational reviews | Must not become the TA ML/RL brain or PF system wrapper |
| TA / Trade-Agent | ML/RL research, labels, signals, calibration, regimes, risk/sizing proposals, paper/live-evaluation artifacts | No live execution path unless explicitly authorized |
| GroveX website | Public-facing research/progress/audit surface | Must publish public-safe summaries, not secrets, credentials, or misleading return claims |
| n8n/Hermes ops | Automation, scheduled sweeps, evidence collection, publishing pipeline | Routine successes stay quiet; findings/issues needing attention surface |

## 3. Public information architecture

Initial public website routes/pages:

| Route | Purpose | Initial content source |
|---|---|---|
| `/research` or `/research-methodology` | Explain research workflow, academic grounding, validation principles, caveats | This program doc + research cards |
| `/progress` | Current phase timeline across PF/FFE/TA/GroveX publishing | Plane + GitHub + generated snapshots |
| `/audits` | Periodic public audit index | Generated audit markdown/JSON |
| `/paper-account` | Paper-account performance dashboard and caveats | PF paper-account exports + audit generator |
| `/systems` | Architecture diagrams and modular product boundaries | Mermaid/system cards |
| `/benchmarks` | Baselines, ablations, backtest/paper comparisons | TA/FFE/PF evidence bundles |
| `/dev-log` | Human-readable shipped-progress notes | PR/Plane summaries |

## 4. KPI taxonomy

### 4.1 Engineering KPIs

| KPI | Definition | Evidence source | Publication cadence |
|---|---|---|---|
| CI pass rate | Passing required checks / total required checks | GitHub Checks | per audit |
| Test trend | Test count and pass/fail history | repo test outputs / CI | per audit |
| Type/lint health | pyright/ruff/eslint/tsc status as applicable | CI | per audit |
| PR cycle time | Open to merge duration | GitHub PR API | weekly/monthly |
| Runtime rebuild success | Latest Docker/runtime rebuild status | Docker logs / deployment scripts | per relevant change |
| Data freshness | Age of latest validated market/account data | PF/TA data checks | daily/weekly |

### 4.2 Data integrity KPIs

| KPI | Definition | Why it matters |
|---|---|---|
| PIT compliance status | Evidence that datasets/features fail closed on point-in-time rules | Prevents lookahead bias |
| Missing bar rate | Missing expected market bars / expected bars | Data completeness |
| Corporate-action correctness | Split/dividend adjustment policy and checks | Price-history correctness |
| Quote/fill timestamp skew | Difference between quote, signal, and paper/live fill times | Execution realism |
| Paper/live divergence | Difference between simulated assumptions and broker/exchange observed data | Simulator validity |
| Fee/slippage capture rate | Share of paper/live orders with explicit fee/slippage fields | Cost realism |

### 4.3 Strategy / paper-account KPIs

| KPI | Definition | Public caveat |
|---|---|---|
| Paper PnL | Net paper-account return over period | Not live-capital performance |
| Max drawdown | Peak-to-trough paper-account drawdown | Paper execution may differ from live |
| Sharpe / Sortino | Risk-adjusted return estimates | Meaningful only with enough sample size |
| Expectancy | Average expected profit/loss per trade | Requires stable trade definition |
| Exposure | Allocation by symbol, sector, asset class, strategy | Concentration risk disclosure |
| Turnover | Trades or notional turnover per period | Cost sensitivity |
| Slippage vs expected | Observed paper/live fill gap vs assumption | Execution-quality check |
| Reject/failure rate | Failed/rejected orders / attempted orders | Operational robustness |

### 4.4 Research-process KPIs

| KPI | Definition | Academic/industry rationale |
|---|---|---|
| Hypothesis pre-registration | Hypothesis stated before experiment/backtest/paper run | Reduces p-hacking and HARKing |
| Baseline comparison present | Result compared with naive/simple baselines | Prevents fake improvement |
| Out-of-sample validation | Separate evaluation window or paper-forward period | Reduces overfit risk |
| Ablation coverage | Components disabled one at a time | Identifies actual contribution |
| Reproducibility score | Can a result be rerun from committed code/data refs? | Auditability |
| Decision log completeness | Major choices linked to evidence | Governance and traceability |

### 4.5 Business/progress KPIs

| KPI | Definition | Evidence source |
|---|---|---|
| Roadmap phase completion | Done phase gates / planned gates | Plane |
| Tickets closed by phase | Completed tickets under public audit project | Plane |
| Public audit cadence | Audits published on schedule | Website/Git |
| Website freshness | Days since public dashboard/audit update | Website build metadata |
| LEI/IBKR readiness | Status of business account/legal prerequisites | Internal status only; public-safe summary optional |

## 5. Research workflow backbone

Each publicly discussed research or strategy improvement should follow this sequence unless explicitly waived:

1. **Problem statement** — what decision or failure mode are we addressing?
2. **Hypothesis / expected outcome** — stated before evaluation.
3. **Prior art scan** — academic papers, industry standards, or accepted baselines.
4. **Data contract** — point-in-time, source, quality checks, failure conditions.
5. **Baseline suite** — cash/T-bill proxy, buy-and-hold ETF, equal-weight, simple momentum, random/naive where applicable.
6. **Experiment / implementation** — linked PRs, tickets, configs, and run IDs.
7. **Ablation** — identify which component actually changed outcomes.
8. **Out-of-sample or paper-forward validation** — no claims without forward/evaluation evidence.
9. **Audit publication** — public-safe summary with limitations.
10. **Phase gate decision** — proceed, iterate, or stop.

## 6. Audit artifact types

| Artifact | Audience | Location | Notes |
|---|---|---|---|
| Internal dossier | Hermes/user | Google Docs or repo docs | Full evidence, can include operational details but no secrets |
| Evidence bundle | Hermes/CI/public-safe generator | repo artifact directory or Drive | JSON/Markdown/CSV charts, PR links, Plane IDs |
| Public audit markdown | Public | GroveX website content | Sanitized, caveated, linked evidence |
| KPI snapshot JSON | Public/internal | website static data | Powers dashboards/charts |
| Strategy/model card | Public-safe/internal variants | repo docs + website | Assumptions, known failures, validation |
| n8n workflow report | Internal/public-safe summary | n8n + website | Scheduled updates and anomaly surfacing |

## 7. Phase plan

### Phase 0 — Anchor and governance

**Goal:** Establish durable plan, Plane project, source docs, and public-safe rules.

Exit criteria:

- Plane project exists with phase tickets.
- This source-of-truth document exists in GroveX repo.
- Public claims/caveats policy drafted.
- Product boundary rules captured.

### Phase 1 — KPI schema and evidence contracts

**Goal:** Define machine-readable KPI schema and evidence requirements.

Exit criteria:

- KPI schema exists for engineering/data/research/paper/business metrics.
- Each KPI has source, update cadence, public/private classification, and failure threshold.
- Evidence bundle format is documented.

### Phase 2 — Audit generator v0

**Goal:** Generate internal and public-safe Markdown audit reports from structured inputs.

Exit criteria:

- CLI/script can generate a public audit Markdown file.
- Report includes phase, KPIs, evidence links, caveats, and next gates.
- At least one sample audit generated from real PF/FFE/TA repo/CI/Plane data.

### Phase 3 — Website publication v0

**Goal:** Add public pages for methodology, progress, audits, and paper-account caveats.

Exit criteria:

- GroveX site has public-safe research/progress/audit pages.
- Generated audit content can be rendered by the site.
- SEO/content/accessibility tests pass.

### Phase 4 — n8n live update pipeline

**Goal:** Automate evidence collection and dashboard refreshes.

Exit criteria:

- n8n workflow pulls GitHub/Plane/CI/paper-account snapshots on schedule.
- Routine successful updates are quiet.
- Anomalies create/surface Plane tickets and Telegram alerts when needed.
- Website data artifact can be refreshed by automation.

### Phase 5 — Paper-account evidence dashboard

**Goal:** Publish transparent paper-account metrics without overclaiming.

Exit criteria:

- Paper-account metrics pipeline produces PnL, drawdown, exposure, turnover, slippage/divergence, rejects/failures.
- Dashboard includes clear paper/live caveats.
- Metrics are linked to strategy cards and audit periods.

### Phase 6 — Research cards and benchmark library

**Goal:** Standardize research claims and model/strategy documentation.

Exit criteria:

- Strategy/model card template exists.
- Baseline suite documented and runnable or explicitly scoped.
- At least one PF/FFE/TA method has a completed card with prior-art grounding and validation status.

## 8. Public safety and claims policy

Public pages must:

- clearly distinguish paper-account, backtest, simulation, and live-capital evidence;
- never imply guaranteed returns;
- state “not financial advice” where trading outcomes are discussed;
- disclose limitations and sample-size caveats;
- link claims to evidence artifacts when possible;
- exclude secrets, tokens, private account identifiers, raw credentials, and private customer data;
- avoid publishing sensitive operational details that increase attack or abuse risk.

Preferred wording:

- “paper-account validation”
- “simulated execution”
- “research prototype”
- “hypothesis under evaluation”
- “risk controls under test”
- “not live-capital performance”

## 9. n8n/Hermes automation ideas

| Workflow | Trigger | Output |
|---|---|---|
| Daily evidence sweep | Scheduled market close / nightly | KPI JSON snapshot + anomalies |
| Weekly public audit draft | Weekly | Markdown audit draft + Plane review ticket |
| PR/CI digest | PR merge/check completion | Update progress ledger |
| Paper-account metrics refresh | Broker/paper export available | Dashboard data + caveat checks |
| Research prior-art queue | New phase/ticket tagged research | Hermes task to scan literature/industry baselines |
| Coupling drift detector | Repo diff / dependency change | Alert if PF starts requiring FFE/TA at runtime |
| Website publish gate | Audit approved in Plane | Build/test website and publish PR |

## 10. Immediate next actions

1. Create Plane project: **GroveX Public Research & Audits**.
2. Create phase tickets for Phases 0–6.
3. Create KPI schema draft.
4. Create public audit template.
5. Create first audit draft for current PF/FFE/TA status.
6. Add website route plan and content model.
7. Design n8n workflow skeleton for scheduled evidence collection.

## 11. Definition of done for this planning anchor

This planning anchor is complete when:

- this document is committed or otherwise durable;
- Plane contains the project/tickets needed to keep work visible;
- the first implementation ticket points to KPI schema + audit template creation;
- future Hermes sessions can discover the plan from the repo or Plane without relying on chat context.
