# F-release-governance-002

## Feature

Immutable artifact promotion and approvals

## Epic

[EPIC-release-governance](../epics/EPIC-release-governance.md)

## Outcome

Validated artifacts are promoted unchanged through protected environments with
approval and audit evidence.

## Scope

Release candidate, artifact digest and provenance, environment approvals,
promotion records, and deployment linkage.

## Dependencies

F-secure-delivery-004; F-runtime-platform-001/003; environment decision.

## Acceptance criteria

- Given a release candidate, When it is promoted, Then the same digest is used
  in every environment.
- Given invalid test, scan, or signature evidence, When promotion is attempted,
  Then it is blocked.
- Given production promotion, When approval is absent, Then the deployment
  cannot proceed.
- Given an artifact must be changed, When a rebuild occurs, Then a new digest
  and validation evidence are required.

## Story

[S-release-governance-002](../stories/S-release-governance-002.md)
