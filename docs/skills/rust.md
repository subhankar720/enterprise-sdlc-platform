# Rust — Domain Skill

> **Activation trigger.** Load this skill for `*.rs`, `Cargo.toml`, `Cargo.lock`,
> or Rust applications and libraries.

## Required context

Read the root Cargo workspace, `rust-toolchain.toml` if present, crate metadata,
lockfile policy, target platform, and consuming projects. Rust tooling is not
currently available on PATH.

## Checklist

- [ ] Use the repository Cargo workspace.
- [ ] Centralize toolchain and workspace lint policy.
- [ ] Add `project.json` for every governed project.
- [ ] Use cargo fmt, clippy, test, and build.
- [ ] Prefer workspace crates for local reuse.
- [ ] Add source and binary ownership metadata.

## Canonical commands

These commands are blocked until Rust/Cargo is installed and the workspace exists:

```bash
cargo fmt --all --check
cargo clippy --workspace --all-targets -- -D warnings
cargo test --workspace
cargo build --workspace
```

Do not treat examples as executed validation until the toolchain is installed.

## Required artifacts

- Root Cargo workspace and lockfile policy
- Toolchain pin and workspace lint policy
- `project.json` per governed crate
- Unit, integration, and cross-language contract tests

## Quality gates

- Formatting and clippy pass
- Tests pass
- Lockfile is reproducible
- No unexpected dependency or license finding
- Nx project graph reflects workspace ownership

## Anti-patterns

- Adding crates outside the root workspace without an explicit decision
- Suppressing Clippy warnings without rationale
- Treating an unavailable Rust command as a passing check

## Stop conditions

Stop if the Rust toolchain, supported targets, crate ownership, or dependency
license policy is unknown.

## Definition of done

All intended crates are registered, formatting/lint/tests/build pass with the
pinned toolchain, and Nx reflects workspace dependencies.
