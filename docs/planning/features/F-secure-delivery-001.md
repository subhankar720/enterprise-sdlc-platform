# F-secure-delivery-001

## Feature

GitHub repository governance

## Epic

[EPIC-secure-delivery](../epics/EPIC-secure-delivery.md)

## Outcome

Repository changes receive accountable review and cannot merge without required
checks and branch protections.

## Scope

CODEOWNERS, protected branches, PR templates, required reviews, signed commits
policy, merge queue decision, and dependency update automation.

## Dependencies

Organization, team ownership, and GitHub feature availability decisions.

## Acceptance criteria

- Given a changed owned path, When a PR is opened, Then the owning team is
  requested for review.
- Given a PR without required approvals or status checks, When merge is attempted,
  Then the protected branch rejects it.
- Given a repository policy unavailable in the selected GitHub plan, When setup is
  reviewed, Then the limitation and compensating control are documented.
- Given a repository security exception, When it is active, Then an owner and
  expiry date are recorded.

## Story

[S-secure-delivery-001](../stories/S-secure-delivery-001.md)
