# F-secure-delivery-003

## Feature

Security and dependency controls

## Epic

[EPIC-secure-delivery](../epics/EPIC-secure-delivery.md)

## Outcome

Source, dependency, license, container, and infrastructure risks are detected
before merge or promotion.

## Scope

Secret scan, SAST, SCA, license policy, container scan, IaC/Kubernetes policy
checks, vulnerability SLAs, and exception records.

## Dependencies

F-secure-delivery-002; security tooling and compliance choices.

## Acceptance criteria

- Given a committed test secret, When PR scanning runs, Then the finding blocks
  merge and provides remediation guidance without echoing the secret.
- Given a critical or high vulnerability, When policy evaluates it, Then the
  required SLA or approved exception is enforced.
- Given an unapproved license or infrastructure policy violation, When CI runs,
  Then it fails with the affected dependency or resource identified.
- Given an exception, When its expiry passes, Then it is reported as expired and
  no longer treated as an active approval.

## Story

[S-secure-delivery-003](../stories/S-secure-delivery-003.md)
