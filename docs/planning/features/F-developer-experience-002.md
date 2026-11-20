# F-developer-experience-002

## Feature

Golden-path service templates

## Epic

[EPIC-developer-experience](../epics/EPIC-developer-experience.md)

## Outcome

Teams can scaffold supported services with approved build, test, security,
ownership, container, deployment, and observability defaults.

## Scope

Templates for selected languages and libraries, generator validation, project
registration, documentation, catalog metadata, and safe customization boundaries.

## Dependencies

F-polyglot-build-001/002, F-secure-delivery-002/003, catalog schema, and runtime
interfaces for deployable templates.

## Acceptance criteria

- Given a supported template and valid inputs, When generation runs, Then the
  result builds, tests, lints, and appears in Nx.
- Given a generated project, When security and ownership defaults are inspected,
  Then required metadata and controls are present without embedded secrets.
- Given invalid or missing template input, When generation runs, Then it fails
  with field-specific guidance and creates no success-shaped partial project.
- Given a template change, When its integration fixture runs, Then a generated
  sample passes the documented validation targets.

## Story

[S-developer-experience-002](../stories/S-developer-experience-002.md)
