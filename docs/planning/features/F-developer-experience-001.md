# F-developer-experience-001

## Feature

Service catalog and ownership

## Epic

[EPIC-developer-experience](../epics/EPIC-developer-experience.md)

## Outcome

Teams can discover services, libraries, dependencies, owners, lifecycle, and
operational links from a maintained catalog.

## Scope

Catalog schema, source-of-truth metadata, ownership, lifecycle, dependency
relationships, CI and runtime links, validation, and catalog freshness.

## Dependencies

Catalog product decision and project ownership metadata.

## Acceptance criteria

- Given a governed service, When its catalog entry is validated, Then owner,
  lifecycle, repository, project ID, and critical operational links are present.
- Given an Nx project dependency, When catalog relationships are rendered,
  Then the dependency is represented or explicitly excluded with rationale.
- Given a missing or stale catalog record, When catalog validation runs, Then it
  reports the owner and missing field.
- Given a service owner changes, When metadata is updated, Then catalog ownership
  and review routing use the new source of truth.

## Story

[S-developer-experience-001](../stories/S-developer-experience-001.md)
