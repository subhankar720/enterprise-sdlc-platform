# S-polyglot-build-003

## Story

Validate affected selection and cache invalidation.

## Feature

[F-polyglot-build-003](../features/F-polyglot-build-003.md)

## Acceptance criteria

- Given a shared library with two levels of consumers, When it changes, Then all
  dependent projects and required targets are affected.
- Given a lockfile or version catalog change, When affected is calculated, Then
  projects using that ecosystem are invalidated.
- Given an unrelated application change, When affected is calculated, Then
  independent applications are excluded.
- Given a target input changes, When it is rerun, Then a stale cached output is
  not returned.

## Dependencies

F-polyglot-build-001 and F-polyglot-build-002.

## Test evidence

Automated affected fixtures and cache input mutation tests.
