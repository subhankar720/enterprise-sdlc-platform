import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { createRequire } from "node:module";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const workspaceRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const nxCli = createRequire(import.meta.url).resolve("nx");
const reportDirectory = join(workspaceRoot, ".local-reports", "pr-checks");
const logDirectory = join(reportDirectory, "logs");

function parseFiles(args) {
  const optionIndex = args.findIndex((argument) => argument === "--files");
  const inlineOption = args.find((argument) => argument.startsWith("--files="));
  const value = inlineOption
    ? inlineOption.slice("--files=".length)
    : optionIndex >= 0
      ? args[optionIndex + 1]
      : undefined;

  if (!value) {
    throw new Error(
      "Provide changed workspace paths with --files=path1,path2. Paths are workspace-relative.",
    );
  }

  const files = value
    .split(",")
    .map((file) => file.trim().replaceAll("\\", "/"))
    .filter(Boolean);

  if (files.length === 0) {
    throw new Error("At least one changed workspace path is required.");
  }
  return files;
}

function runNx(args) {
  const result = spawnSync(process.execPath, [nxCli, ...args], {
    cwd: workspaceRoot,
    encoding: "utf8",
  });

  return {
    status: result.status ?? 1,
    stdout: result.stdout ?? "",
    stderr: result.stderr ?? "",
    error: result.error?.message,
  };
}

function outputText(result) {
  const sections = [];
  if (result.error) {
    sections.push(`Process error: ${result.error}`);
  }
  if (result.stdout.trim()) {
    sections.push(result.stdout.trimEnd());
  }
  if (result.stderr.trim()) {
    sections.push(`stderr:\n${result.stderr.trimEnd()}`);
  }
  sections.push(`Exit code: ${result.status}`);
  return `${sections.join("\n\n")}\n`;
}

function parseJsonResult(label, result) {
  if (result.status !== 0) {
    throw new Error(`${label} failed:\n${outputText(result)}`);
  }
  try {
    return JSON.parse(result.stdout);
  } catch (error) {
    throw new Error(`${label} did not return valid JSON.`, { cause: error });
  }
}

function safeFileName(value) {
  return value.replace(/[^A-Za-z0-9._-]/g, "_");
}

async function writeLog(fileName, text) {
  await mkdir(logDirectory, { recursive: true });
  const path = join(logDirectory, fileName);
  await writeFile(path, text, "utf8");
  return `logs/${fileName}`;
}

function markdownCell(value) {
  return String(value).replaceAll("|", "\\|").replaceAll("\n", " ");
}

async function writeReport(files, projects, rows, graphLog, explanationLog, explanationWarning) {
  await mkdir(logDirectory, { recursive: true });

  const counts = new Map();
  for (const row of rows) {
    counts.set(row.status, (counts.get(row.status) ?? 0) + 1);
  }

  const lines = [
    "# Local PR Validation Report",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    "This report uses explicit changed-file inputs and runs locally. Test targets",
    "may also run their configured Nx prerequisite tasks, such as builds.",
    "",
    "## Changed paths",
    "",
    ...files.map((file) => `- \`${file}\``),
    "",
    "## Summary",
    "",
    ...["Passed", "Failed", "Blocked", "Skipped", "Not applicable"].map(
      (status) => `- ${status}: ${counts.get(status) ?? 0}`,
    ),
    "",
  ];

  if (graphLog) {
    lines.push(`Affected-project calculation failed; see [graph log](${graphLog}).`, "");
  } else {
    lines.push(
      `Nx selected ${rows.filter((row) => row.selected).length} of ${projects.length} projects.`,
      "",
    );
  }

  if (explanationLog && explanationWarning) {
    lines.push(
      `Selection rationale unavailable: ${explanationWarning} See [log](${explanationLog}).`,
      "",
    );
  } else if (explanationLog) {
    lines.push(`Selection rationale: [Nx affected-task explanation](${explanationLog}).`, "");
  } else if (explanationWarning) {
    lines.push(`Selection rationale unavailable: ${explanationWarning}`, "");
  }

  lines.push(
    "| Project | Scope | Status | Details |",
    "|---|---|---|---|",
    ...rows.map(
      (row) =>
        `| ${markdownCell(row.project)} | test | ${row.status} | ${markdownCell(row.details)} |`,
    ),
    "",
  );

  await mkdir(reportDirectory, { recursive: true });
  await writeFile(join(reportDirectory, "latest.md"), `${lines.join("\n")}\n`, "utf8");
  return join(reportDirectory, "latest.md");
}

async function main() {
  const files = parseFiles(process.argv.slice(2));
  const projects = parseJsonResult(
    "Nx project discovery",
    runNx(["show", "projects", "--json"]),
  );
  if (!Array.isArray(projects) || !projects.every((project) => typeof project === "string")) {
    throw new Error("Nx project discovery returned an unexpected project list.");
  }

  const affectedResult = runNx([
    "show",
    "projects",
    "--affected",
    `--files=${files.join(",")}`,
    "--json",
  ]);
  if (affectedResult.status !== 0) {
    const graphLog = await writeLog("affected-projects.log", outputText(affectedResult));
    const rows = projects.map((project) => ({
      project,
      selected: true,
      status: "Blocked",
      details: `Nx could not calculate affected projects; see [log](${graphLog}).`,
    }));
    const report = await writeReport(files, projects, rows, graphLog);
    console.error(`Affected-project calculation failed. Report: ${report}`);
    process.exitCode = 1;
    return;
  }

  let affectedProjects;
  try {
    affectedProjects = JSON.parse(affectedResult.stdout);
  } catch (error) {
    const graphLog = await writeLog("affected-projects.log", outputText(affectedResult));
    const rows = projects.map((project) => ({
      project,
      selected: true,
      status: "Blocked",
      details: `Nx returned invalid affected-project data; see [log](${graphLog}).`,
    }));
    const report = await writeReport(files, projects, rows, graphLog);
    console.error(`Affected-project output was invalid. Report: ${report}`);
    process.exitCode = 1;
    return;
  }

  if (
    !Array.isArray(affectedProjects) ||
    !affectedProjects.every((project) => typeof project === "string")
  ) {
    throw new Error("Nx returned an unexpected affected-project list.");
  }

  const explanationResult = runNx([
    "show",
    "projects",
    "--affected",
    "--withTarget=test",
    `--files=${files.join(",")}`,
    "--explain=stdout",
    "--json",
  ]);
  let explanationLog;
  let explanationWarning;
  if (explanationResult.status === 0) {
    try {
      const explanation = JSON.parse(explanationResult.stdout);
      explanationLog = await writeLog(
        "affected-explanation.json",
        `${JSON.stringify(explanation, null, 2)}\n`,
      );
    } catch (error) {
      explanationWarning = error instanceof Error ? error.message : String(error);
      explanationLog = await writeLog(
        "affected-explanation.log",
        outputText(explanationResult),
      );
    }
  } else {
    explanationWarning = "Nx could not provide affected-task details.";
    explanationLog = await writeLog(
      "affected-explanation.log",
      outputText(explanationResult),
    );
  }

  const affected = new Set(affectedProjects);
  const rows = [];
  for (const project of projects) {
    if (!affected.has(project)) {
      rows.push({
        project,
        selected: false,
        status: "Skipped",
        details: "Nx did not select this project for the supplied changed paths.",
      });
      continue;
    }

    const configResult = runNx(["show", "project", project, "--json"]);
    if (configResult.status !== 0) {
      const log = await writeLog(`${safeFileName(project)}-project-config.log`, outputText(configResult));
      rows.push({
        project,
        selected: true,
        status: "Blocked",
        details: `Could not inspect project targets; see [log](${log}).`,
      });
      continue;
    }

    let config;
    try {
      config = JSON.parse(configResult.stdout);
    } catch (error) {
      const log = await writeLog(`${safeFileName(project)}-project-config.log`, outputText(configResult));
      rows.push({
        project,
        selected: true,
        status: "Blocked",
        details: `Project target data was invalid; see [log](${log}).`,
      });
      continue;
    }

    if (!config.targets?.test) {
      rows.push({
        project,
        selected: true,
        status: "Not applicable",
        details: "The affected project does not declare a test target.",
      });
      continue;
    }

    const testResult = runNx(["run", `${project}:test`, "--outputStyle=static"]);
    const log = await writeLog(`${safeFileName(project)}-test.log`, outputText(testResult));
    rows.push({
      project,
      selected: true,
      status: testResult.status === 0 ? "Passed" : "Failed",
      details: `[Nx test output](${log}); exit code ${testResult.status}.`,
    });
  }

  const report = await writeReport(
    files,
    projects,
    rows,
    undefined,
    explanationLog,
    explanationWarning,
  );
  console.log(`Local PR report: ${report}`);
  if (rows.some((row) => row.status === "Failed" || row.status === "Blocked")) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
