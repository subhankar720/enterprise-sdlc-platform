# Platform Manager Learning Guide

**Audience:** New contributors and maintainers learning how to manage this monorepo platform

**Last verified:** 2026-11-20

**Status:** Living guide; implemented behavior is distinguished from planned capabilities

This guide is the practical starting point for understanding the repository,
running its local platform tools, and making safe changes. It grows with the
platform: update it in the same change that materially changes a command,
project contract, onboarding flow, or implemented capability.

## Start here, in order

1. Read the root [README](../../README.md) for the repository overview.
2. Read the [standard charter](../standard-charter.md) for governing principles.
3. Read the [platform vision](../planning/vision.md), [assumptions](../planning/assumptions.md),
   and [roadmap](../planning/roadmap.md) to separate agreed direction from open
   decisions.
4. Review the [planning records](../planning/README.md) and
   [traceability matrix](../planning/traceability.md) before proposing a change.
5. Browse the [skills center](../skills/README.md); the
   [Nx guide](../skills/nx.md) and
   [toolchain readiness snapshot](../skills/toolchain-readiness.md) are the
   most useful starting points for local development.

The charter describes the intended enterprise standard. It does not mean every
listed integration is implemented or approved for this personal, local-first
prototype. Use the status and evidence in the planning records before assuming a
capability exists.

## What this repository is

This is a polyglot monorepo platform prototype. The intended division of work is:

- **Nx** discovers projects, tracks dependency edges, selects affected work, and
  orchestrates targets.
- **Language-native tools** perform the actual work: for example, uv/Python,
  pnpm/JavaScript, Gradle/JVM, Go, and Cargo/Rust.
- **Platform tooling** provides shared conventions, metadata validation,
  commands, and future onboarding/build profiles.
- **Projects** retain their own ownership, dependencies, tests, and release
  identity.

The development default is local on the owner's laptop. Cloud infrastructure,
hosted CI controls, registries, production credentials, and deployment systems
are not prerequisites for the current learning slice.

## Repository tour

| Location | What to find there |
|---|---|
| `apps/backend/fastapi-service/` | Current local FastAPI pilot; includes the example `.runconf` |
| `platform/python/project-contract/` | Versioned JSON Schema and Python validator for project metadata |
| `teams/example/shared/` and `teams/example/service/` | Fixture projects demonstrating a consumer-to-dependency graph |
| `tools/javascript/obt/` | Local `strato obt` command implementation and guide |
| `scripts/local-pr-report.mjs` | Local affected-test report and per-project logs |
| `docs/standard-charter.md` | Lifecycle, engineering, and governance standard |
| `docs/planning/` | Vision, decisions, roadmap, epics, features, stories, and traceability |
| `docs/skills/` | Phase and domain checklists for contributors and coding agents |
| `docs/adr/` | Durable architecture decision records |

The target team layout is still evolving. `teams/example` is a fixture, and the
FastAPI pilot remains under `apps/`; do not move it as an incidental cleanup.

## First local setup

Use the repository-pinned package manager and locked workspace dependencies.
From PowerShell at the repository root:

```powershell
node --version
pnpm --version
python --version
uv --version

pnpm install --frozen-lockfile
uv sync --all-packages --locked
```

The root manifest pins pnpm 12.21.0; Python projects require Python 3.11 or
newer. The repository has not established a supported Node.js version range.
If `pnpm` is not on `PATH`, the pinned package-manager invocation can be used
directly. Prefix subsequent pnpm commands the same way:

```powershell
npx --yes pnpm@12.21.0 install --frozen-lockfile
npx --yes pnpm@12.21.0 strato obt build example/fastapi-service
```

Do not install every language toolchain just because the repository is
polyglot. Check the [readiness snapshot](../skills/toolchain-readiness.md) and
the project you intend to change. The first local slice needs Node.js, pnpm,
Python, and uv; JVM, Go, Rust, containers, and cloud readiness have separate
status and are not implied by the architecture diagrams.

## Your first 30 minutes

### 1. Check what Nx knows about

```powershell
pnpm exec nx show projects
pnpm exec nx graph
```

Every governed project should be registered in Nx. Use an Nx project name when
inspecting a target directly:

```powershell
pnpm exec nx show project python-fastapi-service --json
```

### 2. Try the unified project commands

OBT is a thin command interface over Nx, not a second build engine:

```powershell
pnpm strato obt build example/fastapi-service
pnpm strato obt test example/fastapi-service
pnpm strato obt run example/fastapi-service
```

The CLI argument is `metadata.projectId` (here, `example/fastapi-service`), not
the Nx project name or a directory path. The stable ID is resolved to the Nx
project and its folder. Build and test invoke their Nx targets. Run reads the
project's `.runconf` and invokes the declared target. This pilot declares one
application, so its name can be omitted. For a module with multiple
applications, select one:

```powershell
pnpm strato obt run feds/ors/etl --app controlDataRegistration
```

The command details and configuration limitations are in the
[OBT tool guide](../../tools/javascript/obt/README.md).

### 3. Check a local health endpoint

The FastAPI `serve` target listens on `127.0.0.1:8000`:

```powershell
Invoke-WebRequest http://127.0.0.1:8000/healthz -UseBasicParsing
```

Run the service in one terminal, make the request from another, then stop the
server with `Ctrl+C`.

### 4. See change impact and test evidence

The dependency direction is **consumer to dependency**. In the fixture,
`example-service` depends on `example-shared`, which depends on the platform
contract. Changing the contract should therefore include both consumers in the
affected set.

The local report accepts explicit workspace-relative changed paths:

```powershell
pnpm pr:local -- --files=platform/python/project-contract/src/project_contract/metadata.py
```

Open `.local-reports/pr-checks/latest.md` and its linked logs. This is a local
report, not a live GitHub dashboard or hosted PR check.

## How project configuration fits together

### `project.json` and stable identity

Each governed project has an Nx `project.json`:

- `name` is the Nx project name used in Nx commands such as
  `nx run python-fastapi-service:test`.
- `metadata.projectId` is the stable user-facing ID used by `strato obt`.
- `metadata.team`, product type, language, toolchain profile, and release
  metadata describe ownership and policy context.
- `targets` map build, test, lint, typecheck, serve, or other operations to
  executors and native commands.
- `implicitDependencies` records graph edges when Nx cannot infer them from
  native package manifests.

Project IDs may be slash-separated, such as `feds/ors/etl`. They are not file
paths; Nx metadata maps each ID to the project name and root. See the
[metadata contract](../../platform/python/project-contract/README.md).

### `.runconf`

Each runnable module can declare named applications in HCL. An application
must point to an existing Nx target:

```hcl
applications {
  healthApi {
    target = "serve"
  }
}
```

`--app` is required when there is more than one application; it may be omitted
when there is exactly one. Optional `mainClass` is validated but OBT does not
inject it into a target; the target must be configured to consume it.
`profiles`, including `DockerEnabled`, can be declared, but profile execution
and OCI building are not implemented yet. Use a list assignment such as
`profiles = ["DockerEnabled"]`; `+=` is not HCL syntax.

## A safe workflow for managing a change

1. **Identify the affected project and owner.** Check its stable ID, Nx
   configuration, native manifest, and graph dependencies.
2. **Check the source of truth.** Determine whether the request is implemented
   behavior, owner-endorsed direction, or an unresolved assumption.
3. **Record durable decisions.** Use an ADR for architecture choices and update
   the assumption or planning record that tracks the decision.
4. **Keep the change scoped.** Reuse the repository's existing patterns and
   native tools; avoid introducing hosted services or toolchains without a
   demonstrated need.
5. **Validate the behavior.** Run the focused project targets and tests, then
   check affected consumers when graph or shared contracts change.
6. **Update evidence.** Add implementation and test links to
   [traceability](../planning/traceability.md); update this guide if the
   contributor workflow or verified platform behavior changed.
7. **Review before commit.** Check `git diff --check`, inspect the full diff,
   and ensure generated reports and build artifacts remain ignored.

When adding a project, do not stop at creating a folder. Register it in Nx,
assign a unique `metadata.projectId` and accountable team, add native workspace
configuration and targets, declare dependencies, add `.runconf` if it is
runnable, and test that shared changes select its consumers.

## Implemented now versus later

| Capability | Current state |
|---|---|
| Nx project graph and local Python dependency chain | Implemented as a small proof |
| Project metadata schema and Python validator | Implemented as a version-1 prototype |
| `strato obt` project build/test and application run | Local prototype delegates to Nx targets |
| HCL `.runconf` validation and application selection | Implemented for the initial `target`, optional `mainClass`, and `profiles` fields |
| Local affected-test report with logs | Implemented; explicit changed-file input, not a hosted PR dashboard |
| Java/Scala/Gradle, Go, and Rust project onboarding | Planned or toolchain-dependent; not proven by the Python pilot |
| OCI builder and `DockerEnabled` execution | Not implemented |
| Hosted CI, automatic AI review/sign-off, GitOps controller, production runtime | Not implemented or not selected |

Use the [roadmap](../planning/roadmap.md) and
[assumptions](../planning/assumptions.md) for the authoritative scope. Do not
describe a planned capability as available.

## Keeping this guide useful

Update this guide in the same change when any of the following changes:

- Setup prerequisites or canonical local commands
- Project identity, folder, ownership, or dependency conventions
- OBT command behavior or `.runconf` fields
- How a newcomer verifies a feature or accesses its evidence
- The boundary between local proof and production-ready capability

For each update, refresh **Last verified**, run the cited commands that changed,
link new contracts or ADRs, and keep unresolved decisions explicit. Prefer
explaining concepts through a working repository example over documenting a
future capability as if it already exists.
