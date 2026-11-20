# S-observability-reliability-003

## Story

Validate recovery instructions and track incident learning.

## Feature

[F-observability-reliability-003](../features/F-observability-reliability-003.md)

## Acceptance criteria

- Given a critical operational scenario, When an operator follows its runbook,
  Then detection, mitigation, escalation, and rollback paths are explicit.
- Given an approved recovery exercise, When it finishes, Then actual recovery
  time and data-loss bound are compared with the approved target.
- Given a postmortem action, When it is recorded, Then owner, due date, and
  requirement or reliability link are mandatory.
- Given a production chaos experiment without approval, When it is requested,
  Then execution is denied.

## Dependencies

Telemetry, SLOs, service ownership, and recovery objectives.

## Test evidence

Runbook tabletop or non-production recovery exercise and action-tracking audit.
