# Develop — SDLC Phase Skill

> **Activation trigger.** Load this skill when implementing application code,
> shared libraries, repository automation, tests, or executable configuration.

## Required context

Read the approved story, relevant ADRs, project descriptor, native workspace
manifest, toolchain readiness, and adjacent implementations before editing.

## Checklist

- [ ] Read the approved story and matching design artifacts.
- [ ] Activate the relevant language and infrastructure skills.
- [ ] Inspect adjacent implementations and repository conventions.
- [ ] Preserve project boundaries and module ownership.
- [ ] Implement the narrowest complete behavior.
- [ ] Add or update focused tests.
- [ ] Update public contracts and directly related documentation.
- [ ] Keep changes reversible and avoid hidden side effects.
- [ ] Update traceability for implementation and test evidence.

## Canonical requirements

- Do not hardcode dependency versions where centralized governance is required.
- Do not add a project that cannot participate in the Nx graph.
- Do not commit secrets or credentials.
- Do not bypass native language formatters or linters.
- Do not change deployment behavior without the deploy skill.
- Do not add broad generated files without defining regeneration and validation.

## Quality gates

- Format and lint pass
- Relevant unit and integration tests pass
- Static and type analysis pass
- No new unresolved secret or dependency finding
- Nx project graph remains valid
- Change has no unrelated file churn

## Required artifacts

- Focused source and test changes
- Updated project metadata and dependency lock when needed
- Traceability evidence and directly related documentation
- Migration, security, and operational notes when affected

## Commands

Use the language skill's repository-pinned commands and the Nx skill's commands
only when a local Nx installation and project descriptor exist. The current
repository has no project descriptors; do not claim a target passed until it
exists and has been run.

## Anti-patterns

- Implementing unapproved scope
- Adding dependencies without lockfile and license review
- Using machine-global tools instead of repository-pinned tools as validation
- Hiding a failing command or returning success-shaped fallbacks

## Definition of done

Acceptance criteria pass, changes use repository-pinned conventions, relevant
validation evidence is recorded, documentation and traceability are updated, and
remaining blockers are explicit.

## Stop conditions

Stop and escalate if:

- Acceptance criteria conflict or are ambiguous
- Required external credentials or services are unavailable
- Existing behavior is not understood or has no relevant tests
- A change crosses an ownership boundary without approval
- A dependency or platform version is not declared by repository policy
