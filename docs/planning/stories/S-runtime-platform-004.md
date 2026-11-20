# S-runtime-platform-004

## Story

Exercise progressive delivery with an automated rollback condition.

## Feature

[F-runtime-platform-004](../features/F-runtime-platform-004.md)

## Acceptance criteria

- Given a canary with healthy signals, When promotion steps execute, Then each
  step records its traffic share and analysis result.
- Given a canary exceeding a failure threshold, When analysis evaluates it, Then
  promotion halts and traffic returns to the last healthy revision.
- Given a missing or failed health query, When analysis evaluates it, Then it
  fails closed rather than treating missing data as healthy.
- Given an incompatible database change, When rollout readiness is checked,
  Then the release is blocked until rollback-safe sequencing is documented.

## Dependencies

GitOps, telemetry and SLO query availability, compatible migration strategy.

## Test evidence

Simulated healthy and unhealthy rollout; recorded rollback outcome.
