# S-monorepo-foundation-002

## Story

Establish native language workspace manifests and reproducible resolution.

## Feature

[F-monorepo-foundation-002](../features/F-monorepo-foundation-002.md)

## Size

Team estimate required after toolchain prerequisites are verified.

## Acceptance criteria

- Given each language selected for initial support, When its root workspace
  command is run, Then its manifest and local member paths validate.
- Given an external dependency, When frozen resolution runs, Then no undeclared
  lockfile mutation occurs.
- Given a local workspace dependency, When it is resolved, Then the local project
  is used and Nx can represent its relationship.
- Given Rust tooling is unavailable, When the bootstrap check runs, Then it fails
  visibly and identifies the installation prerequisite.

## Dependencies

F-monorepo-foundation-001; decision A-009 for Rust.

## Out of scope

Adding production application features or selecting unapproved dependency versions.

## Test evidence

Clean workspace resolution for each initialized language; lockfile diff check.
