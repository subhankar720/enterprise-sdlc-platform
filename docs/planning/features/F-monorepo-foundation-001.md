# F-monorepo-foundation-001

## Feature

Root workspace and project graph

## Epic

[EPIC-monorepo-foundation](../epics/EPIC-monorepo-foundation.md)

## Outcome

Nx discovers every governed project and correctly identifies affected projects.

## Scope

- Root Nx configuration and package-manager wiring required to run Nx
- `project.json` for every initial project
- Global files in Nx named inputs
- Initial graph and project-registration validation
- Language-native manifests are covered by
  [F-monorepo-foundation-002](F-monorepo-foundation-002.md)

## Acceptance criteria

- Given an initialized repository, When Nx lists projects, Then every governed
  project appears exactly once.
- Given a shared-library change, When affected projects are calculated, Then all
  transitive consumers appear.
- Given a lockfile or version-catalog change, When affected targets are
  calculated, Then all intended ecosystem projects invalidate.
- Given a project without `project.json`, When the graph is audited, Then CI
  reports the missing registration.
- Given a publish or deploy target, When Nx configuration is inspected, Then
  the target is not cacheable.

## Story

[S-monorepo-foundation-001](../stories/S-monorepo-foundation-001.md)
