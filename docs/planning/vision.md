# Team-Oriented Monorepo Platform Vision

**Status:** Owner-endorsed direction for local-first design; implementation
details and enterprise adoption remain proposed.

This document records the current product vision. It guides future design work
but does not select cloud providers, hosted services, registries, deployment
platforms, or AI approval tooling.

## Product intent

The monorepo is both a shared engineering platform and a home for independently
owned team projects. The platform supplies repeatable defaults and onboarding;
teams retain ownership of their projects, dependencies, tests, and releases.

The initial development environment stays on the repository owner's laptop.
Cloud services are considered only when a specific capability cannot reasonably
be met locally, and only after that need is documented and approved.

## Team and platform boundaries

The target layout is team-oriented:

```text
platform/                  shared catalogs, generators, policies, and tooling
teams/
  <team>/
    <project>/              independently owned project
docs/                       standards, planning, and decisions
tools/                      repository-wide automation
```

Team names such as `feds` or `ets` are examples, not selected organizations.
Projects may use different languages and frameworks. The existing FastAPI
service remains a local pilot; moving it into the target layout is a separate,
traceable change.

Project metadata should eventually identify ownership, project type, language
profile, dependencies, build and test targets, release profile, and any approved
exceptions. A version-1 schema is prototyped in the
[project-contract package](../../platform/python/project-contract/README.md);
the organization-wide descriptor contract remains open.

## Shared defaults and project autonomy

- The platform maintains supported language and package-version defaults.
- Projects consume those defaults through ecosystem-native manifests and
  catalogs, with explicit, reviewed exceptions when needed.
- Projects declare the dependencies they use and retain reproducible,
  ecosystem-native resolution and lockfile behavior.
- `Python 3.10` was an example, not an approved baseline. Select supported
  versions per ecosystem before building team templates.

## Project releases and artifacts

Each project is an independently versioned release unit using SemVer. Artifact
names derive from the stable project identity and its version; the monorepo does
not require one repository-wide release train.

The project type determines its native release artifact. For example, libraries
publish ecosystem-native packages, while command-line projects publish binaries
or archives. A deployable service may opt into a container profile:

- The shared platform builds the OCI image from project metadata and approved
  build components.
- Teams do not maintain individual Dockerfiles by default.
- A custom Dockerfile or builder requires an explicit, reviewed exception.
- The image is an artifact of the same project release, identified by its
  immutable digest; deployment is a separate operation.

The builder, base-image policy, artifact registry, and publishing workflow are
not selected. Until those decisions are made, validation and packaging stay
local.

## Change impact and pull-request automation

PR validation is driven by project ownership and the dependency graph:

1. Identify changed projects and shared configuration.
2. Select build, test, lint, typecheck, and other applicable CI jobs.
3. Include direct and transitive consumers when a project or platform capability
   they depend on changes.
4. Route review requests and notifications using project ownership.
5. Expand validation when a shared or global change has broader impact.

Current intent is to create CI jobs and checks from these rules, not work-tracking
tickets. Explicit dependency metadata and global-file impact rules are required;
path matching alone is not sufficient.

PR evidence should show each relevant test scope as queued, running, passed,
failed, blocked, or skipped/not applicable, with a reason and links to logs and
artifacts. A blocked or skipped check must not appear successful by default.

The local prototype's `pnpm pr:local -- --files=<workspace-relative-path>`
report records final status, skipped/blocked reasons, and per-project logs.
Queued/running states require a future PR-host integration. A dedicated PR
dashboard is a later option if the standard check summary proves insufficient.

## Review and approval model

Automated AI review is intended for every PR, with approval boundaries based on
change risk and ownership:

- Policy-defined, low-risk changes may receive automated sign-off only when
  deterministic required checks pass and the change is within a narrow,
  auditable allowlist.
- Normal project changes require approval from the owning team.
- Platform-wide changes require human platform-team approval; security-sensitive
  changes also require the appropriate security review.
- AI output cannot bypass required checks, ownership rules, or human approval
  for higher-risk changes.

The low-risk categories, enforcement mechanism, AI provider, and audit
requirements must be designed before enabling automatic sign-off.

## GitOps and local-first operation

Git is the source of truth for code, CI definitions, platform configuration, and
desired infrastructure or environment state. Environment changes should be
reviewed as Git changes and reconciled from that desired state when an
environment exists.

PR checks are CI automation defined as code; they are not themselves a GitOps
controller. A local-first workflow should validate project changes without
requiring hosted runners, cloud infrastructure, remote caches, or external
credentials. Any future use of those services requires a documented capability
gap and an explicit decision.

## Decisions intentionally deferred

- Team and project naming, ownership metadata, and the final project descriptor
  contract and compatibility policy
- Supported language versions and package catalogs
- Exact project dependency and global-configuration impact rules
- Local versus hosted PR execution and repository-host controls
- Low-risk AI approval categories and enforcement
- Artifact registries, release channels, and signing/provenance services
- OCI builder, base images, and the service container contract
- GitOps controller, runtime platform, and any cloud provider

These decisions should be resolved only when a concrete local prototype or
capability gap requires them.
