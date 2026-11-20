# F-developer-experience-004

## Feature

Developer productivity measurement

## Epic

[EPIC-developer-experience](../epics/EPIC-developer-experience.md)

## Outcome

Build performance, onboarding, golden-path adoption, and developer feedback are
measured without collecting unnecessary personal data.

## Scope

CI P95 and cache-hit metrics, onboarding duration, catalog completeness, adoption,
developer survey cadence, and data privacy.

## Dependencies

CI telemetry and decisions about metric ownership and data retention.

## Acceptance criteria

- Given a completed CI run, When platform metrics are reported, Then duration and
  cache information are attributable to workflow and project without secrets.
- Given an onboarding cohort, When setup time is measured, Then method, sample
  size, and limitations are documented.
- Given the under-eight-minute P95 target, When results exceed it, Then an owner
  and improvement issue are created.
- Given a metric is not available, When a dashboard renders, Then it reports
  missing data rather than a favorable zero.

## Story

[S-developer-experience-004](../stories/S-developer-experience-004.md)
