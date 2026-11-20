# Java — Domain Skill

> **Activation trigger.** Load this skill for `*.java`, `*.kt`, `build.gradle`,
> `build.gradle.kts`, Gradle settings, or `gradle/libs.versions.toml`.

## Required context

Read the approved story, Gradle wrapper and JVM versions, root settings,
`gradle/libs.versions.toml`, project dependencies, and affected Java contracts.
The repository currently has no Gradle settings, wrapper, or version catalog.

## Checklist

- [ ] Use Gradle composite or multi-project configuration.
- [ ] Put dependency versions only in `gradle/libs.versions.toml`.
- [ ] Use project references for local libraries.
- [ ] Keep Spring configuration separated from business logic.
- [ ] Add `project.json` for every governed project.
- [ ] Configure unit, integration, and contract test tasks.
- [ ] Expose health, metrics, and trace context.
- [ ] Produce immutable container artifacts.

## Commands

No repository-pinned Gradle wrapper exists yet. The available Gradle 8.5
reported JVM 16, and this invocation did not exit cleanly; do not treat it as a
validated build toolchain. Once the wrapper and Java toolchain are approved, use
the wrapper (for example `./gradlew test` and `./gradlew check`) rather than a
machine-global Gradle.

## Required artifacts

- Gradle settings and centralized version catalog
- Project descriptor and native build/test targets
- Focused tests, API/schema contracts, and migration artifacts where applicable
- Container and runtime metadata for deployable services

## Quality gates

- Gradle build and tests pass
- Version catalog lint passes
- Static analysis passes
- Contract tests pass
- Container and dependency scanning pass

## Stop conditions

Stop if the JVM/Gradle versions, dependency source, module ownership, or
backward-compatibility policy is unresolved.

## Anti-patterns

- Hardcoded dependency versions in build files
- Publishing workspace project dependencies without release replacement
- Mixing migration logic with application startup
- Direct cross-team imports instead of shared contracts

## Definition of done

The project is registered in Gradle and Nx, dependency versions are governed,
tests and static checks pass using the wrapper, and public contracts and
operational behavior are documented.
