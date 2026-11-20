# F-release-governance-003

## Feature

Release readiness and rollback evidence

## Epic

[EPIC-release-governance](../epics/EPIC-release-governance.md)

## Outcome

Release owners can demonstrate readiness, communicate changes, and restore the
last healthy service state.

## Scope

Readiness checklist, staging soak, migration and compatibility review, operator
communications, rollback criteria, release record, and post-release validation.

## Dependencies

F-release-governance-001/002; runtime rollback and operational SLOs.

## Acceptance criteria

- Given a release, When readiness is evaluated, Then required tests, security,
  migration, SLO, approval, and rollback evidence are present.
- Given a failed post-deployment health check, When release policy evaluates it,
  Then promotion stops and the documented rollback owner is notified.
- Given a release is completed, When its record is queried, Then source revision,
  artifact digest, environment, approvals, and outcome are traceable.
- Given required rollback evidence is missing, When production approval is
  requested, Then the request is blocked or requires a documented exception.

## Story

[S-release-governance-003](../stories/S-release-governance-003.md)
