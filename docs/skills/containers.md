# Containers — Domain Skill

> **Activation trigger.** Load this skill for Dockerfiles, container builds,
> registries, image signing, or artifact promotion.

## Required context

Read the service runtime, base-image policy, target architecture, artifact
registry, image provenance, and runtime identity. Check whether Docker or
Podman is installed before claiming a local build can run.

## Checklist

- [ ] Use a reviewed, organization-approved base image.
- [ ] Build through a multi-stage, reproducible Dockerfile.
- [ ] Run as a non-root distroless or minimal user where supported.
- [ ] Scan dependencies and final image.
- [ ] Record provenance and digest.
- [ ] Sign the image and verify before promotion.
- [ ] Keep container build configuration outside runtime secrets.

## Commands

The repository has no container project or registry decision. Once a container
engine and Dockerfile exist, run the engine's local build and inspect commands;
registry push and signing require separate approved tools and credentials.
Record exact commands and versions with the project rather than using floating
image tags.

## Required artifacts

- Dockerfile and pinned base-image reference
- Build context and reproducible build instructions
- Scan, signature, provenance, and image-digest evidence
- Runtime user, health check, and resource/security settings

## Quality gates

- Container build passes
- Vulnerability threshold passes or has an exception
- Base image policy passes
- Provenance and digest are recorded
- Image signature verification passes
- Runtime health and security settings are defined

## Anti-patterns

- Full SDK images in runtime stages
- Running as root
- Latest tags
- Secrets in build arguments or image layers
- Pushing without scan and signature

## Stop conditions

Stop if the image source, base image, build context, registry, signing identity,
or target runtime is unknown; never add credentials to image layers.

## Definition of done

The image builds reproducibly, passes policy and vulnerability checks, runs with
approved privileges, and has verifiable provenance before promotion.
