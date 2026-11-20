# Nx and Polyglot Build — Domain Skill

> **Activation trigger.** Load this skill when changing `nx.json`, `project.json`,
> project graph inference, Nx executors, target defaults, affected calculation,
> task inputs/outputs, or caching.

## Required context

Inspect the root package manifest, package manager and lockfile, Nx version,
`nx.json`, all relevant `project.json` files, native workspace manifests, current
branch/base refs, and affected consumers before changing graph behavior.

## Current repository readiness

At the last local check, Nx v24.0.6 is pinned locally and discovers five
projects, including the OBT CLI. The original FastAPI project and the
three-project Python graph proof pass build, lint, typecheck, and test. The OBT
unit tests pass, and its local build/test/run commands dispatch to Nx targets.
Changing the platform contract selects the shared library and service
transitively; `pnpm pr:local` records final statuses and per-project logs. The
Go plugin reference was removed until a plugin implementation exists.

The repository has a base commit. Both explicit-file selection and a
Git-base-based affected run have been validated; the platform source change
selected three projects and excluded the unrelated FastAPI pilot. Recheck
base/head behavior whenever the default branch or merge strategy changes.
`nx.json` uses the observed branch name `master`; update it if the repository's
default branch changes. Do not use global Nx as proof that the project-pinned
configuration works. See the [toolchain readiness snapshot](toolchain-readiness.md).

## Checklist

- [ ] Pin Nx in the root package manifest and commit the matching pnpm lockfile.
- [ ] Use the repo-local Nx executable through pnpm.
- [ ] Register every governed project once with stable name, type, language, and
  ownership tags.
- [ ] Declare or infer direct dependencies and test transitive edges.
- [ ] Align graph plugins with implementations that exist in the repository.
- [ ] Add lockfiles, version catalogs, workspace files, and graph plugin inputs to
  the correct global or named inputs.
- [ ] Declare complete target inputs and outputs before enabling caching.
- [ ] Keep publish, deploy, and other side-effect targets non-cacheable.
- [ ] Validate affected calculation using explicit valid base/head revisions.
- [ ] Test both expected affected projects and unrelated projects that must remain
  unaffected.
- [ ] Avoid remote cache setup until its provider and access model are approved.

## Commands

After the root package manifest, lockfile, and local Nx dependency exist:

```powershell
pnpm exec nx show projects
pnpm exec nx graph
pnpm exec nx show project <project-name> --json
pnpm exec nx affected -t test --base=<valid-base-ref> --head=<valid-head-ref>
pnpm pr:local -- --files=platform/python/project-contract/src/project_contract/metadata.py
pnpm strato obt build <project-id>
pnpm strato obt test <project-id>
pnpm strato obt run <project-id> [--app <application-name>]
```

Use the repository-pinned pnpm/Nx versions. Do not hardcode `main` or
`origin/main`; choose refs that exist in the current repository. Use explicit
`--files` inputs to isolate a graph case and valid base/head refs to validate
Git-diff behavior.

## Remaining configuration gaps

- Nx's repository version and `nx.json` schema must be validated again whenever
  either changes.
- `defaultBase: "master"` is only valid while that remains the actual base branch.
- Cross-language edges, cycle validation, and global-file impact remain to be tested.
- The remote cache provider is not approved for the local-only prototype. Keep
  local cache separate from remote cache.
- Root task defaults must distinguish local deterministic image construction
  from image publication or deployment. Side effects must not be cached.

## Required artifacts

- Root Nx version pin and reproducible package-manager lockfile
- `project.json` for each governed project
- Graph dependency evidence and cycle validation
- Target input/output/cache policy
- Affected-selection test cases and troubleshooting record

## Quality gates

- `nx show projects` matches the governed project inventory
- Graph contains all direct and transitive dependencies and no cycles
- Global-file changes invalidate the intended ecosystem projects
- A scoped source change includes all consumers and excludes unrelated projects
- Cache reuse occurs only for deterministic targets with complete inputs
- Side-effect targets do not return cached success

## Anti-patterns

- Using a global Nx binary to validate a repository without a local version pin
- Assuming `main` or `origin/main` exists as the affected base
- Registering plugins or executors whose implementation is missing
- Treating an explicit project list as proof that dependency inference works
- Caching image push, publish, deploy, or reconciliation side effects

## Stop conditions

Stop if the local Nx version is missing or differs from the declared pin, plugin
paths cannot be resolved, project ownership or dependency edges are ambiguous, or
base/head revisions do not exist. Report the exact blocker; do not treat a global
Nx version or hand-written project list as successful graph validation.

## Definition of done

The repository-pinned Nx command succeeds, projects and dependency edges match
the intended architecture, affected and cache tests pass, and any remaining
exceptions have an owner and expiry.
