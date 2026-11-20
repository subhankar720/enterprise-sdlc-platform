import json
from importlib.resources import files
from pathlib import Path

from jsonschema import Draft202012Validator, ValidationError

_SCHEMA = json.loads(
    files("project_contract")
    .joinpath("project-metadata.schema.json")
    .read_text(encoding="utf-8")
)
Draft202012Validator.check_schema(_SCHEMA)


class ProjectMetadataError(ValueError):
    pass


def load_project_metadata(project_file: str | Path) -> dict[str, object]:
    path = Path(project_file)
    try:
        document = json.loads(path.read_text(encoding="utf-8"))
    except json.JSONDecodeError as error:
        raise ProjectMetadataError(f"{path}: invalid JSON: {error.msg}") from error

    if not isinstance(document, dict):
        raise ProjectMetadataError(f"{path}: project configuration must be a JSON object")

    metadata = document.get("metadata")
    if not isinstance(metadata, dict):
        raise ProjectMetadataError(f"{path}: required object 'metadata' is missing")

    validator = Draft202012Validator(_SCHEMA)
    errors = sorted(
        validator.iter_errors(metadata),
        key=lambda error: tuple(str(part) for part in error.absolute_path),
    )
    if errors:
        details = "; ".join(_format_error(error) for error in errors)
        raise ProjectMetadataError(f"{path}: invalid project metadata: {details}")

    project_name = document.get("name")
    if not isinstance(project_name, str) or not project_name:
        raise ProjectMetadataError(
            f"{path}: Nx project name must be a non-empty string"
        )

    return metadata


def _format_error(error: ValidationError) -> str:
    location = ["metadata", *(str(part) for part in error.absolute_path)]
    if error.validator == "required" and isinstance(error.instance, dict):
        required = error.validator_value
        if isinstance(required, list):
            missing = [field for field in required if field not in error.instance]
            return "; ".join(
                f"{'.'.join([*location, field])}: required property is missing"
                for field in missing
            )
    return f"{'.'.join(location)}: {error.message}"
