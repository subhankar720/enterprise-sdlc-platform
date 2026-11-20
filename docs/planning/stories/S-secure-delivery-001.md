# S-secure-delivery-001

## Story

Enforce ownership and protected-branch review policy.

## Feature

[F-secure-delivery-001](../features/F-secure-delivery-001.md)

## Acceptance criteria

- Given a changed owned path, When the PR is opened, Then required owners are
  requested and merge is blocked until required review is recorded.
- Given required CI is pending or failed, When merge is attempted, Then the
  protected branch refuses the merge.
- Given a policy cannot be enabled in the available organization plan, When
  governance is documented, Then it is marked as a gap with an owner.
- Given an expired exception, When governance audit runs, Then it is flagged and
  cannot satisfy approval requirements.

## Dependencies

Team ownership and GitHub organization access.

## Test evidence

Branch protection configuration review and test PR on a non-production branch.
