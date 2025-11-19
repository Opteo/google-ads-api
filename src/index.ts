// Core library client
export {
  ClientOptions,
  Client as GoogleAdsApi,
  OAuth2ClientOptions,
  ServiceAccountAuth,
  ServiceAccountClientOptions,
} from "./client";

// Re-export useful types from google-auth-library
export { JWT } from "google-auth-library";

// Compiled proto types
export {
  common,
  enums,
  errors,
  fields,
  longrunning,
  protobuf,
  resources,
  services,
} from "./protos/index";

// Util functions
export { parse } from "./parser";
export * as ResourceNames from "./protos/autogen/resourceNames";
export { fromMicros, toMicros } from "./utils";

// Util types
export { Customer } from "./customer";
export {
  Hooks,
  OnMutationEnd,
  OnMutationError,
  OnMutationStart,
  OnQueryEnd,
  OnQueryError,
  OnQueryStart,
  OnServiceEnd,
  OnServiceError,
  OnServiceStart,
  OnStreamError,
  OnStreamStart,
} from "./hooks";
export {
  Constraint,
  Constraints,
  CustomerOptions,
  MutateOperation,
  ReportOptions,
} from "./types";
