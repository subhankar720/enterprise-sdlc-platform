# Release — SDLC Phase Skill

> **Activation trigger.** Load this skill for semantic versions, tags, changelogs,
> release approvals, cutovers, rollback, or work under `.github/workflows/release*`.

## Required context

Read the approved release scope, version policy, source revision, artifact
provenance, environment approvals, migration compatibility, SLO evidence, and
rollback owner. The prototype has no external release target.

## Checklist

- [ ] Confirm the version strategy and release scope.
- [ ] Verify artifact provenance and test evidence.
- [ ] Confirm staging soak and required approvals.
- [ ] Generate or review the changelog.
- [ ] Record artifact digests and promotion state.
- [ ] Publish required tags, releases, and documentation.
- [ ] Validate rollback procedure.
- [ ] Communicate cutover and rollback ownership.

## Required artifacts and release evidence

- Epic and feature links
- Included commit or change set
- Test and security evidence
- Artifact digest
- Approvals
- Staging and production promotion state
- Rollback result or readiness

## Commands

No release or publish command is approved for the local-only prototype. Use the
repository-pinned release tooling only after versioning, artifact storage, and
promotion policy have been approved.

## Quality gates

- Source revision and artifact digest are immutable and traceable
- Required tests, scans, approvals, and staging evidence are present
- Migration compatibility and rollback are reviewed
- Repeated publication of the same version is rejected

## Anti-patterns

- Re-tagging an already published artifact
- Publishing mutable artifacts
- Releasing without staging soak or explicit exception
- Skipping changelog and migration impact
- Rolling back without operator and data-safe procedures

## Stop conditions

Stop if release ownership, artifact provenance, approval, migration safety, or
rollback is unknown. Do not tag or publish artifacts to an external system
without explicit approval.

## Definition of done

The release record contains verified source, artifact, approvals, validation,
promotion, communication, and rollback evidence.
