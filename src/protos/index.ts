import allProtos, { protos } from "google-ads-node";
import { googleAdsVersion } from "../version";

// "as vN" is required to avoid type issues later on
export const VERSION = googleAdsVersion as "v17";

// -- Expose the googleads generated types --

// The namespace path is shortened for ease of use
export import common = protos.google.ads.googleads.v17.common;
export import errors = protos.google.ads.googleads.v17.errors;
export import resources = protos.google.ads.googleads.v17.resources;
export import services = protos.google.ads.googleads.v17.services;

// We compile enums ourselves, the Google ones should be used internally only
export import internalEnums = protos.google.ads.googleads.v17.enums;
export { enums } from "./autogen/enums";
export { fields } from "./autogen/fields";

// Common service used for report/query methods
export { GoogleAdsServiceClient } from "google-ads-node";

// -- Export some helper types used in internal functions --

// All service names e.g. GoogleAdsServiceClient, CampaignServiceClient...
export type AllServices = Omit<typeof allProtos, typeof VERSION>;
export type ServiceName = keyof Omit<typeof allProtos, typeof VERSION>;

// -- Expose some google protobuf helpers --
export import protobuf = protos.google.protobuf;
export import longrunning = protos.google.longrunning;
