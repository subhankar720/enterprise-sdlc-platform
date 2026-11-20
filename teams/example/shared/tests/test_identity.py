from pathlib import Path

from example_shared import project_identity

PROJECT_ROOT = Path(__file__).resolve().parents[1]


def test_project_identity_uses_validated_project_metadata() -> None:
    assert project_identity(PROJECT_ROOT / "project.json") == "example/example-shared"
