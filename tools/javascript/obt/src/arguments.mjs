export function parseArguments(args) {
  if (args.length === 0 || args.includes("--help") || args.includes("-h")) {
    return { help: true };
  }

  if (args[0] !== "obt") {
    throw new Error("Expected the 'obt' command group.");
  }

  const [, operation, projectId, ...options] = args;
  if (!["build", "test", "run"].includes(operation)) {
    throw new Error("Expected an operation: build, test, or run.");
  }
  if (!projectId || projectId.startsWith("-")) {
    throw new Error("A project ID is required.");
  }

  let application;
  for (let index = 0; index < options.length; index += 1) {
    const option = options[index];
    if (option === "--app") {
      if (application || !options[index + 1] || options[index + 1].startsWith("-")) {
        throw new Error("--app requires one application name.");
      }
      application = options[index + 1];
      index += 1;
    } else if (option.startsWith("--app=")) {
      if (application || !option.slice("--app=".length)) {
        throw new Error("--app requires one application name.");
      }
      application = option.slice("--app=".length);
    } else {
      throw new Error(`Unknown option: ${option}`);
    }
  }

  if (operation !== "run" && application) {
    throw new Error("--app is only valid with the run operation.");
  }

  return { operation, projectId, application };
}
