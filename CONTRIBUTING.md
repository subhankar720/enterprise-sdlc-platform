# Contributing

## Before changing code

1. Read the [standard charter](docs/standard-charter.md).
2. Identify the affected epic, feature, and story.
3. Load the applicable lifecycle and domain skills.
4. Inspect existing conventions and adjacent implementations.
5. Make the smallest coherent change that satisfies the acceptance criteria.

## Required pull request contents

- Link to the epic, feature, and story.
- Summarize the affected projects.
- Identify behavioral and architecture changes.
- Record test commands and results.
- Document security, observability, migration, and rollback impact.
- Include an ADR when the change introduces or reverses a durable decision.

## Quality gates

Changes must pass applicable gates for:

- Formatting and linting
- Unit and integration tests
- Contract tests
- Type or static analysis
- Secret and dependency scanning
- License and policy checks
- Container scanning and signing
- Infrastructure policy validation
- Affected-project graph validation
- Required approvals and signed commits

## Project requirements

Every project intended to participate in the Nx graph must have a `project.json`
and explicit build, test, lint, and typecheck targets where applicable. Projects
without these descriptors are not part of the governed build graph.

Dependency versions must be centralized per ecosystem:

- Gradle: `gradle/libs.versions.toml`
- pnpm: root workspace and lockfile
- Python: `pyproject.toml` and `uv.lock`
- Go: `go.work`
- Rust: root Cargo workspace and `Cargo.lock`

## Traceability

Update [docs/planning/traceability.md](docs/planning/traceability.md) for:

- New or changed requirements
- ADRs
- Implemented stories
- Test evidence
- Releases
- Operational incidents that reveal missing requirements
