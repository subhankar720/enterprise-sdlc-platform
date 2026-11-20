# Strato OBT

OBT provides one local command interface for Nx projects. Nx selects and
orchestrates targets; each target continues to use its language-native tool.

From the repository root:

```text
pnpm strato obt build example/fastapi-service
pnpm strato obt test example/fastapi-service
pnpm strato obt run example/fastapi-service
```

`metadata.projectId` is the stable command identity. OBT resolves it to an Nx
project, so IDs do not need to match project names or folder paths. Build and
test require the corresponding Nx target.

Each runnable module has a `.runconf` file. Application blocks name an existing
Nx target:

```hcl
applications {
  healthApi {
    target = "serve"
  }
}
```

Run a single-application module by project ID. If the module declares multiple
applications, select one explicitly:

```text
pnpm strato obt run feds/ors/etl --app controlDataRegistration
```

The initial configuration contract accepts `target`, optional JVM-specific
`mainClass`, and optional list-valued `profiles`. The Nx target owns runtime
behavior; OBT does not inject a language-specific entrypoint. Container profile
execution remains part of the future runtime-platform work. In HCL, declare
profiles with `profiles = ["DockerEnabled"]`, not `parents += DockerEnabled`.
