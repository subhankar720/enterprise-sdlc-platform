# Local Toolchain Readiness

**Checked:** 2026-11-20
**Scope:** Current Windows development machine only; this is not the supported
repository toolchain policy.

Refresh this snapshot before implementation or after changing installed tools.
Repository-supported versions must be pinned in manifests and CI, not inferred
from this machine.

| Area | Observed state | Readiness |
|---|---|---|
| Python | Python 3.11.0 available | FastAPI member is configured and the HTTP health check passes |
| uv | uv 0.11.7 available | `uv sync --all-packages --locked` passes; root and FastAPI member are listed |
| Python quality tools | Not on PATH | Ruff, mypy, and pytest are declared in the member and pass through the uv environment |
| Python lockfile | `uv.lock` present | Locked workspace sync passes |
| Python workspace paths | Root members include `apps/backend/*`, `shared-libs/python/*`, and `tools/python/*` | Matches the current FastAPI member and planned library paths |
| Node.js | v26.13.1 available | Runtime observed; repository Node support range remains undecided |
| pnpm | v12.21.0 available through `D:\tools\npm` | Version pinned in root `package.json`; frozen install passes; only Nx's inspected install script is explicitly allowed |
| Nx | Local v24.0.6 | Project-pinned CLI works; global v24.0.6 is not used as validation |
| Nx workspace | Root package and lockfiles present; one `project.json` | `nx show projects` lists `python-fastapi-service`; build/lint/typecheck/test and local HTTP health check pass |
| Nx plugin | No custom Go plugin registered | Add one only with an implementation and graph tests |
| Affected base | Current branch is `master`; repository still has no commits | Explicit-file affected selection passes for the FastAPI project; base/head diff calculation awaits the first commit |
| Go | Go 1.27.4 available | Tool exists; no Go module projects are present |
| Gradle / JVM | Gradle 8.5 and Java 16 reported successfully (exit code 0) | Executable is verified; project JVM/toolchain target is undecided, and no settings or version catalog exists |
| Rust | `rustc` and `cargo` not found | Rust feature is blocked on toolchain setup |
| Containers | Neither Docker nor Podman found on PATH | Container build is not part of this local slice |

## Verification constraints

- No commit history exists for Git-diff-based affected-base validation.
- Do not run install or sync commands that mutate lockfiles until the relevant
  manifests and dependency policy are reviewed.
- Python checks run through the declared uv member environment; they are not
  globally installed. `uv sync --all-packages --locked` passed.
- Nx commands in [nx.md](nx.md) are validated for the initial project only.
- Cloud, remote cache, GitHub organization controls, and production credentials
  are out of scope for the selected local-only prototype.
