from pathlib import Path

from example_shared import project_identity


def health_payload(project_file: str | Path) -> dict[str, str]:
    return {
        "service": project_identity(project_file),
        "status": "ok",
    }
