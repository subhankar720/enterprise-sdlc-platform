# S-release-governance-001

## Story

Generate versioned release records from approved changes.

## Feature

[F-release-governance-001](../features/F-release-governance-001.md)

## Acceptance criteria

- Given valid merged changes, When release notes are generated, Then they include
  version, change summaries, and links to planning records.
- Given a breaking API or schema change, When release validation runs, Then
  compatibility and versioning requirements are checked.
- Given required change metadata is missing, When release notes are generated,
  Then the release fails with the missing record identified.
- Given a version tag already exists, When it is published again, Then the
  operation is rejected.

## Dependencies

Versioning strategy and source-of-truth for change metadata.

## Test evidence

Release-note fixtures for feature, fix, breaking change, and incomplete metadata.
