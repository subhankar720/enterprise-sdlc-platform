# Enterprise SDLC Standard Charter

**Document status:** Active standard
**Scope:** Enterprise monorepo planning, architecture, implementation, delivery,
security, and operations
**Review cycle:** Quarterly
**Supersedes:** Ad hoc repository instructions that conflict with this document

## 1. Purpose

This charter establishes a durable operating standard for the
`enterprise-sdlc-platform` monorepo. It is the reference used to:

- Prevent architectural, delivery, security, and documentation drift.
- Convert approved requirements into traceable implementation work.
- Standardize language, build, CI/CD, deployment, and operational practices.
- Enable coding agents and engineers to work consistently and predictably.
- Scale implementation incrementally without weakening enterprise controls.

When another repository document conflicts with this charter, this charter controls
until an ADR records and approves a change.

## 2. Guiding decisions

1. **Nx orchestrates; native tools execute.**
2. **Every governed project has a `project.json`.**
3. **Centralize dependency governance per ecosystem.**
4. **Affected detection is the default for CI.**
5. **Security and policy gates are structural, not optional.**
6. **GitOps is the intended production deployment model.**
7. **Everything produced has an owner, lifecycle, test, and rollback strategy.**
8. **Requirements are traceable from backlog through operation.**
9. **Platforms are delivered through golden paths and reusable templates.**
10. **Operational readiness is a delivery requirement, not a post-release activity.**
11. **Teams own projects; the shared platform provides governed, local-first defaults.**

## 3. Architecture model

The repository is a polyglot monorepo with:

- Team-owned projects grouped by team under `teams/<team>/<project>`
- A shared `platform/` product for defaults, tooling, policies, and onboarding
- Java and Kotlin services through Gradle
- React or other TypeScript applications through pnpm
- Python applications and libraries through uv
- Go applications and libraries through `go.work`
- Rust applications and libraries through Cargo
- Cross-language schemas and contracts
- Nx project graph and affected-only builds
- GitHub Actions reusable CI/CD workflows
- Container, Kubernetes, Helm, GitOps, and infrastructure artifacts
- Centralized security, observability, compliance, and release controls

A project may be deployable or reusable. Deployable projects are applications,
workers, and infrastructure components. Reusable projects are libraries, schemas,
plugins, policies, templates, charts, or automation.

## 4. Repository structure

The target ownership layout groups team-owned projects by team. The current
FastAPI pilot remains under `apps/` until a separately approved migration.
Cross-cutting directories are created only when an approved deliverable needs
them.

```text
.github/          repository governance and workflows
teams/<team>/     team-owned applications, libraries, and modules
platform/         shared catalogs, generators, policies, and golden paths
apps/             current local pilot only; migrate through traceable work
shared-libs/      cross-team libraries and schemas when justified
infra/            infrastructure as code
helm/             Kubernetes charts
gitops/           Argo CD and environment definitions
security/         threat models, policies, and compliance
observability/    dashboards, alerts, SLOs, and runbooks
docs/             standards, planning, ADRs, and skills
tools/            Nx plugins and repository automation
scripts/          bootstrap and maintenance automation
tests/            cross-service test suites
```

Directories are created only for an approved and traceable outcome.

## 5. SDLC lifecycle

### 5.1 Plan

Every change begins with a Problem / Outcome / Constraints record and an approved
epic. Features are deliverable units and stories are testable units. Acceptance
criteria use Given / When / Then and include at least one negative case.

### 5.2 Design

Architecture decisions, API contracts, data models, security, privacy, and
operability impacts must be recorded before implementation when they are durable
or externally observable.

### 5.3 Develop

Implementation follows existing patterns, native tools, project boundaries,
branch conventions, signed-commit policy, and definition of done.

### 5.4 Test

The test pyramid must include appropriate:

- Unit tests
- Integration tests
- Contract tests
- End-to-end tests
- Performance tests
- Security tests
- Infrastructure policy tests
- Chaos tests for critical recovery assumptions

### 5.5 Deploy

CI builds validated artifacts once and promotes them between environments.
Production deployment is GitOps-driven and requires explicit approval, health
validation, and rollback readiness.

### 5.6 Release

Release records include version, artifact digests, approval evidence, changelog,
staging soak, promotion state, rollback plan, and owner.

### 5.7 Operate

Services operate against defined SLOs with dashboards, structured telemetry,
alerts, runbooks, incident ownership, error-budget decisions, and retrospectives.

## 6. Skills operating model

The [skills center](skills/README.md) defines activation-aware instructions.

### 6.1 Lifecycle skills

- `plan`
- `design`
- `develop`
- `test`
- `deploy`
- `release`
- `operate`

### 6.2 Domain skills

- `python`
- `java`
- `typescript-frontend`
- `go`
- `rust`
- `ci-cd`
- `observability`
- `security`
- `infrastructure`
- `containers`
- `database`

### 6.3 Activation rules

Skills activate by the primary files, directories, or lifecycle intent being changed.
Where work spans domains, activate the lifecycle skill plus all applicable domain
skills. No skill may replace repository code inspection or measured validation.

### 6.4 Skill structure

Every skill must contain:

1. Activation trigger
2. Required repository context
3. Implementation checklist
4. Canonical commands, or an explicit statement that commands are unverified or
   blocked until prerequisites exist
5. Required artifacts
6. Quality gates
7. Anti-patterns
8. Definition of done
9. Escalation or stop conditions

## 7. Project graph and affected builds

Every governed project must declare:

- Stable project name
- Project type
- Ownership tags
- Language tags
- Build, test, lint, and applicable typecheck targets
- Cross-project dependencies

CI must use Nx affected detection rather than rebuilding the entire repository.
When a project changes, affected validation includes its direct and transitive
consumers through declared project dependencies.
Global files such as workspace manifests, lockfiles, version catalogs, Nx
configuration, and shared CI configuration must invalidate the correct project set.

Exceptions require a documented owner and reason.

## 8. Dependency governance

| Ecosystem | Central control | Lock or resolution source |
|---|---|---|
| Java / Kotlin | Gradle version catalog | Gradle lock where configured |
| TypeScript / JavaScript | pnpm workspace | `pnpm-lock.yaml` |
| Python | uv workspace | `uv.lock` |
| Go | go workspace | `go.sum` and `go.work.sum` |
| Rust | Cargo workspace | `Cargo.lock` |

Dependabot or equivalent update automation must open scoped updates. Dependency
updates require lockfile, license, vulnerability, compatibility, and affected-build
validation.
Projects use centrally maintained ecosystem defaults; deviations require an
explicit, reviewed exception. Project manifests and native lock behavior remain
the source of reproducible dependency resolution.

## 9. Security charter

The repository must enforce:

- No secrets in source control
- Secret scanning on every PR
- SAST and SCA in CI
- Dependency license checks
- Container and infrastructure image scanning
- Signed builds and artifacts where supported
- Least-privilege OIDC authentication
- Policy-as-code for infrastructure and Kubernetes
- Threat modeling for externally exposed or sensitive systems
- Critical vulnerability remediation within 24 hours
- High vulnerability remediation within seven days

Security exceptions require an owner, expiry date, business justification, and
compensating controls.

## 10. Repository governance

The repository uses:

- Protected default and release branches
- Required status checks
- CODEOWNERS
- Pull request templates
- Signed or attested commits where policy permits
- Semantic versioning
- Conventional or enterprise-approved commits
- Merge queues where CI capacity requires serialization

No manual repository bypass may become the default delivery path.

## 11. CI/CD standard

CI pipelines must:

- Detect affected projects
- Cache safe targets
- Execute language-native builds
- Run security gates
- Produce immutable artifacts
- Publish machine-readable validation evidence
- Build OCI images only for changed deployables enrolled in the platform-owned
  container profile
- Register the CI gate as a branch-protection check
- Never cache publish or deploy actions

P95 affected-build duration is an engineering SLO and the target is under eight
minutes after the graph is mature.

## 12. Deployment and release standard

- Immutable artifacts are promoted without rebuilding; each deployed artifact
  is identified by its digest.
- Production changes use GitOps.
- Canary or progressive delivery is required for critical services.
- Every deployment has health validation and rollback criteria.
- Environment promotion requires approval and audit evidence.
- Release cutovers include communication and rollback ownership.

## 13. Developer experience standard

Golden paths must enable a team to create a production-aligned service with:

- Project graph registration
- Testing
- CI/CD
- Security baseline
- Optional platform-built OCI packaging for enrolled services
- Deployment configuration
- Observability defaults
- Ownership metadata
- Documentation
- Runbook

New-service onboarding is measured against a one-day target.

## 14. Implementation roadmap

The [planning roadmap](planning/roadmap.md) is the phase-level execution source
of truth. The summary below uses the same phase names and dependencies.

### Phase 0 — Standards and foundation

- Approve portfolio scope and resolve immediate planning assumptions
- Repository governance baseline and ownership model
- Root workspace configuration
- Project registration and initial language workspaces
- Central dependency controls
- Skills and planning standards
- One local vertical slice

### Phase 1 — Polyglot graph and secure CI

- Repository protection and required checks
- Language plugins and executors
- Cross-project dependency declarations
- Global-file invalidation
- Affected detection validation
- Remote cache
- Circular dependency validation
- Language-gated workflows
- Security and policy gates
- Workload identity and artifact integrity

### Phase 2 — Runtime and deployment platform

- Container and artifact baseline
- Infrastructure and cluster foundation
- Kubernetes platform baseline
- Helm and GitOps
- Secrets management
- Progressive delivery

### Phase 3 — Observability and reliability

- OpenTelemetry instrumentation
- Dashboards and golden signals
- Service SLOs and actionable alerts
- Runbooks, incidents, recovery and rollback evidence

### Phase 4 — Developer experience

- Backstage or equivalent service catalog
- Golden-path scaffolding
- Developer environments
- CI and onboarding metrics

### Phase 5 — Release governance and continuous improvement

- Versioning, changelog, and release records
- Immutable artifact promotion and approvals
- Release readiness and rollback evidence
- Reliability trend analysis
- Chaos and recovery testing
- Error-budget review
- Cost optimization
- AI-assisted operations under governance

## 15. Portfolio success metrics

### Developer productivity

- Lead time for change: target under one day
- PR cycle time: target under four hours at P75
- Affected build P95: target under eight minutes
- New-service onboarding: target under one day

### Reliability

- Mean time to restore: target under 30 minutes for P1 incidents
- Change failure rate: target below 2%
- Availability: target 99.9% or better per service SLO
- Rollback success: target 100%

### Security

- Critical vulnerabilities: remediate within 24 hours
- High vulnerabilities: remediate within seven days
- Secrets detected in PRs: zero
- Security gate failures: decreasing trend

### Platform adoption

- Services using golden paths: greater than 90%
- Services with SLOs: 100%
- Services discoverable in the developer catalog: 100%
- Manual production deployments: zero

## 16. Drift detection

Drift is detected through:

- Quarterly charter review
- Monthly project graph audit
- CI configuration comparison
- Dependency and policy audits
- Release traceability review
- SLO and incident review
- Architecture decision review
- Developer experience surveys

Any drift must produce an issue, ADR, or approved exception with an owner and due date.

## 17. Exceptions

An exception must state:

- Conflicting requirement
- Scope and affected systems
- Risk
- Compensating control
- Owner
- Start and expiry date
- Remediation plan
- Approval evidence

Exceptions expire automatically unless renewed through the normal review process.

## 18. Change control

Changes to this charter require:

- An approved issue or epic
- Impact assessment
- ADR when an architecture or governance decision changes
- Review by Platform Engineering and affected domain owners
- Documentation updates
- Team communication
- A migration plan when behavior changes
