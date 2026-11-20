# EPIC-developer-experience

## Status

`proposed`

## Problem

Without discoverability, standardized environments, and supported scaffolding,
teams repeatedly solve repository, security, CI, and operational setup.

## Outcome

Teams can discover owned services and bootstrap compliant projects through
maintained golden paths with low-friction local development.

## Owner

Developer Experience and Platform Engineering

## Success metrics

- More than 90% of eligible services use supported golden paths.
- New-service onboarding trends toward one working day.
- All services have discoverable owner and lifecycle metadata.
- Developer satisfaction and build performance are measured and reviewed.

## Scope

Service catalog, language-specific templates, local development environments,
repository documentation, onboarding, and developer experience metrics.

## Constraints

Backstage hosting and integration scope require a decision; see
[assumptions](../assumptions.md).

## Priority rationale

Self-service standards reduce setup time and improve consistency across teams.

## Dependencies

- `EPIC-monorepo-foundation`
- `EPIC-secure-delivery` reusable workflows and security defaults
- `EPIC-polyglot-build` project and target conventions
- `EPIC-runtime-platform` deployment interfaces for deployable templates

## Features

- F-developer-experience-001: Service catalog and ownership
- F-developer-experience-002: Golden-path service templates
- F-developer-experience-003: Local development environments and onboarding
- F-developer-experience-004: Developer productivity measurement
