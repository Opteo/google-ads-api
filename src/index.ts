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
export { parse } from "./parser";
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
} from "./hooks";
export { Customer } from "./customer";
