# Planning Assumptions and Decisions

**Status:** Direction is owner-endorsed for local-first design; unresolved
implementation decisions block dependent work.

The supplied architecture references are treated as guidance, not approval to
purchase services, create cloud resources, or enable production access. The
current project is a personal learning prototype, not an enterprise deployment.

| ID | Topic | Current baseline or open question | Impact | Owner / next action |
|---|---|---|---|---|
| A-001 | Monorepo orchestration | Nx orchestrates; native language tools execute. Accepted as the planning baseline from the polyglot architecture. | All phases | Record ADR before changing orchestrator |
| A-002 | Source hosting and CI | Personal GitHub repository for source collaboration; local execution first. Organization controls, hosted actions, and runner constraints are undecided. | Secure delivery | Keep checks runnable locally; decide hosting controls before enabling hosted PR gates |
| A-003 | Cloud and runtime | Laptop-local development is the default. Cloud is considered only for a documented capability gap that cannot reasonably be met locally and requires explicit approval. No provider, cluster, or cloud account is selected. | Runtime, secrets, cost catalog | Cloud provisioning remains blocked until a concrete need and operating model are approved |
| A-004 | Secrets platform | Vault and External Secrets Operator appear in the blueprint; confirm managed/self-hosted product, licensing, and ownership. | Secure delivery and runtime | Security/platform decision |
| A-005 | GitOps and progressive delivery | Git is the intended source of truth for desired environment state, with changes reviewed through PRs. Argo CD, Argo Rollouts, other controllers, and any runtime remain unselected. | Runtime and release | Prototype local workflows first; select a controller only when an environment is in scope |
| A-006 | Observability stack | Prometheus, Grafana, Loki, Tempo, and OpenTelemetry are reference choices; confirm managed/self-hosted model, retention, and data residency. | Observability | SRE/security review |
| A-007 | Developer portal | Backstage is the reference option; confirm whether it is required and who operates plugins and catalog data. | Developer experience | Developer experience owner |
| A-008 | First vertical slice | Python FastAPI service for a local-only learning prototype. Sample domain and future production target remain undecided. | Foundation and all execution phases | Use a minimal illustrative service; no customer data or external services |
| A-009 | Rust toolchain | Rust/Cargo is a target ecosystem, but `rustc` and `cargo` were not available on PATH during initial inspection. | Rust workspace feature | Confirm installation source and supported toolchain before implementation |
| A-010 | Build cache | Nx local caching is the default. Remote cache is deferred unless local cache demonstrably fails to meet a need. | Polyglot build and DX | Measure local performance before considering remote-cache services |
| A-011 | Compliance scope | No regulatory framework, data class, or evidence-retention period has been selected. Do not treat the prototype context as a compliance exemption. | Security, audit, operations | Keep generic security practices; decide scope before regulated workloads |
| A-012 | Team ownership | Target organization is `teams/<team>/<project>` with a shared `platform/` area. Team names and production owners are not defined; the current FastAPI pilot remains in place for now. | Every epic and production support | Assign concrete owners and plan any project migration before team adoption |
| A-013 | Project release model | Each project is an independent SemVer release unit; its project type determines native artifacts. OCI is an opt-in service profile built by the shared platform, not by per-project Dockerfiles by default. | Release and runtime | Define artifact coordinates, builder, registry, and exceptions before publishing |
| A-014 | Language and package defaults | The platform maintains ecosystem defaults with explicit, reviewed project exceptions. Python 3.10 was an example only; it is not the selected baseline. | Workspaces and onboarding | Agree supported versions and catalog/lockfile behavior before adding team templates |
| A-015 | PR impact automation | PR changes select CI jobs through ownership, project dependencies, and global-file impact rules; direct and transitive consumers must be included. Automation creates CI jobs/checks, not work-tracking tickets. A local Python dependency chain now demonstrates transitive selection. | Polyglot build and secure delivery | Extend validation to cross-language edges, global files, and additional project types |
| A-016 | PR evidence and AI review | The local report exposes final test-scope status, blocked/skipped reasons, and logs. AI review is intended for PRs; narrowly defined low-risk changes may receive policy-controlled sign-off, while project and platform ownership approvals remain human for their respective risk tiers. | Secure delivery and developer experience | Define risk categories, enforcement, audit, and host integration before enabling auto-sign-off |
| A-017 | Unified project commands and application config | Proposed `strato obt` command surface delegates orchestration to Nx and execution to native language tools. Build/test target a project; run selects an application with `--app`, optional only for a single-app module. `metadata.projectId` is the stable identity mapped by Nx to the project and folder. Module-scoped HCL `.runconf` maps each application to an Nx target and may declare optional JVM `mainClass` and platform-owned profiles such as `DockerEnabled`. The CLI name and full descriptor compatibility policy remain open. | Polyglot build, onboarding, and runtime | Validate the local adapter and HCL contract; define profile execution in the runtime-platform work |

## Decision handling

- Resolve assumptions only with the accountable owner.
- Convert durable decisions into ADRs under `docs/adr/`.
- An unresolved assumption must not be silently treated as a production choice.
- A feature may be approved with an assumption only when its impact is isolated
  and the dependency is explicitly blocked.
- Local-first implementation must not claim cloud deployment, GitHub organization
  protections, production secrets management, or compliance certification.
- The owner-endorsed direction is summarized in the
  [team-oriented platform vision](vision.md); it is not authorization to provision
  cloud resources or enable automated approvals.
