# Planning Assumptions and Decisions

**Status:** Partially resolved; unresolved items block dependent implementation.

The supplied architecture references are treated as guidance, not approval to
purchase services, create cloud resources, or enable production access. The
current project is a personal learning prototype, not an enterprise deployment.

| ID | Topic | Current baseline or open question | Impact | Owner / next action |
|---|---|---|---|---|
| A-001 | Monorepo orchestration | Nx orchestrates; native language tools execute. Accepted as the planning baseline from the polyglot architecture. | All phases | Record ADR before changing orchestrator |
| A-002 | Source hosting and CI | Personal repository / prototype first. Organization ownership, GitHub plan, Advanced Security, hosted actions, and runner constraints are undecided. | Secure delivery | Use local checks first; decide hosting controls before enabling org-level gates |
| A-003 | Cloud and runtime | Local-only initially. No cloud account, Kubernetes cluster, or provider is selected. AWS/EKS examples are not a commitment. | Runtime, secrets, cost catalog | Cloud provisioning remains blocked until provider and operating model are chosen |
| A-004 | Secrets platform | Vault and External Secrets Operator appear in the blueprint; confirm managed/self-hosted product, licensing, and ownership. | Secure delivery and runtime | Security/platform decision |
| A-005 | GitOps and progressive delivery | Argo CD and Argo Rollouts are the reference choices; confirm versions, hosting, cluster reachability, and support model. | Runtime and release | Platform decision before deployment implementation |
| A-006 | Observability stack | Prometheus, Grafana, Loki, Tempo, and OpenTelemetry are reference choices; confirm managed/self-hosted model, retention, and data residency. | Observability | SRE/security review |
| A-007 | Developer portal | Backstage is the reference option; confirm whether it is required and who operates plugins and catalog data. | Developer experience | Developer experience owner |
| A-008 | First vertical slice | Python FastAPI service for a local-only learning prototype. Sample domain and future production target remain undecided. | Foundation and all execution phases | Use a minimal illustrative service; no customer data or external services |
| A-009 | Rust toolchain | Rust/Cargo is a target ecosystem, but `rustc` and `cargo` were not available on PATH during initial inspection. | Rust workspace feature | Confirm installation source and supported toolchain before implementation |
| A-010 | Build cache | Nx local caching is assumed; remote cache vendor, access control, and retention are undecided. | Polyglot build and DX | Platform decision before remote-cache rollout |
| A-011 | Compliance scope | No regulatory framework, data class, or evidence-retention period has been selected. Do not treat the prototype context as a compliance exemption. | Security, audit, operations | Keep generic security practices; decide scope before regulated workloads |
| A-012 | Team ownership | Personal learning prototype; enterprise teams and production on-call owners are not defined. | Every epic and production support | Repository maintainer is provisional owner; assign team ownership before enterprise adoption |

## Decision handling

- Resolve assumptions only with the accountable owner.
- Convert durable decisions into ADRs under `docs/adr/`.
- An unresolved assumption must not be silently treated as a production choice.
- A feature may be approved with an assumption only when its impact is isolated
  and the dependency is explicitly blocked.
- Local-first implementation must not claim cloud deployment, GitHub organization
  protections, production secrets management, or compliance certification.
