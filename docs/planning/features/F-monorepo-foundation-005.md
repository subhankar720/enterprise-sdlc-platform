# F-monorepo-foundation-005

## Feature

First local vertical slice

## Epic

[EPIC-monorepo-foundation](../epics/EPIC-monorepo-foundation.md)

## Outcome

One selected sample project demonstrates the repository's project, build, test,
lint, documentation, and local validation conventions end to end.

## Selected slice

Python FastAPI service at `apps/backend/fastapi-service` for a personal learning
prototype, running locally. It exposes only `GET /healthz`, returning
`{"status":"ok"}`.

## Scope

One representative project and its directly required shared contract or library.
This feature does not authorize cloud provisioning or production deployment.

## Dependencies

- F-monorepo-foundation-001 and F-monorepo-foundation-002
- F-polyglot-build-001 and F-polyglot-build-002
- A-008 local-only first slice is selected

## Acceptance criteria

- Given the selected project, When Nx lists projects, Then its stable name and
  ownership metadata are present.
- Given a clean checkout with declared prerequisites, When the documented build,
  test, lint, and typecheck targets run, Then each completes successfully.
- Given a change to the project, When affected targets are calculated, Then the
  project's relevant validation targets are selected.
- Given an unapproved external system or secret, When the slice is implemented,
  Then it does not introduce that integration or credential.

## Story

[S-monorepo-foundation-005](../stories/S-monorepo-foundation-005.md)
