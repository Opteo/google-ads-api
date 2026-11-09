const assert = require("node:assert/strict");

const api = require("google-ads-api");
assert.equal(typeof api.GoogleAdsApi, "function");
assert.match(api.googleAdsVersion, /^v\d+$/);
assert.equal(require("google-ads-api/enums").enums, api.enums);
assert.equal(typeof require("google-ads-api/fields").fields, "object");
