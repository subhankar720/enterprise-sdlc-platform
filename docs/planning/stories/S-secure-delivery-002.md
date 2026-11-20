# S-secure-delivery-002

## Story

Run affected validation behind a stable required CI gate.

## Feature

[F-secure-delivery-002](../features/F-secure-delivery-002.md)

## Acceptance criteria

- Given a change to one language project, When CI executes, Then its affected
  build and tests run and unrelated language jobs are skipped.
- Given an affected job fails, When the required gate evaluates, Then it fails.
- Given no project is affected, When CI executes, Then the no-op outcome is
  explicit and mandatory repository checks still run.
- Given an untrusted pull request, When workflows execute, Then write permissions
  and secret access are not granted without an approved trust model.

## Dependencies

`EPIC-polyglot-build`, GitHub Actions runner decision.

## Test evidence

Representative PR fixtures for project change, global file change, no-op, and failure.
