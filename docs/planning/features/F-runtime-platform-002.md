# F-runtime-platform-002

## Feature

Infrastructure and cluster foundation

## Epic

[EPIC-runtime-platform](../epics/EPIC-runtime-platform.md)

## Outcome

Approved environments are provisioned declaratively with policy, identity,
networking, ownership, and recovery controls.

## Scope

Terraform modules and environment composition, Kubernetes baseline, namespaces,
RBAC, network policy, state controls, and provider-specific bootstrap.

## Dependencies

Cloud/provider, account topology, network, and cluster ownership decisions.

## Acceptance criteria

- Given an approved environment configuration, When plan and policy validation
  run, Then proposed resources and violations are visible before apply.
- Given a workload identity, When access is checked, Then it is least-privileged
  and restricted to its environment and purpose.
- Given state access, When concurrent changes are attempted, Then state locking
  prevents unsafe simultaneous mutation.
- Given no provider decision or approval exists, When provisioning is attempted,
  Then no cloud resource is created.

## Story

[S-runtime-platform-002](../stories/S-runtime-platform-002.md)
