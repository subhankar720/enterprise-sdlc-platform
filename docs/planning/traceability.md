# Requirements Traceability Matrix

**Status:** Portfolio backlog proposed; Phase 0 foundation is active.

| Phase | Epic | Feature | Story | Dependencies / decision | ADR / Contract | Implementation | Test evidence | Release |
|---|---|---|---|---|---|---|---|---|
| 0 | EPIC-monorepo-foundation | F-monorepo-foundation-001 | S-monorepo-foundation-001 | None | Pending | Pending | Pending | Pending |
| 0 | EPIC-monorepo-foundation | F-monorepo-foundation-002 | S-monorepo-foundation-002 | F-foundation-001; A-009 | Pending | Pending | Pending | Pending |
| 0 | EPIC-monorepo-foundation | F-monorepo-foundation-003 | S-monorepo-foundation-003 | GitHub organization and ownership | Pending | Pending | Pending | Pending |
| 0 | EPIC-monorepo-foundation | F-monorepo-foundation-004 | S-monorepo-foundation-004 | Charter and skills catalog | Pending | In progress: docs | Link and section audit | Pending |
| 0 | EPIC-monorepo-foundation | F-monorepo-foundation-005 | S-monorepo-foundation-005 | Python FastAPI local slice; graph and Python targets | Pending | [Service project](../../apps/backend/fastapi-service/project.json) | Locked uv sync; Nx build/lint/typecheck/test; explicit-file affected test selection; HTTP `/healthz` | Pending |
| 1 | EPIC-polyglot-build | F-polyglot-build-001 | S-polyglot-build-001 | Foundation F-001/002 | [Metadata contract](../../platform/python/project-contract/README.md) | [Python graph fixture](../../teams/example/README.md) | Platform change selects contract, shared library, and transitive service tests; local PR report links logs | Pending |
| 1 | EPIC-polyglot-build | F-polyglot-build-002 | S-polyglot-build-002 | Graph; language toolchains | Pending | Pending | Pending | Pending |
| 1 | EPIC-polyglot-build | F-polyglot-build-003 | S-polyglot-build-003 | Graph and native targets; A-010 for remote cache | Pending | Pending | Pending | Pending |
| 1 | EPIC-polyglot-build | F-polyglot-build-004 | S-polyglot-build-004 | Graph, targets, affected tests | Pending | Pending | Pending | Pending |
| 1 | EPIC-secure-delivery | F-secure-delivery-001 | S-secure-delivery-001 | GitHub; assigned teams | Pending | Pending | Pending | Pending |
| 1 | EPIC-secure-delivery | F-secure-delivery-002 | S-secure-delivery-002 | Polyglot graph; A-002 | Pending | Pending | Pending | Pending |
| 1 | EPIC-secure-delivery | F-secure-delivery-003 | S-secure-delivery-003 | CI gate; scanner and compliance decisions | Pending | Pending | Pending | Pending |
| 1 | EPIC-secure-delivery | F-secure-delivery-004 | S-secure-delivery-004 | A-002/A-003; registry and identity decisions | Pending | Pending | Pending | Pending |
| 2 | EPIC-runtime-platform | F-runtime-platform-001 | S-runtime-platform-001 | Secure scanning/signing; registry decision | Pending | Pending | Pending | Pending |
| 2 | EPIC-runtime-platform | F-runtime-platform-002 | S-runtime-platform-002 | A-003; provider approval | Pending | Pending | Pending | Pending |
| 2 | EPIC-runtime-platform | F-runtime-platform-003 | S-runtime-platform-003 | Runtime F-001/002; A-005 | Pending | Pending | Pending | Pending |
| 2 | EPIC-runtime-platform | F-runtime-platform-004 | S-runtime-platform-004 | Runtime F-003; observability F-001/002 | Pending | Pending | Pending | Pending |
| 3 | EPIC-observability-reliability | F-observability-reliability-001 | S-observability-reliability-001 | A-006; selected service | Pending | Pending | Pending | Pending |
| 3 | EPIC-observability-reliability | F-observability-reliability-002 | S-observability-reliability-002 | Telemetry; service owner | Pending | Pending | Pending | Pending |
| 3 | EPIC-observability-reliability | F-observability-reliability-003 | S-observability-reliability-003 | Telemetry, SLO, recovery owners | Pending | Pending | Pending | Pending |
| 4 | EPIC-developer-experience | F-developer-experience-001 | S-developer-experience-001 | Project ownership; A-007 | Pending | Pending | Pending | Pending |
| 4 | EPIC-developer-experience | F-developer-experience-002 | S-developer-experience-002 | Graph, CI security, catalog, runtime | Pending | Pending | Pending | Pending |
| 4 | EPIC-developer-experience | F-developer-experience-003 | S-developer-experience-003 | Toolchain and environment decisions | Pending | Pending | Pending | Pending |
| 4 | EPIC-developer-experience | F-developer-experience-004 | S-developer-experience-004 | CI telemetry; metric/privacy policy | Pending | Pending | Pending | Pending |
| 5 | EPIC-release-governance | F-release-governance-001 | S-release-governance-001 | Version strategy; release owners | Pending | Pending | Pending | Pending |
| 5 | EPIC-release-governance | F-release-governance-002 | S-release-governance-002 | Provenance, GitOps, environments | Pending | Pending | Pending | Pending |
| 5 | EPIC-release-governance | F-release-governance-003 | S-release-governance-003 | Promotion, SLO, rollback | Pending | Pending | Pending | Pending |

Update the dependency and decision columns as assumptions are resolved. Populate
ADR/contract, implementation, test, and release evidence when each record exists.
Do not mark a row complete without verifiable links or artifacts.
