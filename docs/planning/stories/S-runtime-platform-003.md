# S-runtime-platform-003

## Story

Reconcile a non-production service through GitOps.

## Feature

[F-runtime-platform-003](../features/F-runtime-platform-003.md)

## Acceptance criteria

- Given an approved GitOps change, When reconciliation runs, Then the target
  environment reports the desired revision and health.
- Given out-of-band drift, When the reconciler detects it, Then the drift is
  surfaced and the configured remediation behavior is auditable.
- Given a plaintext secret manifest, When policy runs, Then the deployment is
  rejected and the secret is not applied.
- Given a production destination, When a change is proposed, Then protected
  approval is required before reconciliation.

## Dependencies

F-runtime-platform-001, F-runtime-platform-002, and GitOps selection.

## Test evidence

Reconciliation test, drift test, policy rejection, and protected environment review.
