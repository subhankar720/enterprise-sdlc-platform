# S-developer-experience-004

## Story

Measure developer experience and CI performance responsibly.

## Feature

[F-developer-experience-004](../features/F-developer-experience-004.md)

## Acceptance criteria

- Given CI workflow runs, When aggregate metrics are computed, Then P50/P95
  duration and cache outcome are reported with a defined time window.
- Given P95 duration exceeds target, When the report is generated, Then an owner
  and follow-up are identified.
- Given onboarding data is collected, When metrics are published, Then personal
  identifiers are excluded unless explicitly approved.
- Given no measurements exist, When a dashboard is rendered, Then the metric is
  shown as unavailable rather than zero.

## Dependencies

CI run metadata, metric owner, privacy and retention policy.

## Test evidence

Aggregation tests for percentile, missing data, and privacy-safe dimensions.
