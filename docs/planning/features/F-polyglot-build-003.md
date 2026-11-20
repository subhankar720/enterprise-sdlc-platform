# F-polyglot-build-003

## Feature

Affected detection and cache correctness

## Epic

[EPIC-polyglot-build](../epics/EPIC-polyglot-build.md)

## Outcome

Changes select every impacted project and target while unrelated projects remain
unselected.

## Scope

Base/head calculation, global file inputs, project and dependency inputs, local
cache validation, and affected-regression fixtures.

## Dependencies

F-polyglot-build-001 and F-polyglot-build-002; remote cache requires A-010.

## Acceptance criteria

- Given a shared-library change, When affected projects are calculated, Then all
  transitive consumers are included.
- Given a lockfile, workspace, version catalog, or Nx config change, When affected
  projects are calculated, Then all relevant ecosystem projects are invalidated.
- Given an unrelated isolated project change, When affected projects are
  calculated, Then unrelated projects are excluded.
- Given a cacheable target whose input changes, When rerun, Then the prior output
  is not incorrectly reused.

## Story

[S-polyglot-build-003](../stories/S-polyglot-build-003.md)
