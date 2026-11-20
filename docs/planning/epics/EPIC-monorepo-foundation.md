# EPIC-monorepo-foundation

## Status

`active`

## Problem

The repository is missing the governed workspaces, project graph, quality gates,
and documentation required to implement an enterprise polyglot monorepo.

## Outcome

The repository provides approved standards, root workspace conventions, initial
project registration, and traceable local validation as a foundation for secure
polyglot delivery.

## Constraints

- Nx is the orchestrator.
- Native language tools remain the executors.
- Repository tools are available locally under `D:\tools`.
- Production deployment and secrets integrations require separate approval.

## Success metrics

- 100% of governed projects have `project.json`.
- Nx reports all intended projects and dependency edges.
- A single-language PR runs only intended affected targets.
- Required local quality checks and repository ownership conventions are documented.
- Secure merge enforcement is implemented under `EPIC-secure-delivery`.
- Golden-path onboarding is implemented under `EPIC-developer-experience`.

## Features

- F-monorepo-foundation-001: Root workspace and project graph
- F-monorepo-foundation-002: Language workspace governance
- F-monorepo-foundation-003: Repository governance and CI baseline
- F-monorepo-foundation-004: Planning and skills operating system
- F-monorepo-foundation-005: First vertical delivery slice

## Dependencies

- This is the first portfolio epic. External provider and runtime choices are
  tracked in [assumptions](../assumptions.md).
- F-monorepo-foundation-005 depends on the project graph, language workspaces,
  repository governance, and a working CI gate.

## Priority rationale

Foundational controls reduce rework and make all subsequent platform capabilities
discoverable, testable, and governable.

## Approval and execution scope

The repository owner authorized the local Phase 0 learning slice on 2026-11-20:
a Python FastAPI service, local execution only, with no customer data, cloud
resources, or external credentials. Enterprise integrations remain proposed and
blocked on their listed decisions.
