# S-polyglot-build-005

## Story

As a project contributor, I can build, test, and run module applications through
one local platform command interface without needing to memorize each
language's invocation.

## Feature

[F-polyglot-build-005](../features/F-polyglot-build-005.md)

## Acceptance criteria

- Given a project identity, When I invoke the platform build or test command,
  Then the corresponding Nx target invokes the configured native tool.
- Given a module with one application, When I run that module, Then its sole
  application is selected.
- Given a module with multiple applications, When I run it, Then I must select
  the intended application explicitly.
- Given an application, When its `.runconf` is loaded, Then its declared Nx
  target is the target selected for execution.
- Given an application configuration, When I declare a JVM entrypoint or
  platform-owned container profile, Then the configuration is validated
  without requiring project-owned Dockerfiles.

## Dependencies

Cross-language project graph, native language targets, and the project
descriptor contract.

## Test evidence

The seven OBT unit tests pass. The local CLI built and tested
`example/fastapi-service`, then ran its single `healthApi` application; the
service returned HTTP 200 from `/healthz`. The project metadata contract's seven
tests, Ruff, and mypy also pass.
