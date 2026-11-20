# Database — Domain Skill

> **Activation trigger.** Load this skill for schema changes, migrations,
> persistence models, data contracts, backup, restore, or work under database paths.

## Required context

Read the data owner, classification, database engine/version, schema consumers,
retention, backup, availability, and recovery requirements before changing data.
No database engine or production data store is selected for the local prototype.

## Checklist

- [ ] Prefer backward-compatible migrations.
- [ ] Separate expand, migrate, and contract phases when necessary.
- [ ] Model ownership, retention, backup, and access.
- [ ] Test migration forward and rollback behavior.
- [ ] Protect personal and sensitive data.
- [ ] Add contract tests across service and schema boundaries.
- [ ] Define recovery point and recovery time requirements.

## Commands

Migration commands depend on the approved database and migration framework. No
database command is currently validated; do not run migrations against an
assumed external database.

## Required artifacts

- Reviewed migration and compatibility plan
- Forward and rollback tests using synthetic data
- Data classification, retention, access, and recovery evidence
- Contract/version changes and affected consumer list

## Quality gates

- Migration is reproducible
- Forward and rollback behavior has evidence
- Data access is least-privileged
- Service compatibility passes
- Backup or recovery requirement is recorded

## Anti-patterns

- Destructive migration in the same release as application removal
- Direct schema mutation outside migration tooling
- Customer data in fixtures
- Unbounded retention
- Rollback that changes data without a tested recovery procedure

## Stop conditions

Stop if data ownership/classification, target database, migration order,
destructive impact, backup, or rollback safety is unknown.

## Definition of done

Migration is reproducible and compatible, forward/rollback evidence passes,
sensitive data is protected, and owners/consumers are traceable.
