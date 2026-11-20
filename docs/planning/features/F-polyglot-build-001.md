# F-polyglot-build-001

## Feature

Cross-language project graph

## Epic

[EPIC-polyglot-build](../epics/EPIC-polyglot-build.md)

## Outcome

Nx models project ownership and direct/transitive dependencies across the
initialized workspaces.

## Scope

Project descriptors, dependency inference or explicit edges, graph validation,
and cross-language contract edges.

## Dependencies

Foundation features 001 and 002.

## Acceptance criteria

- Given all governed projects, When Nx graph is generated, Then every project is
  present once with stable tags.
- Given a declared local dependency, When the graph is generated, Then the
  consumer-to-dependency edge is present.
- Given a circular dependency, When graph validation runs, Then it fails with
  the cycle path.
- Given an undeclared cross-language contract dependency, When graph review runs,
  Then the project is not considered ready for affected CI.

## Story

[S-polyglot-build-001](../stories/S-polyglot-build-001.md)
