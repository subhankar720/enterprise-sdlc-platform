# Security — Domain Skill

> **Activation trigger.** Load this skill for `security/`, authentication,
> authorization, secrets, threat modeling, policies, dependencies, or container use.

## Required context

Read the data classification, trust boundaries, threat model, required
compliance scope, dependency inventory, owner, and exception policy. The
prototype has no compliance framework selected; do not claim certification.

## Checklist

- [ ] Perform threat modeling for sensitive or externally reachable systems.
- [ ] Apply least-privilege identities and network boundaries.
- [ ] Use external secret providers and OIDC.
- [ ] Scan source, dependencies, containers, and infrastructure.
- [ ] Enforce policy as code where supported.
- [ ] Define remediation, exception, and compensating-control ownership.
- [ ] Verify audit evidence and access logging.

## Quality gates

- No secrets in source or test fixtures
- No unapproved critical or high vulnerability
- Container and infrastructure findings are addressed or approved
- Policy tests pass
- Security-sensitive behavior has negative-path tests

## Commands

Use scanners and policy tools pinned by the repository once selected. The
prototype's scanner suite is not installed/configured yet; do not report a scan
as clean when it has not run.

## Required artifacts

- Threat model for sensitive or exposed components
- Scan and policy reports
- Access/identity rationale
- Approved exception with owner, expiry, compensating controls, and remediation

## Exception rules

Every exception must include risk, scope, owner, expiry, compensating controls,
remediation plan, and approval evidence.

## Anti-patterns

- Treating an unrun scan as a pass
- Logging credentials or sensitive payloads
- Granting broad permissions for convenience
- Permanent exceptions without expiry or remediation

## Stop conditions

Stop when the trust boundary, required privilege, secret source, threat model,
or compliance requirement is unknown.

## Definition of done

Threats and controls are reviewed, required scans and negative-path tests pass,
exceptions are approved and time-bound, and findings are traceable.
