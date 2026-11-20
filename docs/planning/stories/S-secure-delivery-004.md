# S-secure-delivery-004

## Story

Authenticate CI with short-lived identity and verify artifact provenance.

## Feature

[F-secure-delivery-004](../features/F-secure-delivery-004.md)

## Acceptance criteria

- Given a workflow requiring cloud access, When credentials are issued, Then
  they are short-lived and scoped to repository, branch, and environment policy.
- Given an artifact, When provenance is verified, Then its digest, source
  revision, and workflow identity match the release record.
- Given provenance or signature verification fails, When promotion is attempted,
  Then the operation is denied and the failure is visible.
- Given no cloud identity decision exists, When CI is run, Then it does not fall
  back to a static key.

## Dependencies

Cloud identity, registry, and signing-tool decisions.

## Test evidence

OIDC claim policy tests and artifact signature verification with synthetic artifacts.
