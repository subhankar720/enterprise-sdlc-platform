# F-runtime-platform-003

## Feature

GitOps environment reconciliation

## Epic

[EPIC-runtime-platform](../epics/EPIC-runtime-platform.md)

## Outcome

Non-production Kubernetes state is reconciled from reviewed version control
declarations with clear environment ownership.

## Scope

Argo CD bootstrap, app-of-apps or equivalent composition, environment overlays,
RBAC, drift visibility, and promotion PR workflow.

## Dependencies

F-runtime-platform-002, F-runtime-platform-001, and GitOps product decision.

## Acceptance criteria

- Given a reviewed desired-state change, When reconciliation runs, Then cluster
  state converges to the declared state.
- Given an out-of-band change, When drift detection runs, Then it is visible and
  remediation follows the approved policy.
- Given a production target, When reconciliation is requested, Then required
  approvals and protected environment controls are enforced.
- Given a deployment manifest contains a plaintext secret, When policy validation
  runs, Then it blocks reconciliation.

## Story

[S-runtime-platform-003](../stories/S-runtime-platform-003.md)
