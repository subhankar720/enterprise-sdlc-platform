# S-runtime-platform-002

## Story

Provision an approved non-production runtime declaratively.

## Feature

[F-runtime-platform-002](../features/F-runtime-platform-002.md)

## Acceptance criteria

- Given approved provider inputs, When a plan is generated, Then resources,
  changes, and policy results are reviewable before apply.
- Given a workload identity, When permissions are evaluated, Then access is
  limited to the required non-production resources.
- Given concurrent state operations, When both attempt a mutation, Then locking
  prevents conflicting writes.
- Given provider approval is absent, When provisioning is invoked, Then it fails
  before creating resources.

## Dependencies

Cloud/provider and account decisions; infrastructure ownership.

## Test evidence

Plan validation, policy tests, and state-lock behavior in a non-production context.
