# Python FastAPI Sample Service

This local-only sample demonstrates the monorepo's Python project conventions.
It exposes `GET /healthz` and does not connect to external systems or use
customer data.

## Prerequisites

- Python 3.11 or newer, consistent with the root workspace constraint
- uv version selected by the repository toolchain policy
- Root workspace dependencies synchronized from `uv.lock`

## Commands

From the repository root:

```powershell
uv sync --all-packages --locked
pnpm exec nx run python-fastapi-service:build
pnpm exec nx run python-fastapi-service:test
pnpm exec nx run python-fastapi-service:lint
pnpm exec nx run python-fastapi-service:typecheck
pnpm exec nx run python-fastapi-service:serve
```

The service binds only to `127.0.0.1` by default. It is not a production
deployment target.
