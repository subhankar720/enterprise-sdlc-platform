# Observability — Domain Skill

> **Activation trigger.** Load this skill for metrics, logs, traces, dashboards,
> alerts, SLOs, OpenTelemetry, or work under `observability/`.

## Required context

Read service ownership, user-impacting journeys, dependency map, data sensitivity,
SLO candidates, retention rules, and the selected telemetry backend. Backend and
retention choices remain open for this prototype.

## Checklist

- [ ] Use structured logs and stable correlation identifiers.
- [ ] Expose RED or appropriate workload metrics.
- [ ] Trace critical synchronous and asynchronous flows.
- [ ] Define SLI, SLO, and error budget.
- [ ] Add actionable alerts and route to owners.
- [ ] Create runbooks and rollback indicators.
- [ ] Avoid high-cardinality labels and sensitive telemetry values.

## Quality gates

- Telemetry is available in the delivery environment
- Dashboards map to service health
- Alerts have a defined response
- Critical dependencies are visible
- Release has a health validation mechanism

## Commands

Backend query and configuration commands depend on the approved observability
stack. Validate configuration with pinned tooling when selected; do not treat
example dashboards or unqueried SLOs as operational evidence.

## Required artifacts

- Instrumentation and data-handling notes
- Dashboard and SLI query
- Alert rule with owner and runbook
- Retention and privacy decisions

## Anti-patterns

- Logging secrets or regulated data
- Building dashboards without an SLO
- Alerting on every possible symptom
- Trace context that does not propagate through boundaries

## Stop conditions

Stop if telemetry would expose sensitive data, no service owner exists, the
signal has no defined response, or the backend/retention policy is unknown.

## Definition of done

Signals are queried in the target environment, dashboards and alerts have owners,
privacy checks pass, and SLO evidence is traceable.
