# S-polyglot-build-001

## Story

Represent governed projects and dependencies in the Nx graph.

## Feature

[F-polyglot-build-001](../features/F-polyglot-build-001.md)

## Acceptance criteria

- Given each initialized project, When the graph is generated, Then the project
  is present once with project type, language, and ownership tags.
- Given an explicit or inferred dependency, When graph details are queried, Then
  the edge points from consumer to dependency.
- Given a cycle, When graph validation runs, Then it fails and prints a cycle path.
- Given a cross-language schema consumer, When its schema project changes, Then a
  dependency edge makes the consumer transitively affected.

## Dependencies

Foundation workspace and project descriptors.

## Test evidence

The local Python proof registers
`example-service -> example-shared -> project-contract`. Changing the platform
contract selects all three test targets; the local PR report records results,
skips, and per-project logs.

Cross-language edges, cycle detection, and global-file impact rules remain
unvalidated. This is prototype evidence, not completion of the full story.
