# F-observability-reliability-002

## Feature

SLOs and actionable alerting

## Epic

[EPIC-observability-reliability](../epics/EPIC-observability-reliability.md)

## Outcome

Service reliability is measured against approved objectives and alerts lead to
timely, owned actions.

## Scope

SLIs, SLOs, error budgets, alert thresholds, routing, escalation, and review.

## Dependencies

F-observability-reliability-001; service owner and business criticality.

## Acceptance criteria

- Given a production service, When its SLO is approved, Then its SLI query,
  measurement window, owner, and error-budget policy are explicit.
- Given a page-level alert, When it fires, Then it identifies the affected
  service, impact, owner, and runbook.
- Given an alert without an actionable response, When rule validation runs,
  Then it is rejected or classified as non-paging.
- Given SLO query data is missing, When reliability is reported, Then absence is
  shown as unknown rather than healthy.

## Story

[S-observability-reliability-002](../stories/S-observability-reliability-002.md)
