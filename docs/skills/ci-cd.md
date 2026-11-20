# CI/CD — Domain Skill

> **Activation trigger.** Load this skill for `.github/workflows/`, reusable
> actions, Nx affected detection, build caches, artifact promotion, or CI gates.

## Required context

Read the repository-pinned Nx and package-manager versions, workflow permissions,
affected base/head policy, security requirements, and runner trust boundary.
Distinguish local validation from GitHub-hosted CI; the current prototype has no
GitHub organization controls selected.

## Checklist

- [ ] Use shallow or full-history fetch according to affected detection needs.
- [ ] Compute Nx affected projects from the correct base.
- [ ] Use reusable workflows for shared security and language jobs.
- [ ] Gate merge through a required CI status.
- [ ] Cache only deterministic and non-side-effect targets.
- [ ] Never cache publish or deploy actions.
- [ ] Review and minimize pnpm install-script allowlists such as `allowBuilds`.
- [ ] Produce immutable artifacts and recorded provenance.
- [ ] Run security gates regardless of affected language scope.
- [ ] Surface machine-readable validation evidence.
- [ ] Test language-gated pipelines with representative PR changes.

## Canonical pipeline stages

1. Repository and secret pre-check
2. Nx affected calculation
3. Language build and test jobs
4. Policy, dependency, license, and security jobs
5. Container build and signature
6. Artifact promotion
7. Deployment and health validation
8. Required gate

## Commands

Local Nx project discovery and the initial Python targets are validated. Affected
calculation remains blocked on commit history, and no GitHub workflow or required
status check is configured. Use the commands in [nx.md](nx.md) for local targets;
do not claim a hosted workflow or branch protection is active.

## Required artifacts

- Reusable workflow or action with pinned third-party action references
- Permission and secret-access rationale
- Affected-job test evidence
- Stable required gate and machine-readable reports
- Rollback/promotion workflow evidence when deployment is in scope

## Quality gates

- Only intended affected projects execute
- Global dependency and lockfile changes invalidate correct targets
- Required status cannot be bypassed
- Only explicitly reviewed dependency install scripts are allowed
- Publish and deployment actions are auditable
- P95 affected-build duration is tracked
- Failed security gates block merge or promotion

## Anti-patterns

- Running every project for every change
- Directory-only affected detection that misses transitive dependencies
- Adding secrets to workflow variables
- Caching deploy or publish targets
- Combining build and promotion of mutable artifacts
- Treating a workflow output as success without validating it

## Stop conditions

Stop if the runner trust model, secret access, branch base, required status, or
artifact provenance is unknown. Keep external workflow setup blocked for the
personal local-only prototype.

## Definition of done

Workflow behavior is tested for affected, unaffected, failure, and untrusted
change paths; required status behavior is clear; permissions are minimal; and
evidence is linked to the feature.
