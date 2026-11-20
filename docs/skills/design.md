# Design — SDLC Phase Skill

> **Activation trigger.** Load this skill for architecture decisions, API and event
> contracts, data models, threat models, or changes under `docs/adr/`,
> `security/threat-models/`, `docs/architecture/`, or `shared-libs/proto/`.

## Required context

Read the approved story, charter, affected architecture records, dependency and
data owners, existing contracts, and relevant security and operational
constraints. Confirm unresolved assumptions before treating an option as selected.

## Checklist

- [ ] Record context, constraints, options, decision, consequences, and alternatives.
- [ ] Create an ADR for a durable architecture or governance decision.
- [ ] Define API, event, and schema compatibility rules.
- [ ] Model data ownership, retention, access, and migration impact.
- [ ] Identify security boundaries, trust boundaries, and abuse cases.
- [ ] Define availability, latency, throughput, and recovery requirements.
- [ ] Identify affected projects and cross-language dependencies.
- [ ] Define observability signals and operational ownership.
- [ ] Confirm that the design satisfies the approved acceptance criteria.

## Required artifacts

- ADR when the decision is durable
- C4 or repository-standard architecture diagram for significant systems
- API or event contract
- Data model or migration design
- Threat model for sensitive or externally reachable components
- SLO candidates and runbook scope

## Commands

There is no universal design command. Validate diagrams, contracts, schemas, and
ADR links with the format and tooling selected by the owning project. Do not mark
an external tool or contract check as passed unless it was run.

## Quality gates

- No unresolved cross-team contract ambiguity
- No circular project dependency
- No undeclared external service or infrastructure dependency
- No security or privacy gap without an owner and acceptance
- No implementation action before approval of material design risks

## Anti-patterns

- Writing implementation code as the only architecture record
- Creating an ADR that records a decision without considered alternatives
- Designing only for the happy path
- Treating API documentation as a substitute for a versioning strategy
- Adding infrastructure without operational ownership

## Stop conditions

Stop when requirements conflict, a trust/data boundary is unknown, or the
decision requires an unapproved provider, credential, or production resource.

## Definition of done

The design is sufficient for implementation, testing, security review, deployment,
and operation, and is linked to the feature and traceability records.
