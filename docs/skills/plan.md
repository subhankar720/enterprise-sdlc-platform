# Plan — SDLC Phase Skill

> **Activation trigger.** Load this skill when the contributor is working in the
> **Plan** phase of the SDLC lifecycle: backlog grooming, requirement authoring,
> epic/feature breakdown, acceptance-criteria definition, or traceability work.
> Also load when editing files under `docs/planning/`, `backlog/`, or any
> `*.md` that describes a requirement, epic, or feature.

## When to use this skill

- A new customer request, internal platform ask, or compliance mandate arrives.
- An epic needs to be broken into features and stories.
- A feature needs acceptance criteria before it can be designed or estimated.
- You need to prove traceability: requirement → design → build → test → release.

## Required context

Read [the standard charter](../standard-charter.md), the
[implementation roadmap](../planning/roadmap.md), current
[assumptions](../planning/assumptions.md), existing planning records, and the
relevant domain skills before approving scope. Do not treat source architecture
references or draft epics as approved decisions.

## Checklist

### 1. Capture the requirement
- [ ] Write the request in the **Problem / Outcome / Constraints** format:
      - **Problem:** what pain or gap exists today.
      - **Outcome:** measurable, observable result the user/customer wants.
      - **Constraints:** regulatory, security, budget, timeline, or platform constraints.
- [ ] Record the source: ticket id, customer quote, compliance clause, or roadmap item.
- [ ] Classify the **type**: functional, non-functional (perf/availability/security),
      technical (platform/infra), or compliance.

### 2. Define the epic
- [ ] Create an epic record under `docs/planning/epics/` named
      `EPIC-<short-name>.md`.
- [ ] Include: title, owner, status (`proposed` | `approved` | `active` | `done`),
      business goal, success metrics, and the list of features it contains.
- [ ] Link the epic to the roadmap phase (Plan → Design → Develop → Test →
      Deploy → Release → Operate) and phase exit evidence in
      `docs/planning/roadmap.md`.

### 3. Break into features and stories
- [ ] Each feature is a **deliverable unit** that can be designed and estimated
      independently.
- [ ] Each story is a **testable unit** small enough for one sprint.
- [ ] Use the format `F-<epic>-<n>` for features and `S-<epic>-<n>` for stories.
- [ ] Add story points or a T-shirt size (S/M/L/XL) — never a fake precision
      hour estimate.

### 4. Write acceptance criteria (AC)
- [ ] Every story has **Given / When / Then** acceptance criteria.
- [ ] ACs are **testable**: a reviewer can read them and know unambiguously
      whether the story passes.
- [ ] Include at least one **negative path** AC (what must *not* happen).
- [ ] Mark **out-of-scope** items explicitly so they do not silently creep in.

### 5. Traceability
- [ ] Every story links back to its feature, and every feature links back to its
      epic.
- [ ] Every epic links to a roadmap phase and a success metric.
- [ ] Maintain a traceability matrix in `docs/planning/traceability.md`:
      `epic → feature → story → design ADR → build PR → test → release tag`.

### 6. Estimate and prioritize
- [ ] Estimate with the team (planning poker or similar); never a single person.
- [ ] Prioritize using **WSJF** (Weighted Shortest Job First) for platform work:
      `(business value + time criticality + risk reduction + opportunity enablement) / job size`.
- [ ] Record the priority and the rationale in the epic record.

Do not assign numeric WSJF scores without team-agreed relative inputs.

### 7. Get approval
- [ ] The epic is approved by the product/platform owner before any design work
      begins.
- [ ] Approved epics are moved to `status: approved` and scheduled into a
      roadmap phase.

## Anti-patterns to avoid

- Writing a story with no acceptance criteria ("it should work").
- Breaking an epic into stories that each depend on the whole epic.
- Estimating in hours before the design exists.
- Letting a "small change" bypass the epic/feature record.
- Confusing a feature (deliverable) with a story (testable unit).

## Required artifacts and output

- `docs/planning/epics/EPIC-<name>.md` — epic record.
- `docs/planning/features/F-<epic>-<n>.md` — feature record.
- `docs/planning/stories/S-<epic>-<n>.md` — story with ACs.
- `docs/planning/traceability.md` — traceability matrix.
- `docs/planning/assumptions.md` — unresolved choices that block or constrain work.

## Canonical validation

Planning has no universal build command. Validate relative Markdown links, verify
each feature/story/epic link, and confirm the traceability rows match the planned
scope. Do not call a proposed backlog approved based only on file existence.

## Quality gates

- Epic status matches its approval evidence.
- Every feature has an accountable epic and testable outcome.
- Every story links to a feature and has positive and negative Given/When/Then
  acceptance criteria.
- Dependencies and unresolved assumptions are visible.
- Traceability row count and links match the planned story set.

## Stop conditions

Stop and request owner input when a decision changes security, privacy,
production access, cost, data handling, ownership, or a hard dependency. If the
owner is unavailable, record the assumption and keep dependent implementation
blocked.

## Definition of done

The epic is correctly statused, its features and stories have testable acceptance
criteria and dependencies, assumptions are explicit, and the traceability matrix
matches the backlog. Approval is recorded by the accountable owner.