# Test — SDLC Phase Skill

> **Activation trigger.** Load this skill for test implementation, test
> architecture, quality gates, release confidence, or work under `tests/`.

## Required context

Read the story's acceptance criteria, project test configuration, relevant
language skill, test data classification, and current flake history before
choosing a test layer.

## Test strategy

Use the smallest test layer that proves the requirement:

1. Unit tests for isolated logic
2. Integration tests for infrastructure boundaries
3. Contract tests for service or package compatibility
4. End-to-end tests for critical user journeys
5. Performance tests for capacity requirements
6. Security tests for abuse and authorization behavior
7. Infrastructure policy tests for configuration
8. Chaos tests for explicitly modeled recovery assumptions

## Checklist

- [ ] Map each acceptance criterion to a test.
- [ ] Include positive, negative, and boundary cases.
- [ ] Use deterministic fixtures and hermetic infrastructure.
- [ ] Add contract tests for cross-service or cross-language boundaries.
- [ ] Verify migrations and rollback behavior when data changes.
- [ ] Prevent flaky tests from being disabled without an owner and expiry.
- [ ] Capture evidence in CI and the traceability matrix.

## Commands

Run the project-pinned native test target through Nx after the local Nx install
and project descriptor exist. Until then, use the native tool declared by the
member project and state that Nx integration is not yet validated. Do not use a
globally installed test runner as repository evidence.

## Required artifacts

- Tests mapped to acceptance criteria
- Deterministic fixtures and required service stubs
- Reproduction instructions for failures
- Test report or traceability evidence

## Quality gates

- Required unit and integration tests pass
- Contract compatibility passes
- Coverage threshold passes only when meaningful behavior is covered
- Performance threshold passes for affected critical flows
- Security test gate passes
- No new known flaky test introduced

## Anti-patterns

- Reaching only for E2E tests
- Testing implementation constants instead of behavior
- Retrying a failing test until it passes
- Committing real credentials or customer data
- Disabling a gate instead of fixing or documenting a root cause

## Stop conditions

Stop if acceptance criteria are not testable, fixtures would expose sensitive
data, a required environment is unapproved, or a test is nondeterministic without
an understood cause.

## Definition of done

Acceptance criteria have automated evidence, failures are actionable, test scope
maps to the project graph, and evidence is linked to the story and release.
