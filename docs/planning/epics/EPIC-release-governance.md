# EPIC-release-governance

## Status

`proposed`

## Problem

Uncontrolled versioning and promotion make changes hard to audit, reproduce, or
roll back confidently.

## Outcome

Releases are traceable to approved changes, validated immutable artifacts,
promotion approvals, and tested rollback plans.

## Owner

Release Engineering with service owners

## Success metrics

- Every release identifies source, approvals, test evidence, and artifact digest.
- An artifact is built once and promoted without mutation.
- Rollback success is recorded for production-capable services.
- Release notes and migration impacts are available to operators.

## Scope

Version strategy, changelog, release automation, approvals, artifact promotion,
release readiness, rollback, and audit evidence.

## Priority rationale

Release traceability and controlled promotion are necessary for safe production
changes and compliance evidence.

## Dependencies

- `EPIC-secure-delivery` provenance and CI evidence
- `EPIC-runtime-platform` environment promotion and rollback
- `EPIC-observability-reliability` health and SLO evidence

## Features

- F-release-governance-001: Versioning and change records
- F-release-governance-002: Immutable artifact promotion and approvals
- F-release-governance-003: Release readiness and rollback evidence
