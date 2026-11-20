import assert from "node:assert/strict";
import test from "node:test";
import { parseRunConf, selectApplication } from "../src/runconf.mjs";

test("parses application target, JVM entrypoint, and profiles", async () => {
  const applications = await parseRunConf(`
    applications {
      controlDataRegistration {
        target = "serve"
        mainClass = "com.example.RegistrationApp"
        profiles = ["DockerEnabled"]
      }
    }
  `);

  assert.deepEqual(applications.controlDataRegistration, {
    target: "serve",
    mainClass: "com.example.RegistrationApp",
    profiles: ["DockerEnabled"],
  });
});

test("rejects applications without a target", async () => {
  await assert.rejects(
    parseRunConf(`
      applications {
        api {}
      }
    `),
    /requires a non-empty 'target'/,
  );
});

test("requires explicit selection for multi-application modules", () => {
  assert.throws(
    () =>
      selectApplication(
        {
          api: { target: "serve-api" },
          worker: { target: "run-worker" },
        },
        undefined,
      ),
    /Select an application with --app/,
  );
});

test("selects the sole application by default", () => {
  assert.deepEqual(
    selectApplication({ api: { target: "serve" } }, undefined),
    { target: "serve" },
  );
});
