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
| uv | uv 0.11.7 available | `uv sync --all-packages --locked` passes; root, FastAPI, platform, and team Python projects resolve |
| Python quality tools | Not on PATH | Ruff, mypy, and pytest are declared in the member and pass through the uv environment |
| Python lockfile | `uv.lock` present | Locked workspace sync passes |
| Python workspace paths | Root members include `apps/backend/*`, `platform/python/*`, `shared-libs/python/*`, `teams/*/*`, and `tools/python/*` | Includes the local team graph proof |
| Node.js | v26.13.1 available | Runtime observed; repository Node support range remains undecided |
| pnpm | v12.21.0 available through `D:\tools\npm` | Version pinned in root `package.json`; frozen install passes; only Nx's inspected install script is explicitly allowed |
| Nx | Local v24.0.6 | Project-pinned CLI works; global v24.0.6 is not used as validation |
| Nx workspace | Root package and lockfiles present; five `project.json` files | `nx show projects` lists five projects; the original Python projects and OBT local slice have focused build/test/run evidence; platform changes select direct and transitive consumers; local PR report links logs |
| Nx plugin | No custom Go plugin registered | Add one only with an implementation and graph tests |
| Affected base | Current branch is `master`; initial commit is present | Explicit-file selection passes for the three-project platform-to-team chain; `nx affected --target=test --base=fe0ee77` passes for the complete local change set |
| Go | Go 1.27.4 available | Tool exists; no Go module projects are present |
| Gradle / JVM | Gradle 8.5 and Java 16 reported successfully (exit code 0) | Executable is verified; project JVM/toolchain target is undecided, and no settings or version catalog exists |
| Rust | `rustc` and `cargo` not found | Rust feature is blocked on toolchain setup |
| Containers | Neither Docker nor Podman found on PATH | Container build is not part of this local slice |

## Verification constraints

- Do not run install or sync commands that mutate lockfiles until the relevant
  manifests and dependency policy are reviewed.
- Python checks run through the declared uv member environment; they are not
  globally installed. `uv sync --all-packages --locked` passed.
- Nx commands in [nx.md](nx.md) are validated for the five local projects; OBT's
  own tests and the FastAPI build/test/run flow have focused validation.
- Cloud, remote cache, GitHub organization controls, and production credentials
  are out of scope for the selected local-only prototype.
