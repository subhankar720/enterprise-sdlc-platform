# EPIC-polyglot-build

## Status

`proposed`

## Problem

Native workspaces alone do not provide a reliable cross-language dependency
graph, affected-project calculation, or shared build experience.

## Outcome

Nx discovers projects and transitive dependencies across the governed ecosystems,
and runs correct affected builds using language-native tools.

## Owner

Platform Engineering, with language-domain owners

## Success metrics

- Every governed project is visible exactly once in Nx.
- Shared-library changes include all transitive consumers in the affected set.
- Global dependency files invalidate the intended ecosystem projects.
- P95 affected CI build time trends toward the under-eight-minute target.

## Scope

Nx project graph, graph inference, native executors, target conventions, cache
inputs, graph auditing, affected-detection tests, and a unified project command
interface with module-scoped application configuration.

## Constraints

- Nx orchestrates; Gradle, pnpm, uv, Go, and Cargo execute language work.
- No remote cache provider is selected yet; see [assumptions](../assumptions.md).

## Priority rationale

Correct graph edges prevent missed tests and builds; this is a prerequisite for
safe selective CI at monorepo scale.

## Dependencies

- `EPIC-monorepo-foundation`, especially root manifests and project registration.

## Features

- F-polyglot-build-001: Cross-language project graph
- F-polyglot-build-002: Native language targets
- F-polyglot-build-003: Affected detection and cache correctness
- F-polyglot-build-004: Graph audit and onboarding
- F-polyglot-build-005: Unified project commands and application scopes
