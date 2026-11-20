#!/usr/bin/env node

import { createRequire } from "node:module";
import { readFile } from "node:fs/promises";
import { dirname, isAbsolute, join, relative, resolve, sep } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { parseArguments } from "./arguments.mjs";
import { parseRunConf, selectApplication } from "./runconf.mjs";

const workspaceRoot = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "../../../..",
);
const nxCli = createRequire(import.meta.url).resolve("nx");

function usage() {
  return [
    "Usage:",
    "  strato obt build <project-id>",
    "  strato obt test <project-id>",
    "  strato obt run <project-id> [--app <application-name>]",
  ].join("\n");
}

function runNx(args, captureOutput = false) {
  const result = spawnSync(process.execPath, [nxCli, ...args], {
    cwd: workspaceRoot,
    encoding: captureOutput ? "utf8" : undefined,
    stdio: captureOutput ? "pipe" : "inherit",
  });

  if (result.error) {
    throw new Error(`Could not start Nx: ${result.error.message}`, {
      cause: result.error,
    });
  }
  return result;
}

function parseNxJson(label, result) {
  if (result.status !== 0) {
    throw new Error(`${label} failed with exit code ${result.status}.`);
  }
  try {
    return JSON.parse(result.stdout);
  } catch (error) {
    throw new Error(`${label} returned invalid JSON.`, { cause: error });
  }
}

async function discoverProjects() {
  const names = parseNxJson(
    "Nx project discovery",
    runNx(["show", "projects", "--json"], true),
  );
  if (!Array.isArray(names) || !names.every((name) => typeof name === "string")) {
    throw new Error("Nx project discovery returned an unexpected project list.");
  }

  const projects = new Map();
  for (const name of names) {
    const config = parseNxJson(
      `Nx project configuration for '${name}'`,
      runNx(["show", "project", name, "--json"], true),
    );
    const projectId = config.metadata?.projectId;
    if (typeof projectId !== "string" || !projectId) {
      continue;
    }
    if (projects.has(projectId)) {
      throw new Error(
        `Duplicate metadata.projectId '${projectId}' is assigned to multiple Nx projects.`,
      );
    }
    if (typeof config.root !== "string" || !config.targets || typeof config.targets !== "object") {
      throw new Error(`Nx project '${name}' has an invalid project configuration.`);
    }
    projects.set(projectId, { ...config, name });
  }
  return projects;
}

function getProject(projects, projectId) {
  const project = projects.get(projectId);
  if (!project) {
    const knownIds = [...projects.keys()].sort();
    const hint = knownIds.length > 0 ? ` Known project IDs: ${knownIds.join(", ")}.` : "";
    throw new Error(`No Nx project has metadata.projectId '${projectId}'.${hint}`);
  }
  return project;
}

function projectDirectory(project) {
  const directory = resolve(workspaceRoot, project.root);
  const relativePath = relative(workspaceRoot, directory);
  if (
    isAbsolute(relativePath) ||
    relativePath === ".." ||
    relativePath.startsWith(`..${sep}`)
  ) {
    throw new Error(`Nx project '${project.name}' resolves outside the workspace.`);
  }
  return directory;
}

function runTarget(project, target) {
  if (!Object.hasOwn(project.targets, target)) {
    throw new Error(`Nx project '${project.name}' does not declare a '${target}' target.`);
  }
  const result = runNx(["run", `${project.name}:${target}`]);
  process.exitCode = result.status ?? 1;
}

async function runApplication(project, requestedName) {
  const runconfPath = join(projectDirectory(project), ".runconf");
  let source;
  try {
    source = await readFile(runconfPath, "utf8");
  } catch (error) {
    throw new Error(`Could not read ${runconfPath}: ${error.message}`, { cause: error });
  }

  const applications = await parseRunConf(source, runconfPath);
  const application = selectApplication(applications, requestedName);
  if (application.mainClass) {
    console.warn(
      "OBT selects the Nx target but does not inject mainClass; ensure that target is configured to launch the declared class.",
    );
  }
  runTarget(project, application.target);
}

async function main() {
  let command;
  try {
    command = parseArguments(process.argv.slice(2));
  } catch (error) {
    console.error(`${error.message}\n\n${usage()}`);
    process.exitCode = 2;
    return;
  }

  if (command.help) {
    console.log(usage());
    return;
  }

  try {
    const projects = await discoverProjects();
    const project = getProject(projects, command.projectId);
    if (command.operation === "run") {
      await runApplication(project, command.application);
    } else {
      runTarget(project, command.operation);
    }
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  }
}

main();
