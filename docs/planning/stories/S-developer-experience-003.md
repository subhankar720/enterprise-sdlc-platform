# S-developer-experience-003

## Story

Provide a reproducible local developer setup.

## Feature

[F-developer-experience-003](../features/F-developer-experience-003.md)

## Acceptance criteria

- Given the supported host and declared tool versions, When setup is followed,
  Then bootstrap and local validation complete without undocumented state.
- Given a missing required executable, When the preflight runs, Then it names
  the tool, supported version, and setup instruction.
- Given a local quality command, When it is run, Then its checks align with the
  equivalent CI target.
- Given unavailable credentials, When local setup runs, Then it never generates
  a fake credential or claims an authenticated integration works.

## Dependencies

Toolchain version decisions and selected environment approach.

## Test evidence

Clean environment setup and preflight tests for missing and supported tools.
