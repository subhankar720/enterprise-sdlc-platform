# F-polyglot-build-004

## Feature

Graph audit and onboarding

## Epic

[EPIC-polyglot-build](../epics/EPIC-polyglot-build.md)

## Outcome

Project registration, dependency edge quality, and affected behavior are
continuously auditable and understandable by new contributors.

## Scope

Graph audit, diagnostics, new-project checklist, troubleshooting runbook, and
scheduled completeness check.

## Dependencies

F-polyglot-build-001 through 003.

## Acceptance criteria

- Given an unregistered governed project, When the graph audit runs, Then it
  fails and reports the missing project path.
- Given a monthly audit, When it runs, Then missing projects, cycles, and stale
  configuration are reported as actionable findings.
- Given a documented onboarding flow, When a project is added, Then its owner,
  tags, targets, dependencies, and validation are specified.
- Given an affected result that seems incorrect, When the runbook is followed,
  Then the contributor can inspect base revision, project mapping, graph edges,
  and global inputs.

## Story

[S-polyglot-build-004](../stories/S-polyglot-build-004.md)
