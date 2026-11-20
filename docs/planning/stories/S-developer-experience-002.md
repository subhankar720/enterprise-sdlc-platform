# S-developer-experience-002

## Story

Generate a governed sample service from a golden path.

## Feature

[F-developer-experience-002](../features/F-developer-experience-002.md)

## Acceptance criteria

- Given valid service inputs, When the template runs, Then it creates a project
  descriptor, owner metadata, tests, security defaults, and documentation.
- Given generated output, When its Nx build, lint, test, and typecheck run, Then
  all supported targets pass.
- Given missing owner or invalid project identifier, When generation runs, Then
  it fails before leaving a partial project.
- Given generated source, When secrets are scanned, Then no secret value or
  credential placeholder that resembles a usable secret is present.

## Dependencies

Project graph, language target conventions, secure CI baseline, approved template
language, and runtime interfaces for deployable templates.

## Test evidence

Template integration tests generating and validating a clean sample project.
