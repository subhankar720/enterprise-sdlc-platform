import json
from pathlib import Path

import pytest

from project_contract import ProjectMetadataError, load_project_metadata

PROJECT_ROOT = Path(__file__).resolve().parents[1]


def test_loads_metadata_from_nx_project_configuration() -> None:
    metadata = load_project_metadata(PROJECT_ROOT / "project.json")

    assert metadata["team"] == "platform"
    assert metadata["projectId"] == "project-contract"


def test_invalid_metadata_reports_schema_path(tmp_path: Path) -> None:
    project_file = tmp_path / "project.json"
    project_file.write_text(
        json.dumps({"name": "example", "metadata": {"team": "example"}}),
        encoding="utf-8",
    )

    with pytest.raises(ProjectMetadataError, match="metadata.contractVersion"):
        load_project_metadata(project_file)


def test_project_id_is_independent_of_nx_project_name(tmp_path: Path) -> None:
    project_file = tmp_path / "project.json"
    project_file.write_text(
        json.dumps(
            {
                "name": "wrong-name",
                "metadata": {
                    "contractVersion": 1,
                    "team": "example",
                    "projectId": "feds/ors/etl",
                    "productType": "library",
                    "language": "python",
                    "toolchainProfile": "python-local",
                    "release": {
                        "versioning": "semver",
                        "artifactProfile": "python-wheel",
                    },
                },
            }
        ),
        encoding="utf-8",
    )

    metadata = load_project_metadata(project_file)

    assert metadata["projectId"] == "feds/ors/etl"


@pytest.mark.parametrize("project_id", ["feds//etl", "feds/../etl", "/etl", "feds/"])
def test_project_id_rejects_invalid_path_segments(
    tmp_path: Path, project_id: str
) -> None:
    project_file = tmp_path / "project.json"
    project_file.write_text(
        json.dumps(
            {
                "name": "example",
                "metadata": {
                    "contractVersion": 1,
                    "team": "example",
                    "projectId": project_id,
                    "productType": "library",
                    "language": "python",
                    "toolchainProfile": "python-local",
                    "release": {
                        "versioning": "semver",
                        "artifactProfile": "python-wheel",
                    },
                },
            }
        ),
        encoding="utf-8",
    )

    with pytest.raises(ProjectMetadataError, match="projectId"):
        load_project_metadata(project_file)
