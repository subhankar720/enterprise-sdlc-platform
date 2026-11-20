# S-monorepo-foundation-001

## Story

Establish and validate the root project graph

## Feature

[F-monorepo-foundation-001](../features/F-monorepo-foundation-001.md)

## Acceptance criteria

- Given the repository after setup, When `nx show projects` is run, Then at least
  one project is available for every initialized workspace.
- Given the repository root, When workspace configuration is inspected, Then
  lockfiles and version catalogs are defined as global Nx inputs.
- Given a change to a shared library, When affected targets are calculated, Then
  direct and transitive consumers are included.
- Given a publish target, When the target configuration is inspected, Then
  `cache` is false or omitted.
- Given missing project registration, When the graph audit runs, Then the audit
  fails with the exact path.
