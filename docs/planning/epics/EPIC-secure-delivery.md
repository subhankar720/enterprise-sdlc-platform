# EPIC-secure-delivery

## Status

`proposed`

## Problem

Without enforced repository governance and security controls, changes can bypass
review, leak secrets, introduce vulnerable dependencies, or produce unverifiable
artifacts.

## Outcome

Every change passes auditable review, build, test, and security gates using
least-privilege identity and verifiable artifact provenance.

## Owner

Platform Engineering and Security

## Success metrics

- All protected-branch changes require the agreed approvals and CI gate.
- Secret values are blocked from entering the repository.
- Critical and high findings follow the charter remediation SLAs.
- No production workflow uses long-lived static cloud credentials.

## Scope

GitHub governance, reusable Actions, test and security workflows, dependency and
license checks, identity, supply-chain provenance, and artifact signing.

## Constraints

GitHub capabilities, runner model, security-product licensing, and cloud identity
are subject to [assumptions](../assumptions.md).

## Priority rationale

Security and review controls must protect foundational changes and all later
build, deployment, and release automation.

## Dependencies

- `EPIC-monorepo-foundation`
- `EPIC-polyglot-build` for precise affected language jobs

## Features

- F-secure-delivery-001: GitHub repository governance
- F-secure-delivery-002: Affected CI and required merge gate
- F-secure-delivery-003: Security and dependency controls
- F-secure-delivery-004: Workload identity and artifact integrity
