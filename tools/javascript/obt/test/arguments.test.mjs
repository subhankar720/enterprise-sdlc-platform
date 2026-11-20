import assert from "node:assert/strict";
import test from "node:test";
import { parseArguments } from "../src/arguments.mjs";

test("parses a project build command", () => {
  assert.deepEqual(parseArguments(["obt", "build", "feds/ors/etl"]), {
    operation: "build",
    projectId: "feds/ors/etl",
    application: undefined,
  });
});

test("parses an application selector", () => {
  assert.deepEqual(
    parseArguments(["obt", "run", "feds/ors/etl", "--app", "controlDataRegistration"]),
    {
      operation: "run",
      projectId: "feds/ors/etl",
      application: "controlDataRegistration",
    },
  );
});

test("rejects an application selector for build", () => {
  assert.throws(
    () => parseArguments(["obt", "build", "feds/ors/etl", "--app", "api"]),
    /only valid with the run operation/,
  );
});
