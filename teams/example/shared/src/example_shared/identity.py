from pathlib import Path

from project_contract import ProjectMetadataError, load_project_metadata


def project_identity(project_file: str | Path) -> str:
    metadata = load_project_metadata(project_file)
    team = metadata["team"]
    project_id = metadata["projectId"]
    if not isinstance(team, str) or not isinstance(project_id, str):
        raise ProjectMetadataError(f"{project_file}: metadata identity fields must be strings")
    return f"{team}/{project_id}"
