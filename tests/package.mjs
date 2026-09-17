import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { GoogleAdsApi, enums, googleAdsVersion } from "google-ads-api";
import { enums as enumsSubpath } from "google-ads-api/enums";
import { fields } from "google-ads-api/fields";

assert.equal(typeof GoogleAdsApi, "function");
assert.match(googleAdsVersion, /^v\d+$/);
assert.equal(enumsSubpath, enums);
assert.equal(typeof enums.AdvertisingChannelType.SEARCH, "number");
assert.equal(typeof fields, "object");

const require = createRequire(import.meta.url);
const cjs = require("google-ads-api");
assert.equal(typeof cjs.GoogleAdsApi, "function");
assert.equal(cjs.googleAdsVersion, googleAdsVersion);
assert.equal(require("google-ads-api/enums").enums, cjs.enums);
assert.equal(typeof require("google-ads-api/fields").fields, "object");
assert.equal(require("google-ads-api/package.json").name, "google-ads-api");
assert.throws(
  () => require("google-ads-api/build/cjs/version"),
  { code: "ERR_PACKAGE_PATH_NOT_EXPORTED" }
);
