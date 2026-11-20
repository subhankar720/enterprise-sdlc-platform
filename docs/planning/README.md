# Planning Records

Planning artifacts use a traceable hierarchy:

```text
Epic -> Feature -> Story -> ADR/Contract -> Implementation -> Test -> Release
```

Start with the proposed [implementation roadmap](roadmap.md), review the
[team-oriented platform vision](vision.md), and check
[unresolved assumptions](assumptions.md) before approving work. The
[standard charter](../standard-charter.md) governs the lifecycle and quality bar.

## Required records

- `epics/EPIC-<name>.md`
- `features/F-<epic>-<number>.md`
- `stories/S-<epic>-<number>.md`
- `traceability.md`
- `roadmap.md`
- `vision.md`
- `assumptions.md`
- `templates/` for reusable planning records

## Epic status

`proposed` -> `approved` -> `active` -> `done`

An epic requires an owner, business goal, success metric, scope, constraints,
priority rationale, and feature list. A feature or story is not approved by being
invented in a design session; it must belong to an approved epic.

## Status and approval

The portfolio backlog is a proposal until the platform owner reviews and approves
it. `proposed` means work is planned but not authorized for implementation;
`approved` means scope, priority, constraints, and acceptance criteria are accepted.
An epic does not become approved merely because its planning files exist.

## Story readiness

Before a story can enter implementation, it must have:

- An approved parent epic and feature
- Testable Given / When / Then acceptance criteria
- Dependencies and external decisions identified
- An owner or accountable team
- Security, data, operational, and migration impact assessed as applicable
- A measurable completion test

Stories are intentionally one-sprint sized. Break down work that cannot be
estimated or validated independently.
If a story does not name an individual owner, it inherits the accountable team
from its parent epic; assign a named owner before implementation.

## Prioritization

Use team-reviewed WSJF as a relative ordering aid:

`(business value + time criticality + risk reduction + opportunity enablement) / job size`

Do not assign numeric scores until the accountable stakeholders agree on relative
values. Record the rationale, not false precision.

## Planning workflow

1. Review [the roadmap](roadmap.md) and [assumptions](assumptions.md).
2. Resolve decisions required by the next phase.
3. Review proposed epics with affected owners.
4. Approve an epic before approving its features and stories for implementation.
5. Link design decisions, implementation, tests, and release evidence in
   [traceability](traceability.md).

## Templates

- [Epic template](templates/epic-template.md)
- [Feature template](templates/feature-template.md)
- [Story template](templates/story-template.md)
