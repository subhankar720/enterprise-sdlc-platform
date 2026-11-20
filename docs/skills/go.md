# Go — Domain Skill

> **Activation trigger.** Load this skill for `*.go`, `go.mod`, `go.sum`,
> `go.work`, or Go applications and libraries.

## Required context

Read the module's `go.mod`, root `go.work`, Go toolchain pin, project descriptor,
and package consumers. The root workspace currently references paths with no Go
modules, so do not run workspace sync yet.

## Checklist

- [ ] Register every module in `go.work`.
- [ ] Keep module boundaries explicit.
- [ ] Add `project.json` for every governed project.
- [ ] Use `go test`, `go vet`, and repository-approved lint tooling.
- [ ] Return context and meaningful errors.
- [ ] Add HTTP, authentication, metrics, and tracing conventions only through shared packages.

## Canonical commands

Run from the module directory after it has a `go.mod` and is listed in `go.work`:

```bash
go work sync
go test ./...
go vet ./...
```

The commands have not been run against a repository Go module because none exists.

## Required artifacts

- Go module with explicit module path and version policy
- Root workspace membership
- `project.json` with build, test, and lint targets
- Unit/contract tests and module checksum updates

## Quality gates

- Go formatting pass
- Tests and vet pass
- Workspace and module sums are reproducible
- No circular module dependencies
- Container or binary build passes

## Anti-patterns

- Adding a module without updating and validating `go.work`
- Running tests from an unrelated module directory
- Ignoring context cancellation or returning unqualified errors

## Stop conditions

Stop if module ownership/path, public API compatibility, Go version, or required
external dependency is unclear.

## Definition of done

The module is in Go and Nx workspaces, `go test` and `go vet` pass, dependency
checksums are consistent, and consumers have contract coverage.
