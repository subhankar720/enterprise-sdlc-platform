# S-polyglot-build-004

## Story

Audit project graph completeness and document recovery.

## Feature

[F-polyglot-build-004](../features/F-polyglot-build-004.md)

## Acceptance criteria

- Given a project directory without `project.json`, When the audit runs, Then
  the command fails and reports its path.
- Given a cycle or unowned project, When the audit runs, Then it reports the
  dependency path or missing owner.
- Given a new contributor, When the onboarding steps are followed, Then all
  required project metadata and targets are registered.
- Given incorrect affected output, When the runbook is followed, Then each
  diagnostic step can be executed and its expected evidence is named.

## Dependencies

F-polyglot-build-001 through 003.

## Test evidence

Audit fixtures for missing descriptors, cycles, and missing metadata.
