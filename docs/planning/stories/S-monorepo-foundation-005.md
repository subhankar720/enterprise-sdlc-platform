# S-monorepo-foundation-005

## Story

Demonstrate the local Python FastAPI project development loop.

## Feature

[F-monorepo-foundation-005](../features/F-monorepo-foundation-005.md)

## Acceptance criteria

- Given a selected sample project, When a contributor follows its documented
  local workflow, Then build, lint, test, and applicable typecheck succeed.
- Given the selected Python FastAPI sample, When it is run locally, Then a
  health endpoint responds without requiring a cloud account or external secret.
- Given a local request to `GET /healthz`, When the service is healthy, Then it
  returns HTTP 200 with the JSON body `{"status":"ok"}`.
- Given a source change, When Nx affected calculation runs, Then the sample
  project's required targets are included.
- Given a clean checkout, When workspace setup is performed with declared tools,
  Then no undeclared local state is needed.
- Given a personal learning prototype, When the slice is scoped, Then it does
  not use customer data or deploy to a cloud or production environment.

## Dependencies

A-008 and the project graph / Python executor features.

## Out of scope

Production deployment, real customer data, and external credential provisioning.

## Test evidence

Validated with `uv sync --all-packages --locked`, uncached Nx
build/lint/typecheck/test, `nx affected --target=test` with the service source
passed via `--files`, and an HTTP request to
`http://127.0.0.1:18765/healthz`. Git-diff-based affected calculation remains
unvalidated until the repository has a base commit.
