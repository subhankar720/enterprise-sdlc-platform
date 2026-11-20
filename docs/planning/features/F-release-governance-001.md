# F-release-governance-001

## Feature

Versioning and change records

## Epic

[EPIC-release-governance](../epics/EPIC-release-governance.md)

## Outcome

Changes receive consistent versions and release notes that link delivered work
to approved requirements.

## Scope

Version strategy, tags, changelog generation, change classification, migration
notes, and release record format.

## Dependencies

Versioning decision and project release ownership.

## Acceptance criteria

- Given merged changes with valid metadata, When release notes are generated,
  Then they link to changes and identify behavior or migration impact.
- Given a breaking public contract change, When version validation runs, Then
  compatibility policy requires an appropriate major-version decision.
- Given incomplete change metadata, When release notes are generated, Then the
  missing data is reported rather than silently omitted.
- Given a release version already published, When the same version is attempted
  again, Then the release is rejected as immutable.

## Story

[S-release-governance-001](../stories/S-release-governance-001.md)
