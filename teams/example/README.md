# Example Team Graph Fixture

This fixture demonstrates the proposed team project layout and dependency graph.
It is not a real team or production service.

Dependency edges point from consumer to dependency:

```text
example-service -> example-shared -> project-contract
```

Changing the platform contract should select the contract, shared library, and
service test targets. Use the local PR report to see selected scopes, results,
and per-project logs:

```powershell
pnpm pr:local -- --files=platform/python/project-contract/src/project_contract/metadata.py
```

The generated report is written under `.local-reports/pr-checks/` and is ignored
by Git.
