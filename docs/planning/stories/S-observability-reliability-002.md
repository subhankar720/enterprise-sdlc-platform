# S-observability-reliability-002

## Story

Define an SLO and actionable alert for the selected service.

## Feature

[F-observability-reliability-002](../features/F-observability-reliability-002.md)

## Acceptance criteria

- Given an approved service SLO, When its query runs, Then the result includes
  measurement window, numerator, denominator, and owner.
- Given an SLO threshold breach, When the alert evaluates, Then it routes to the
  service owner and links a runbook.
- Given missing telemetry, When the SLO is calculated, Then it reports unknown
  or data gap rather than 100% availability.
- Given an alert without a response action, When rule review runs, Then it cannot
  be classified as paging.

## Dependencies

F-observability-reliability-001; service owner and criticality agreement.

## Test evidence

PromQL/query tests with healthy, breached, and no-data samples.
