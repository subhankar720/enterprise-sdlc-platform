# Enterprise SDLC Skills Center

> **Purpose.** A catalog of self-contained, phase- and domain-specific skill guides for
> `enterprise-sdlc-platform`. Each file is **documentation only** — it is never auto-loaded.
> An AI coding assistant (Codex / Claude / Copilot) activates the relevant skill **on demand**:
> when a contributor touches a Python script, the `python` skill is loaded; when they edit a
> frontend module, `typescript-frontend` is loaded; and so on.

The [standard charter](../standard-charter.md) is authoritative. The planning
backlog and assumptions are in [docs/planning](../planning/README.md).

## Activation model

| Trigger | Skill loaded |
|---|---|
| Clone / cold start | Read root `README.md`, `AGENTS.md`, the standard charter, and the planning roadmap; load the skill matching the task |
| `docs/planning/**` or backlog work | `plan` |
| `docs/adr/**`, API contracts, schemas, or threat models | `design`; add `security` for trust/privacy decisions |
| Application or library implementation | `develop` plus the language skill |
| `*.py`, Python `pyproject.toml`, or `uv.lock` | `python`; add `nx` for project/build graph changes |
| `*.java`, Gradle files, or version catalog | `java`; add `nx` for project/build graph changes |
| `*.ts`, `*.tsx`, package manifests, or pnpm workspace | `typescript-frontend`; add `nx` for project/build graph changes |
| `*.go`, `go.mod`, or `go.work` | `go`; add `nx` for project/build graph changes |
| `*.rs`, `Cargo.toml`, or `Cargo.lock` | `rust`; add `nx` for project/build graph changes |
| `nx.json`, `project.json`, `tools/nx-plugins/**`, or affected-build behavior | `nx` |
| `tests/**` or test strategy | `test` plus the affected language/domain skill |
| `.github/workflows/**` or GitHub Actions | `ci-cd`; GitHub-hosted controls are not assumed for the personal prototype |
| `infra/**`, Terraform, Crossplane, or cluster resources | `infrastructure` and, for delivery behavior, `deploy` |
| `helm/**`, `gitops/**`, or environment promotion | `deploy` and `infrastructure` |
| `Dockerfile` or image build/signing | `containers`; add `deploy` when changing deployment behavior |
| `observability/**`, SLOs, dashboards, or alerts | `observability`; add `operate` for incident/on-call work |
| `security/**`, authentication, authorization, or secrets | `security`; add `design` when trust boundaries change |
| Database schema or migration | `database` plus the affected language skill; add `test` |
| Release tags, changelogs, or promotion | `release`; add `ci-cd` or `deploy` when their workflows change |
| A specific SDLC phase | The matching phase skill plus any applicable domain skill |

Load only the skills relevant to the task. Skills describe future enterprise
controls but do not authorize cloud resources, external credentials, or GitHub
organization settings for the current local-only prototype.

## SDLC phase skills

| Phase | Skill | Scope |
|---|---|---|
| Plan | [plan.md](plan.md) | Requirements, backlog, epic/feature breakdown, acceptance criteria, traceability |
| Design | [design.md](design.md) | Architecture decision records, API contracts, data models, security/privacy design |
| Develop | [develop.md](develop.md) | Coding standards, branch strategy, commit hygiene, PR checklist, local dev loop |
| Test | [test.md](test.md) | Test pyramid, contract/integration/e2e/chaos, quality gates, flaky-test policy |
| Deploy | [deploy.md](deploy.md) | CI pipelines, GitOps, progressive delivery, environment promotion, rollback |
| Release | [release.md](release.md) | Versioning, changelog, staging soak, release validation, cut-over |
| Operate | [operate.md](operate.md) | Observability, SLOs, incident response, runbooks, continuous improvement |

## Domain / language skills

| Domain | Skill |
|---|---|
| Python (uv workspaces, ruff, mypy, pytest) | [python.md](python.md) |
| Java / Spring Boot (Gradle version catalog) | [java.md](java.md) |
| TypeScript / Frontend (pnpm workspaces, Nx) | [typescript-frontend.md](typescript-frontend.md) |
| Go (go.work native workspaces) | [go.md](go.md) |
| Rust (Cargo) | [rust.md](rust.md) |
| Nx and polyglot build graph | [nx.md](nx.md) |
| CI/CD pipelines (GitHub Actions) | [ci-cd.md](ci-cd.md) |
| Observability (Prometheus / Grafana / Loki / Tempo) | [observability.md](observability.md) |
| Security (Vault, Falco, CodeQL, Trivy, OPA) | [security.md](security.md) |
| Infrastructure, Kubernetes, Helm, and GitOps | [infrastructure.md](infrastructure.md) |
| Containers and artifact supply chain | [containers.md](containers.md) |
| Database migrations and data contracts | [database.md](database.md) |

## Conventions

- Every skill file starts with an **activation trigger** section so an AI agent knows when to load it.
- Each file includes its own checklist and quality gates; cross-skill links identify
  composition and do not silently replace required work.
- Where a skill depends on repo-local conventions (e.g. `apps/backend/user-service`), it names the
  concrete path rather than a generic placeholder.
- Keep skills **opinionated and actionable**: a checklist, not a survey.

- Every skill must include a stop or escalation condition for missing inputs,
  unavailable tools, or unverified external behavior.
- Every skill must identify its required output artifacts.
- Lifecycle skills compose with domain skills; they do not replace them.
- Skills are standards guidance, not a claim that every file is always applicable.
- If repository behavior conflicts with [the standard charter](../standard-charter.md),
  stop and record a drift issue or propose an ADR.
- Commands must be labeled as locally verified, unverified, or blocked by
  missing project/tooling; do not present examples as validated commands.
- New and substantially revised skills follow the
  [skill template](skill-template.md).
- See the [toolchain readiness snapshot](toolchain-readiness.md) for the current
  machine's verified tools and repository blockers. It is not a support policy.