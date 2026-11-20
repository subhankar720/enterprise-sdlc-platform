# Architecture Decision Records

Use ADRs for decisions that are durable, cross-team, externally visible, or
costly to reverse. Keep them immutable after acceptance; supersede a decision
with a new ADR rather than rewriting history.

## Naming

`ADR-NNNN-short-decision-title.md`

## Lifecycle

`proposed` -> `accepted` | `rejected` | `superseded`

Accepted ADRs identify the approving owners and date. Link decisions to the
epic, feature, or assumption that required them.

Use the [ADR template](ADR-template.md). Candidate decisions currently tracked
in [planning assumptions](../planning/assumptions.md) include cloud/provider,
identity, registry, secrets, GitOps, observability, and remote cache.
