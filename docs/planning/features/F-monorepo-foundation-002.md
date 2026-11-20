# F-monorepo-foundation-002

## Feature

Language workspace governance

## Epic

[EPIC-monorepo-foundation](../epics/EPIC-monorepo-foundation.md)

## Outcome

Java, TypeScript, Python, Go, and Rust use centrally governed native workspace
configuration and reproducible dependency resolution.

## Scope

Gradle settings and version catalog; pnpm root package and workspace; uv workspace;
Go workspace; Cargo workspace and toolchain declaration.

## Dependencies

- F-monorepo-foundation-001 for project and root workspace conventions
- Rust toolchain availability decision for Cargo validation

## Acceptance criteria

- Given any initialized language workspace, When its documented install or
  resolution command runs, Then it resolves from the repository root.
- Given a local library dependency, When a consumer resolves it, Then it uses the
  workspace member rather than an independently published copy.
- Given an external dependency, When the workspace is installed in frozen mode,
  Then the declared lockfile controls the resolved version.
- Given an unsupported or unavailable toolchain, When setup is attempted, Then
  the documented bootstrap check fails with an actionable message.

## Story

[S-monorepo-foundation-002](../stories/S-monorepo-foundation-002.md)
