// Core library client
export { Client as GoogleAdsApi, ClientOptions } from "./client";

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
} from "./protos/index";

// Util functions
export { fromMicros, toMicros } from "./utils";
export * as ResourceNames from "./protos/autogen/resourceNames";

// Util types
export {
  CustomerOptions,
  ReportOptions,
  MutateOperation,
  Constraint,
  Constraints,
} from "./types";
export {
  Hooks,
  OnRequestStart,
  OnRequestError,
  OnRequestEnd,
  OnMutationStart,
  OnMutationError,
  OnMutationEnd,
} from "./hooks";
export { Customer } from "./customer";
