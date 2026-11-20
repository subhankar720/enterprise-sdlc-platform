# Enterprise SDLC Implementation Roadmap

**Status:** Proposed for platform-owner review
**Planning basis:** The repository's Enterprise SDLC Blueprint and Polyglot
Monorepo Architecture

This roadmap sequences capabilities by dependency. Calendar durations in the
reference blueprint are illustrative, not commitments; delivery estimates require
team capacity, provider decisions, and validated acceptance criteria.

## Portfolio phases

| Phase | Outcome | Epics | Exit evidence |
|---|---|---|---|
| 0. Standards and foundation | Approved backlog, governed workspaces, ownership, baseline tooling | `EPIC-monorepo-foundation` | Nx lists the local FastAPI project; uv resolves its workspace; build/lint/typecheck/test and `/healthz` pass locally |
| 1. Polyglot graph and CI | Team-owned projects, transitive impact analysis, transparent local-first PR checks | `EPIC-polyglot-build`, `EPIC-secure-delivery` | Direct and transitive affected sets are tested; CI evidence explains selected, blocked, and skipped scopes |
| 2. Runtime and deployment platform | Project-type release artifacts and optional platform-built OCI images, with GitOps desired state | `EPIC-runtime-platform` | Local artifact and GitOps workflows are reproducible; any cloud environment is separately justified and approved |
| 3. Reliability and operations | Service telemetry, SLOs, alerting, runbooks, incident feedback | `EPIC-observability-reliability` | A vertical-slice service has dashboards, actionable alerts, SLO evidence, and exercised recovery |
| 4. Developer experience | Catalog, golden paths, standard local environment | `EPIC-developer-experience` | A team can scaffold and operate a governed service using the approved golden path |
| 5. Release governance | Reproducible versioning, approvals, provenance, promotion and rollback evidence | `EPIC-release-governance` | A release can be reconstructed from source, evidence, and artifact digests |

Within Phase 1, repository governance and graph work can proceed in parallel only
where the listed feature dependencies allow.
Runtime provider-specific work is blocked until a concrete need and provider
decision are resolved. Cloud is not the default path; production enablement is
explicitly outside the first vertical slice.

## Epic inventory

| Epic | Objective | Primary dependencies | Initial status |
|---|---|---|---|
| [EPIC-monorepo-foundation](epics/EPIC-monorepo-foundation.md) | Establish repository standards and initial workspaces | None | Active |
| [EPIC-polyglot-build](epics/EPIC-polyglot-build.md) | Make Nx graph and affected execution correct across ecosystems | Monorepo foundation | Proposed |
| [EPIC-secure-delivery](epics/EPIC-secure-delivery.md) | Govern GitHub, CI, identity, security, and artifact integrity | Foundation; graph for affected CI | Proposed |
| [EPIC-runtime-platform](epics/EPIC-runtime-platform.md) | Package and deploy applications through policy-controlled GitOps | Secure delivery; provider decision | Proposed |
| [EPIC-observability-reliability](epics/EPIC-observability-reliability.md) | Make services measurable, supportable, and recoverable | Runtime platform; service instrumentation | Proposed |
| [EPIC-developer-experience](epics/EPIC-developer-experience.md) | Provide discoverability, golden paths, and onboarding | Foundation; secure delivery; runtime interfaces | Proposed |
| [EPIC-release-governance](epics/EPIC-release-governance.md) | Control versions, promotions, evidence, and rollback | Secure delivery; runtime platform | Proposed |

## Dependency rules

- Nx project registration and native workspace manifests precede affected-only CI.
- Language graph inference and executors precede cross-language affected-build
  acceptance.
- Repository governance can be implemented in parallel with language workspaces.
- OIDC identity and registry decisions precede external cloud publishing.
- Container hardening and CI security gates precede environment deployment.
- GitOps baseline precedes progressive delivery.
- SLO definitions and telemetry queries precede automated canary analysis.
- Service catalog ownership metadata precedes catalog completeness claims.
- Golden paths consume approved project descriptors and reusable CI workflows.
- Release promotion consumes immutable artifacts; it must not rebuild them.

Detailed feature dependencies are recorded in each feature file and summarized in
[traceability](traceability.md).

## Incremental delivery strategy

The first vertical slice must remain deliberately small:

1. Define the team/project descriptor and ownership contract.
2. Register a representative project and its direct and transitive shared
   dependencies in Nx.
3. Run focused build and test tasks locally and expose their scope and evidence.
4. Validate project release artifacts locally; keep OCI packaging opt-in and
   platform-owned.
5. Keep desired environment state in Git; defer environment deployment until a
   local or approved runtime is in scope.
6. Document measured gaps before adding hosted services, cloud, or more language
   and service coverage.

For the current personal prototype, the first slice is a minimal Python FastAPI
service running locally. It proves a basic project loop, not the team layout,
transitive graph, release profiles, GitOps, PR evidence portal, or AI approvals.
This selection does not approve external credentials, cloud resources, customer
data, or production deployment.

Do not build all languages, all environments, or a full developer portal before
this slice proves the architecture.

## Approval gates

1. Approve the portfolio scope and resolve or explicitly defer assumptions.
2. Approve Phase 0 stories before foundation implementation beyond documentation.
3. Approve security and provider decisions before external integrations.
4. Review phase exit evidence before starting production platform enablement.
5. Revisit scope and metrics quarterly or after material architecture changes.
