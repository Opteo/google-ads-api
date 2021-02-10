// Core library client
export { Client as GoogleAdsApi, ClientOptions } from "./client";

// Compiled proto types
export {
  common,
  enums,
  errors,
  resources,
  services,
  longrunning,
  protobuf,
} from "./protos/index";

// Util functions
export { fromMicros, toMicros } from "./utils";
export * as ResourceNames from "./protos/autogen/resourceNames";

// Util types
export { ReportOptions, MutateOperation } from "./types";
export { Customer, CustomerOptions, Hooks } from "./customer";
