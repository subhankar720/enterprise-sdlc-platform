# Project Metadata Contract

This local prototype validates the `metadata` object in an Nx `project.json`
against the packaged JSON Schema. `metadata.projectId` must match the Nx project
name. The schema covers team ownership, product type, language profile, and
independent SemVer release metadata.

The contract is versioned and intentionally small. It is a design proof, not yet
the final organization-wide project descriptor standard.

Consumers use `load_project_metadata(project.json)` from the
`project-contract` Python package. Projects that consume the contract must have
an explicit Nx dependency edge so changes select their validation targets.

The `example-shared` -> `example-service` chain under `teams/example` demonstrates
transitive selection when the platform contract changes. The example team name
is a fixture, not an actual team.
