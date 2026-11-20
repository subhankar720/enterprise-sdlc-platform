# Infrastructure — Domain Skill

> **Activation trigger.** Load this skill for `infra/`, Terraform, Crossplane,
> Kubernetes manifests, Helm, GitOps, or namespace and platform provisioning.

## Required context

Read the provider and account decision, environment, state backend, workload
identity, network/security policy, ownership, cost, and rollback requirements.
Cloud provisioning is currently deferred.

## Checklist

- [ ] Declare infrastructure as version-controlled desired state.
- [ ] Separate reusable modules from environment state.
- [ ] Validate plans and policy before merge.
- [ ] Use OIDC or workload identity instead of static credentials.
- [ ] Define state locking and recovery procedures.
- [ ] Separate cluster bootstrap from application delivery.
- [ ] Record environment ownership and cost implications.

## Commands

No provider, Terraform version, or cluster toolchain is selected. Do not run
`plan`, `apply`, or reconciliation until the tool versions, backend, and target
environment are approved. Validate a local manifest only with pinned tooling.

## Required artifacts

- Provider-neutral or provider-specific module design and ownership
- Reviewed plan/render and policy output
- State locking/recovery instructions
- Environment and secret references without secret values

## Quality gates

- Plan or render succeeds
- Policy and secret checks pass
- No plaintext production secret
- Drift detection or reconciliation is defined
- Rollback and state recovery are documented

## Anti-patterns

- Manual production mutation
- Environment-specific modules copied instead of parameterized
- Shared mutable state without locking
- Infrastructure resources without tags or ownership

## Stop conditions

Stop if provider, state location, credentials, target account/cluster, blast
radius, or recovery plan is unknown.

## Definition of done

The approved infrastructure state is reviewable and policy-compliant, ownership
and recovery are explicit, and no unapproved environment was modified.
