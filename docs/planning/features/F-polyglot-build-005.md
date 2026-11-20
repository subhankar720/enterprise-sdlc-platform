# F-polyglot-build-005

## Feature

Unified project commands and application scopes

## Epic

[EPIC-polyglot-build](../epics/EPIC-polyglot-build.md)

## Outcome

Contributors use one local command interface to build and test projects and run
declared applications across supported languages, while Nx orchestrates and
language-native tools execute the work.

## Scope

The provisional `strato obt` command surface, metadata-based project identity
resolution, module-scoped HCL `.runconf` files, application selection through
`--app`, and declarations of platform-owned opt-in profiles such as
`DockerEnabled`. Full descriptor compatibility policy and profile execution
remain open.

## Dependencies

F-polyglot-build-001 and F-polyglot-build-002; project descriptor contract.

## Acceptance criteria

- Given a registered project, When build or test is requested through the
  platform CLI, Then its configured Nx target runs with the native tool and
  reports the result.
- Given a module with one declared application, When run is requested using
  the module identity, Then that application is selected.
- Given a module with multiple declared applications, When run is requested
  without an application selection, Then the command reports the ambiguity
  instead of choosing one silently.
- Given a module `.runconf`, When its HCL or application declaration is
  invalid, Then validation reports the file and actionable error.
- Given an application declaring profiles, When `.runconf` is parsed, Then the
  profile names are preserved for platform-owned workflows; profile execution
  is handled by the runtime-platform work.
- Given a non-JVM application, When its run configuration is validated, Then
  JVM-only settings such as `mainClass` are not required.

## Story

[S-polyglot-build-005](../stories/S-polyglot-build-005.md)
