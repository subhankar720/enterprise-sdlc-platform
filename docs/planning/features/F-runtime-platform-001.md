# F-runtime-platform-001

## Feature

Container and artifact baseline

## Epic

[EPIC-runtime-platform](../epics/EPIC-runtime-platform.md)

## Outcome

Applications produce minimal, reproducible, scanned, signed images identified by
immutable digests.

## Scope

Multi-stage Dockerfiles, base image policy, non-root runtime, scanning, signing,
provenance, registry interfaces, and promotion by digest.

## Dependencies

F-secure-delivery-003 and F-secure-delivery-004; registry decision.

## Acceptance criteria

- Given a deployable project, When its image is built, Then it uses a reviewed
  base image, non-root runtime, and immutable digest.
- Given a vulnerable image above policy, When the scan runs, Then it blocks
  promotion unless an active exception is approved.
- Given an image is promoted, When its digest and signature are verified, Then
  they match the build provenance.
- Given a Docker build requires a secret, When the image is inspected, Then the
  secret is absent from layers and build metadata.

## Story

[S-runtime-platform-001](../stories/S-runtime-platform-001.md)
