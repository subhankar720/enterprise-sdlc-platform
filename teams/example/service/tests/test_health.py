from pathlib import Path

from example_service import health_payload

PROJECT_ROOT = Path(__file__).resolve().parents[1]


def test_health_payload_reads_team_project_identity() -> None:
    assert health_payload(PROJECT_ROOT / "project.json") == {
        "service": "example/example-service",
        "status": "ok",
    }
