# F-developer-experience-003

## Feature

Local development environments and onboarding

## Epic

[EPIC-developer-experience](../epics/EPIC-developer-experience.md)

## Outcome

Contributors can reproduce a supported local environment and follow a tested
onboarding path without undocumented machine state.

## Scope

Dev Containers or equivalent, bootstrap checks, tool version policy, pre-commit
checks, onboarding guide, and environment troubleshooting.

## Dependencies

Approved tool versions and local environment platform decision.

## Acceptance criteria

- Given supported host prerequisites, When a contributor follows onboarding,
  Then required tools and versions are verified before project commands run.
- Given a missing tool, When bootstrap checks run, Then the message identifies
  installation source and supported version.
- Given local setup, When standard validation commands run, Then they match CI
  behavior for the selected project.
- Given a secret is absent locally, When setup runs, Then it does not fabricate
  a credential or silently disable required validation.

## Story

[S-developer-experience-003](../stories/S-developer-experience-003.md)
