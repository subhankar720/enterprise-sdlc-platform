# Deploy — SDLC and Infrastructure Skill

> **Activation trigger.** Load this skill for `infra/`, `helm/`, `gitops/`,
> `Dockerfile`, Kubernetes, environment promotion, or production deployment.

## Required context

Read the approved target environment, provider and identity decisions, artifact
digest and provenance, network and secrets boundaries, owner, SLO, and rollback
plan. The current prototype is local-only; no cloud target is approved.

## Checklist

- [ ] Promote one immutable artifact across environments.
- [ ] Describe desired state declaratively.
- [ ] Validate infrastructure and Kubernetes policy.
- [ ] Use least-privilege identity and external secret references.
- [ ] Define readiness, health, and rollback signals.
- [ ] Use progressive delivery for critical services.
- [ ] Require approval and audit evidence for production.
- [ ] Document cutover, communication, and rollback ownership.

## Quality gates

- Infrastructure plan or policy validation passes
- Container digest is signed and verified
- Environment-specific values contain no plaintext secrets
- Production change has a rollback procedure
- Deployment evidence is recorded
- Health validation is automated

## Commands

Provider-specific commands are intentionally not selected. Use only repository-
pinned IaC, GitOps, and deployment tools after their versions and target
environment are approved. Do not run `apply`, reconcile, or production commands
against an assumed account or cluster.

## Required artifacts

- Reviewed desired-state change
- Validated plan/render and policy evidence
- Artifact digest and provenance
- Approval and deployment record
- Health and rollback evidence

## Stop conditions

Stop when infrastructure identity, target environment, approval, image provenance,
secrets source, or rollback behavior is unknown.

## Anti-patterns

- Manual `kubectl apply` for production
- Rebuilding the application in the target environment
- Storing environment secrets in Git
- Deploying before health validation is defined
- A canary with no analysis or rollback path

## Definition of done

The approved environment reaches the intended state from version control,
security and health gates pass, and rollback and ownership are recorded.
