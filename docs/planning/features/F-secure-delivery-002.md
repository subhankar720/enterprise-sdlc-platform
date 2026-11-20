# F-secure-delivery-002

## Feature

Affected CI and required merge gate

## Epic

[EPIC-secure-delivery](../epics/EPIC-secure-delivery.md)

## Outcome

Pull requests run the required affected validation and always produce a single
required gate result.

## Scope

Reusable workflows, affected computation, language jobs, stable required status,
test reports, runner selection, and CI duration telemetry.

## Dependencies

`EPIC-polyglot-build`; GitHub Actions runner and capability decisions.

## Acceptance criteria

- Given a language-scoped change, When CI runs, Then the matching affected
  validation executes and unrelated language builds are skipped.
- Given no affected projects, When CI completes, Then repository-wide required
  checks still run and report an explicit valid no-op.
- Given any required job fails or is skipped unexpectedly, When the gate
  evaluates, Then the PR cannot merge.
- Given a workflow uses deployment or publication, When it is defined, Then it
  is separate from cacheable validation and requires the appropriate approval.

## Story

[S-secure-delivery-002](../stories/S-secure-delivery-002.md)
