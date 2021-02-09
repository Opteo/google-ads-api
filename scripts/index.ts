import { compileEnums } from "./enums";
import { compileFields } from "./fields";
import { compileResourceNameFunctions } from "./resourceName";
import { compileServices } from "./services";

async function compileAll(): Promise<void> {
  compileEnums();
  await compileFields();
  await compileResourceNameFunctions();
  await compileServices();
}

compileAll();
