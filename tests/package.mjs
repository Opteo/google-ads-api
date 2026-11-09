import assert from "node:assert/strict";
import { createRequire } from "node:module";
import * as esm from "google-ads-api";
import { GoogleAdsApi, enums, googleAdsVersion } from "google-ads-api";
import { enums as enumsSubpath } from "google-ads-api/enums";
import * as fieldsModule from "google-ads-api/fields";
import { fields } from "google-ads-api/fields";

assert.equal(typeof GoogleAdsApi, "function");
assert.match(googleAdsVersion, /^v\d+$/);
assert.equal(enumsSubpath, enums);
assert.equal(typeof enums.AdvertisingChannelType.SEARCH, "number");
assert.equal(typeof fields, "object");

const require = createRequire(import.meta.url);
assert.equal(require("google-ads-api"), esm);
assert.equal(require("google-ads-api/enums").enums, enums);
assert.equal(require("google-ads-api/fields"), fieldsModule);
assert.equal(require("google-ads-api/package.json").name, "google-ads-api");
assert.throws(() => require("google-ads-api/build/version.js"), {
  code: "ERR_PACKAGE_PATH_NOT_EXPORTED",
});
