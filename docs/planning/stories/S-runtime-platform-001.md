# S-runtime-platform-001

## Story

Build and verify a production-aligned application image.

## Feature

[F-runtime-platform-001](../features/F-runtime-platform-001.md)

## Acceptance criteria

- Given a deployable application, When its container is built, Then its runtime
  image runs as non-root and is identified by immutable digest.
- Given a scan finding violates policy, When promotion is attempted, Then it is
  blocked and the finding is surfaced.
- Given a signed image, When verification runs, Then the digest and provenance
  match the originating workflow.
- Given a secret is supplied during build, When image layers are inspected, Then
  it is not present.

## Dependencies

Secure-delivery security scans, identity and signing decisions, registry decision.

## Test evidence

Image configuration tests, scanner policy fixture, digest and signature verification.
