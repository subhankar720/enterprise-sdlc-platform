# Coding-Agent Charter

## Operating priorities

1. Satisfy the approved requirement and acceptance criteria.
2. Preserve the repository architecture and existing conventions.
3. Use native language tools and Nx only for orchestration.
4. Keep changes complete, small, testable, and reversible.
5. Never infer a secret or invent a missing external dependency.

## Required workflow

- Read the matching skills before editing files.
- Check the project graph and impacted projects.
- Read adjacent implementations before creating new abstractions.
- Run the smallest relevant test, lint, or build command.
- Record failures and validation evidence.
- Update directly related documentation and traceability.
- Do not change unrelated code or reformat unrelated files.

## Files and artifacts

- Architecture decisions: `docs/adr/`
- Planning records: `docs/planning/`
- Runbooks: `observability/runbooks/`
- Security policy: `security/policies/`
- Cross-service tests: `tests/`
- Repository automation: `tools/` or `scripts/`

## Prohibited shortcuts

- Hardcoded dependency versions where the repository requires a catalog or lockfile
- Secrets or credentials in source or test fixtures
- Manual production deployment
- Cached publish, deploy, or side-effect targets
- Silent validation failures
- A project hidden from Nx without an approved exception
- Generated files committed when source generation is not defined
- Broad destructive cleanup or unrelated dependency upgrades

## Completion criteria

A task is complete only when:

- The requested behavior is implemented.
- Relevant validations pass.
- Documentation and traceability are synchronized.
- The resulting state can be reproduced by repository commands.
- Remaining risks or unverified external dependencies are explicitly reported.
