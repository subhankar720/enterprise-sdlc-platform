# S-monorepo-foundation-004

## Story

Make lifecycle and domain skills consistent with the charter.

## Feature

[F-monorepo-foundation-004](../features/F-monorepo-foundation-004.md)

## Acceptance criteria

- Given every skill in the catalog, When its required sections are checked, Then
  trigger, checklist, commands or explicit not-applicable note, artifacts, gates,
  anti-patterns, and completion conditions are present.
- Given a skill path mapping, When each linked file is validated, Then it exists.
- Given repository implementation differs from documented guidance, When the
  discrepancy is found, Then it has an issue or ADR rather than silent drift.
- Given a skill command, When it is described as canonical, Then the supported
  toolchain and execution context are stated.
- Given a conflict between a skill and the standard charter, When the conflict
  is reviewed, Then the skill must not silently override the charter.

## Dependencies

Charter and planning templates.

## Out of scope

Claiming unimplemented cloud or CI controls are already active.

## Test evidence

Skill catalog link check and required-section audit.
