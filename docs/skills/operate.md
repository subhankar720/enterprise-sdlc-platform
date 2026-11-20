# Operate — SDLC Phase Skill

> **Activation trigger.** Load this skill for SLOs, dashboards, alerts, runbooks,
> incidents, on-call operations, or work under `observability/`.

## Required context

Read the service's ownership, SLO and error budget, dependency map, incident
severity policy, on-call coverage, runbooks, and recovery objectives. Do not
assume an on-call organization exists for the personal prototype.

## Checklist

- [ ] Define service ownership and dependencies.
- [ ] Define SLOs and measurable SLIs.
- [ ] Configure error-budget review.
- [ ] Build golden-signal dashboards.
- [ ] Route actionable alerts to accountable owners.
- [ ] Record operational runbooks and rollback procedures.
- [ ] Link incidents to postmortems and follow-up work.
- [ ] Feed reliability findings back into planning and test strategy.

## Quality gates

- Critical alerts are actionable
- Runbook contains detection, mitigation, escalation, and rollback
- Service telemetry has stable correlation identifiers
- SLO and availability data are queryable
- Incident follow-ups have owners and due dates

## Commands

Operational commands are service- and environment-specific. Run only documented,
least-privilege commands against an approved target; this local-only prototype
has no production operations target.

## Required artifacts

- Service ownership and escalation contact
- SLO dashboard and alert route
- Runbook with detection, mitigation, recovery, and escalation
- Incident/postmortem record and assigned follow-up

## Anti-patterns

- Alerting without an action or owner
- Defining SLOs without reliable telemetry
- Treating logs as a substitute for traces or metrics
- Closing incidents without postmortem follow-up
- Ignoring error-budget evidence

## Stop conditions

Stop if an action could affect production or data and the target, authority,
impact, or rollback is unclear. Escalate when no accountable owner is available.

## Definition of done

The service can be detected, diagnosed, mitigated, and recovered using reviewed
procedures, with incident learning linked to owned work.
