import path from "path";

// Extra "../" at the start so the files are output into src, not build
const AUTO_GEN_DIRECTORY = "../../src/protos/autogen/";

export const FILES = {
  fields: path.join(__dirname, AUTO_GEN_DIRECTORY, "fields.ts"),
  enums: path.join(__dirname, AUTO_GEN_DIRECTORY, "enums.ts"),
  resourceNames: path.join(__dirname, AUTO_GEN_DIRECTORY, "resourceNames.ts"),
  services: path.join(__dirname, AUTO_GEN_DIRECTORY, "serviceFactory.ts"),
};
