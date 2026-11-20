import { parse } from "@cdktf/hcl2json";

const APPLICATION_NAME = /^[A-Za-z][A-Za-z0-9_-]*$/;
const APPLICATION_FIELDS = new Set(["target", "mainClass", "profiles"]);

export class RunConfError extends Error {}

function isRecord(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function fail(source, message) {
  throw new RunConfError(`${source}: ${message}`);
}

export async function parseRunConf(source, fileName = ".runconf") {
  let document;
  try {
    document = await parse(fileName, source);
  } catch (error) {
    const detail = error instanceof Error ? error.message : String(error);
    fail(fileName, `invalid HCL: ${detail}`);
  }

  if (!isRecord(document) || Object.keys(document).some((key) => key !== "applications")) {
    fail(fileName, "only an 'applications' block is supported.");
  }

  const applicationBlocks = document.applications;
  if (!Array.isArray(applicationBlocks) || applicationBlocks.length !== 1) {
    fail(fileName, "exactly one 'applications' block is required.");
  }

  const declarations = applicationBlocks[0];
  if (!isRecord(declarations) || Object.keys(declarations).length === 0) {
    fail(fileName, "'applications' must declare at least one application.");
  }

  const applications = {};
  for (const [name, blocks] of Object.entries(declarations)) {
    if (!APPLICATION_NAME.test(name)) {
      fail(fileName, `invalid application name '${name}'.`);
    }
    if (!Array.isArray(blocks) || blocks.length !== 1 || !isRecord(blocks[0])) {
      fail(fileName, `application '${name}' must have exactly one block.`);
    }

    const settings = blocks[0];
    const unknownFields = Object.keys(settings).filter(
      (field) => !APPLICATION_FIELDS.has(field),
    );
    if (unknownFields.length > 0) {
      fail(
        fileName,
        `application '${name}' has unsupported field(s): ${unknownFields.join(", ")}.`,
      );
    }

    if (typeof settings.target !== "string" || !settings.target.trim()) {
      fail(fileName, `application '${name}' requires a non-empty 'target'.`);
    }
    if (
      settings.mainClass !== undefined &&
      (typeof settings.mainClass !== "string" || !settings.mainClass.trim())
    ) {
      fail(fileName, `application '${name}' has an invalid 'mainClass'.`);
    }
    if (
      settings.profiles !== undefined &&
      (!Array.isArray(settings.profiles) ||
        !settings.profiles.every(
          (profile) => typeof profile === "string" && profile.trim().length > 0,
        ))
    ) {
      fail(fileName, `application '${name}' has invalid 'profiles'.`);
    }

    applications[name] = settings;
  }

  return applications;
}

export function selectApplication(applications, requestedName) {
  const names = Object.keys(applications);
  if (requestedName) {
    if (!Object.hasOwn(applications, requestedName)) {
      throw new RunConfError(
        `Unknown application '${requestedName}'. Available applications: ${names.join(", ")}.`,
      );
    }
    return applications[requestedName];
  }

  if (names.length === 1) {
    return applications[names[0]];
  }
  if (names.length === 0) {
    throw new RunConfError("The module declares no applications.");
  }
  throw new RunConfError(
    `Select an application with --app. Available applications: ${names.join(", ")}.`,
  );
}
