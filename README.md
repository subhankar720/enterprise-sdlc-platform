# Enterprise SDLC Platform

This monorepo is the enterprise platform foundation for building, securing,
testing, releasing, and operating polyglot applications. It uses Nx as the
cross-language build orchestrator and native toolchains for each language.

## Repository model

- **Nx**: project graph, affected detection, task orchestration, and caching
- **Gradle**: Java and JVM application dependencies and builds
- **pnpm**: TypeScript and JavaScript workspaces
- **uv**: Python workspaces and lockfiles
- **Go workspaces**: Go modules
- **Cargo**: Rust workspaces
- **GitHub Actions**: CI/CD and quality gates
- **Infrastructure and GitOps**: Kubernetes, Helm, Terraform, and Argo CD

The architecture principles and implementation requirements are documented in:

- [Enterprise SDLC Standard Charter](docs/standard-charter.md)
- [Team-oriented, local-first platform vision](docs/planning/vision.md)
- [Implementation roadmap](docs/planning/roadmap.md)
- [Planning assumptions and open decisions](docs/planning/assumptions.md)

The initial roadmap is derived from the Enterprise SDLC Blueprint and Polyglot
Monorepo Architecture supplied during project setup. Those source files are
external to this repository; repository standards and decisions are recorded here.

## Skills operating model

Repository work is guided by self-contained skills under [docs/skills](docs/skills/README.md).
Skills are activated by SDLC phase or file and directory scope.

Examples:

- Planning or backlog work: `plan`
- Architecture and API work: `design`
- Python changes: `python`
- Java changes: `java`
- `.github/workflows/` changes: `ci-cd`
- `infra/`, `helm/`, or `gitops/` changes: `deploy`

Never bypass a required skill by making a change outside the lifecycle or quality
process. Skills must not silently add requirements that are absent from the charter.

## Canonical delivery flow

1. Capture an epic and testable stories.
2. Record design decisions and contracts.
3. Implement using the language and lifecycle skills.
4. Run affected and focused tests.
5. Pass security, policy, build, and quality gates.
6. Promote through controlled environments.
7. Release with rollback and traceability.
8. Operate with SLOs, alerts, dashboards, and runbooks.

## Current and target layout

```text
teams/<team>/     Target home for team-owned projects
platform/         Shared developer platform and golden paths
apps/             Current local pilot (migration is separate work)
shared-libs/      Cross-team reusable libraries, when justified
infra/            Infrastructure as code
helm/             Kubernetes application charts
gitops/           GitOps applications and environment promotion
security/         Policies, threat models, and compliance
observability/    Dashboards, alerts, SLOs, and runbooks
docs/             Architecture, planning, decisions, and skills
tools/            Nx plugins and repository automation
scripts/          Bootstrap and maintenance automation
tests/            Cross-service contract, E2E, performance, and chaos tests
.github/          GitHub workflows and repository governance
```

Only create directories that are required for an approved deliverable.

## Current local vertical slice

The initial learning service is
[apps/backend/fastapi-service](apps/backend/fastapi-service/README.md). It
exposes `GET /healthz` on localhost and uses Nx targets for build, lint,
typecheck, test, and serve. It requires no cloud account or external credentials.

The local team-graph proof is documented in
[teams/example](teams/example/README.md). Run its change-impact test report with:

```powershell
pnpm pr:local -- --files=platform/python/project-contract/src/project_contract/metadata.py
```

Reports and per-project logs stay under the ignored `.local-reports/` directory.

## Working with the repository

- Read the [standard charter](docs/standard-charter.md) before starting work.
- Read the matching lifecycle and domain skills.
- Use native tools for language execution.
- Use Nx to discover and run affected targets.
- Keep every project represented in the project graph.
- No secret values in source control.
- No deployment or publish target may be cached as a side-effect-free build.
- Update traceability when requirements, design, tests, or releases change.

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution rules and
[AGENTS.md](AGENTS.md) for coding-agent constraints.
