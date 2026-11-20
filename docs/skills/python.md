# Python — Domain Skill

> **Activation trigger.** Load this skill for `*.py`, `pyproject.toml`, `uv.lock`,
> pytest, Ruff, mypy, or Python projects.

## Checklist

- [ ] Use the root uv workspace and workspace sources.
- [ ] Pin external dependencies through the lockfile.
- [ ] Follow the repository Python floor (`>=3.11`) unless an ADR changes it.
- [ ] Place package code under the project source layout.
- [ ] Use pytest, Ruff, and mypy.
- [ ] Add `project.json` for every governed project.
- [ ] Use typed public functions and explicit models.
- [ ] Document generated or external schema dependencies.
- [ ] Declare project test, lint, and typecheck dependencies in a documented
  dependency group; do not rely on globally installed tools.
- [ ] Ensure workspace member globs match the actual project paths.

## Required context

Before editing, inspect the root and member `pyproject.toml` files, the uv lock
state, Python version constraints, project descriptor, and nearest existing
Python tests. The initial member is `apps/backend/fastapi-service`; other planned
members must match the root workspace globs.

## Commands

The initial member declares Ruff, mypy, and pytest in its development group, and
the current lockfile is validated. Replace `<member>` and `<project-path>` with
the package name and path from the target member's `[project]` table.

```powershell
uv workspace list
uv sync --all-packages --locked
uv run --package <member> ruff check <project-path>
uv run --package <member> mypy <project-path>
uv run --package <member> pytest <project-path>\tests -ra --strict-markers
```

Do not invoke Ruff, mypy, or pytest directly from `PATH`; use `uv run --package`
so the member's declared development tools are selected. See
[toolchain readiness](toolchain-readiness.md).

## Required artifacts

- Member `pyproject.toml` with package metadata and declared development tools
- Lockfile update reviewed with the dependency change
- `project.json` with build, test, lint, and typecheck targets as applicable
- Tests and any generated schema source or regeneration instructions

## Quality gates

- Ruff, mypy, and pytest pass in the selected member environment
- `uv sync --all-packages --locked` succeeds after the lockfile exists
- Workspace dependencies resolve locally
- Cross-language contract tests pass

## Stop conditions

Stop if a workspace member cannot be resolved, dependency versions are
uncontrolled, the required Python version is unavailable, or test/lint tools are
not declared. Do not silently fall back to global packages or install arbitrary
versions.

## Definition of done

The member is in the uv and Nx workspaces, lock resolution is reproducible,
focused tests and quality checks pass, and the feature/story traceability is
updated.

## Anti-patterns

- Installing dependencies with ad hoc pip state
- Hardcoding workspace package versions
- Untyped public functions
- Committing virtual environments or caches
- A project absent from the Nx graph
