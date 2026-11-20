# TypeScript Frontend — Domain Skill

> **Activation trigger.** Load this skill for `*.ts`, `*.tsx`, `package.json`,
> pnpm workspaces, frontend applications, or design-system libraries.

## Required context

Read the root `package.json`, `pnpm-workspace.yaml`, lockfile, pinned Node/pnpm
versions, project descriptor, public package exports, and affected UI/API
contracts. The root package manifest and lockfile are not present yet.

## Checklist

- [ ] Use pnpm workspace protocol for local package dependencies.
- [ ] Add `project.json` to every governed application or library.
- [ ] Keep package exports and public APIs explicit.
- [ ] Use the repository design system and auth client patterns.
- [ ] Add unit, component, and E2E tests appropriate to the change.
- [ ] Define typecheck, lint, build, test, and serve targets.
- [ ] Prevent workspace protocol references in publish artifacts.

## Commands

pnpm is available globally, but its version is not pinned in this repository and
local Nx is absent. After adding and reviewing the root manifest and lockfile,
use `pnpm install --frozen-lockfile` and repo-local scripts/targets. Do not use a
global Nx version as proof that the workspace works.

## Required artifacts

- Package manifest and declared workspace membership
- `project.json` with build, test, lint, typecheck, and serve targets as applicable
- Component/API tests and accessibility evidence
- Generated-client source and repeatable generation command where applicable

## Quality gates

- Frozen lockfile install passes
- Typecheck and lint pass
- Tests pass
- Accessibility checks pass for user interfaces
- Build artifact is reproducible
- Package publish dry-run passes where applicable

## Anti-patterns

- Version-pinned local dependencies instead of workspace protocol
- Hardcoded API endpoints or secrets
- Generated API clients committed without a generation step
- Skipping accessibility and negative-path behavior

## Stop conditions

Stop if the supported Node/pnpm versions, API contract, auth behavior, or
accessibility requirements are not defined.

## Definition of done

Frozen install, typecheck, lint, tests, accessibility checks, and production
build pass using repository-pinned tools; generated output is reproducible.
