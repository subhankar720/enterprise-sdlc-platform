# S-secure-delivery-003

## Story

Block unapproved security and dependency findings.

## Feature

[F-secure-delivery-003](../features/F-secure-delivery-003.md)

## Acceptance criteria

- Given a known secret test fixture, When secret scanning runs, Then the gate
  fails without printing the secret value.
- Given a critical finding, When it is not remediated within policy or covered
  by an active approved exception, Then merge or promotion is blocked.
- Given an infrastructure or license policy violation, When validation runs,
  Then the finding identifies the resource or package and policy.
- Given an exception expiry date has passed, When the next scan runs, Then the
  exception is not accepted.

## Dependencies

Security scanner selection, policy owner, and F-secure-delivery-002.

## Test evidence

Safe synthetic fixtures and policy tests; never use real credentials.
