# S-observability-reliability-001

## Story

Instrument the first service with privacy-safe correlated telemetry.

## Feature

[F-observability-reliability-001](../features/F-observability-reliability-001.md)

## Acceptance criteria

- Given a request through the selected service, When telemetry is queried, Then
  request metrics, structured logs, and trace spans can be correlated.
- Given a downstream failure, When a trace is inspected, Then the failing
  dependency boundary and error are visible.
- Given a telemetry payload, When privacy checks run, Then secrets and regulated
  values are absent.
- Given the telemetry backend is unavailable, When service requests are handled,
  Then application availability is not replaced by a telemetry-induced failure.

## Dependencies

Telemetry backend decision, data policy, and selected service.

## Test evidence

Instrumentation tests, telemetry privacy checks, and representative dashboard review.
