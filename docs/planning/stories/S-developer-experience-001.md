# S-developer-experience-001

## Story

Discover owned projects and their operational relationships.

## Feature

[F-developer-experience-001](../features/F-developer-experience-001.md)

## Acceptance criteria

- Given each governed service, When the catalog validates it, Then owner,
  lifecycle, project identifier, repository, and operational links are present.
- Given a project dependency, When the catalog renders the service, Then the
  relationship is visible or explicitly excluded with a reason.
- Given missing required metadata, When validation runs, Then it fails with
  project name and missing field.
- Given an unowned project, When ownership is queried, Then no default team is
  silently substituted.

## Dependencies

Project tags and owner assignment; catalog product decision.

## Test evidence

Catalog validation fixtures for valid, incomplete, duplicate, and stale records.
