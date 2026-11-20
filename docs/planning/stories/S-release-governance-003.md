# S-release-governance-003

## Story

Evaluate release readiness and preserve rollback evidence.

## Feature

[F-release-governance-003](../features/F-release-governance-003.md)

## Acceptance criteria

- Given a release candidate, When readiness is checked, Then test, security,
  migration, SLO, approval, and rollback evidence are evaluated.
- Given a post-deployment health failure, When policy evaluates the release,
  Then promotion halts and the assigned rollback procedure is invoked or requested.
- Given a completed release, When the record is inspected, Then source, digest,
  approvals, target environment, and observed outcome are present.
- Given no rollback owner or safe migration path, When production approval is
  requested, Then it is blocked.

## Dependencies

Release candidate, GitOps rollback, SLO data, migration compatibility strategy.

## Test evidence

Readiness gate tests for passing, missing evidence, health failure, and rollback.
