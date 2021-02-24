import { compileEnums } from "./enums";
import { compileFields } from "./fields";
import { compileResourceNameFunctions } from "./resourceName";
import { compileServices } from "./services";

const scripts = {
  enums: compileEnums,
  fields: compileFields,
  resourceNames: compileResourceNameFunctions,
  services: compileServices,
};

const args = process.argv.slice(2);
let onlyRun: null | keyof typeof scripts = null;

if (args.length > 0 && args?.[0] === "--only") {
  const entry = args?.[1];
  if (!Object.keys(scripts).includes(entry)) {
    console.log(
      `--only argument must be one of "${Object.keys(scripts).join('", "')}"`
    );
    process.exit(1);
  }
  onlyRun = entry as any;
}

async function compileAll(): Promise<void> {
  if (onlyRun) {
    console.log(`compiling only "${onlyRun}"`);
    await scripts[onlyRun]();
  } else {
    console.log("compiling all scripts");
    for (const script of Object.values(scripts)) {
      console.log(script);
      await script();
    }
  }
}

compileAll();
