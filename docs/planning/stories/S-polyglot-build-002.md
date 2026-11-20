# S-polyglot-build-002

## Story

Run native build and quality commands through Nx.

## Feature

[F-polyglot-build-002](../features/F-polyglot-build-002.md)

## Acceptance criteria

- Given a project with an installed toolchain, When its Nx target runs, Then the
  native command runs in the project context and returns its real exit status.
- Given a required tool is absent, When the target runs, Then it reports the
  missing executable and does not return success.
- Given a deploy or publish target, When caching is inspected, Then it is disabled.
- Given a deterministic test target, When it is run twice without input changes,
  Then cache reuse is allowed only if declared inputs and outputs are complete.

## Dependencies

F-polyglot-build-001; language toolchain availability.

## Test evidence

Representative target integration tests, including nonzero exit and missing-tool cases.
