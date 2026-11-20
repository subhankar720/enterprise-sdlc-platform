# S-release-governance-002

## Story

Promote one immutable verified artifact across environments.

## Feature

[F-release-governance-002](../features/F-release-governance-002.md)

## Acceptance criteria

- Given an approved release candidate, When promoted, Then each environment
  deploys the identical artifact digest.
- Given signature, scan, or required test evidence is invalid, When promotion is
  requested, Then it is denied.
- Given production approval is missing, When promotion is triggered, Then no
  production mutation occurs.
- Given the artifact is rebuilt, When it is promoted, Then the new digest must
  pass all required validations.

## Dependencies

Artifact provenance, registry, protected environments, GitOps.

## Test evidence

Promotion workflow tests for identical digest, missing approval, and invalid evidence.
