# F-secure-delivery-004

## Feature

Workload identity and artifact integrity

## Epic

[EPIC-secure-delivery](../epics/EPIC-secure-delivery.md)

## Outcome

Workflows authenticate without long-lived cloud keys and produce verifiable,
immutable build provenance.

## Scope

OIDC trust configuration, minimum permissions, artifact provenance, image
signing, digest tracking, and signature verification.

## Dependencies

Cloud provider, registry, identity, and signing decisions in assumptions.

## Acceptance criteria

- Given a CI job requiring cloud access, When it authenticates, Then it uses a
  scoped short-lived identity and no static credential.
- Given an artifact promoted to an environment, When its provenance is checked,
  Then source revision, workflow identity, and digest are verifiable.
- Given an unsigned or mismatched artifact, When promotion validation runs,
  Then deployment is blocked.
- Given a workflow permission is not required, When its permissions are reviewed,
  Then it is absent or read-only.

## Story

[S-secure-delivery-004](../stories/S-secure-delivery-004.md)
