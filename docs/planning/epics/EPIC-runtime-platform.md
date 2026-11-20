# EPIC-runtime-platform

## Status

`proposed`

## Problem

Build artifacts cannot be operated safely without standard packaging, governed
infrastructure, environment reconciliation, and tested rollback.

## Outcome

Approved application artifacts are packaged once and promoted through policy-
controlled environments using declarative GitOps and recovery procedures.

## Owner

Platform Engineering and SRE

## Success metrics

- A non-production application can be deployed from GitOps.
- Production does not depend on manual imperative deployments.
- Container images are scanned, signed, and promoted by immutable digest.
- Rollback is exercised and its result is recorded.

## Scope

Container standards, infrastructure as code, Kubernetes policy, secrets
integration, GitOps, progressive delivery, and environment promotion.

## Constraints

Cloud provider, registry, cluster model, secrets platform, and GitOps hosting must
be resolved before provisioning; see [assumptions](../assumptions.md).

## Priority rationale

Runtime controls turn CI artifacts into deployable, supportable services while
constraining production risk.

## Dependencies

- `EPIC-secure-delivery`
- Provider and platform decisions in `assumptions.md`
- Observability queries before automated SLO-based canary analysis

## Features

- F-runtime-platform-001: Container and artifact baseline
- F-runtime-platform-002: Infrastructure and cluster foundation
- F-runtime-platform-003: GitOps environment reconciliation
- F-runtime-platform-004: Progressive delivery and rollback
