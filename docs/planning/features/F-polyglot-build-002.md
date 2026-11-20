# F-polyglot-build-002

## Feature

Native language targets

## Epic

[EPIC-polyglot-build](../epics/EPIC-polyglot-build.md)

## Outcome

Nx delegates each project's build, test, lint, and applicable typecheck to its
native ecosystem tooling.

## Scope

Target conventions and validated executors or command targets for Gradle, pnpm,
uv/Python, Go, and Cargo.

## Dependencies

F-polyglot-build-001; installed and supported language toolchains.

## Acceptance criteria

- Given a governed project, When its applicable Nx targets run, Then native tool
  output and exit status are surfaced without silent fallback.
- Given a missing toolchain, When a target is run, Then it fails with an explicit
  prerequisite message.
- Given deterministic build or test targets, When identical inputs are supplied,
  Then declared outputs are reproducible and cacheable.
- Given a publish or deploy action, When targets are defined, Then the action is
  not treated as a cacheable build.

## Story

[S-polyglot-build-002](../stories/S-polyglot-build-002.md)
