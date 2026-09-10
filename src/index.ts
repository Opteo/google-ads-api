// Core library client
export { Client as GoogleAdsApi, ClientOptions } from "./client.js";

// Compiled proto types
export {
  common,
  enums,
  fields,
  errors,
  resources,
  services,
  longrunning,
  protobuf,
} from "./protos/index.js";

// Util functions
export { fromMicros, toMicros } from "./utils.js";
export { parse } from "./parser.js";
export * as ResourceNames from "./protos/autogen/resourceNames.js";

// Util types
export {
  CustomerOptions,
  ReportOptions,
  MutateOperation,
  Constraint,
  Constraints,
} from "./types.js";
export {
  Hooks,
  OnQueryStart,
  OnQueryError,
  OnQueryEnd,
  OnStreamStart,
  OnStreamError,
  OnMutationStart,
  OnMutationError,
  OnMutationEnd,
  OnServiceStart,
  OnServiceError,
  OnServiceEnd,
} from "./hooks.js";
export { Customer } from "./customer.js";
