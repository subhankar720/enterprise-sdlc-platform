# F-runtime-platform-004

## Feature

Progressive delivery and rollback

## Epic

[EPIC-runtime-platform](../epics/EPIC-runtime-platform.md)

## Outcome

Critical services can be released gradually and automatically halted or rolled
back when health criteria fail.

## Scope

Canary or progressive strategy, health analysis, traffic management, approval
policy, rollback signals, and recovery evidence.

## Dependencies

F-runtime-platform-003 and F-observability-reliability-001/002.

## Acceptance criteria

- Given a canary release, When defined health thresholds fail, Then traffic
  promotion stops and the prior healthy version is restored.
- Given health thresholds pass, When promotion proceeds, Then each step and
  observed result is recorded.
- Given an automated analysis query is unavailable, When rollout begins, Then
  automatic promotion does not proceed on a success-shaped default.
- Given the service has no rollback-compatible migration, When release readiness
  is checked, Then rollout is blocked or requires an approved exception.

## Story

[S-runtime-platform-004](../stories/S-runtime-platform-004.md)
