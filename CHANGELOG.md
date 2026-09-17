# Changelog

### 25.1.0

### Version Upgrade

- Upgraded google-ads-api version to v25.1. Refer to Google Ads release notes [here](https://developers.google.com/google-ads/api/docs/release-notes) for changes.
- Upgraded google-ads-node dependency to v25.1.0
- Upgraded google-gax dependency to v6.3.0 and google-auth-library to v11
- Service clients are pinned to the `googleapis.com` universe domain, so the new auth stack does not probe for application default credentials (about three seconds per new service client, plus a `MetadataLookupWarning` outside Google Cloud) when a service is first created

### New Features

- The package ships CommonJS and ES module builds with an `exports` map: `import { GoogleAdsApi } from "google-ads-api"` resolves to native ESM and `require("google-ads-api")` to CommonJS.
- Loading both flavours in one process yields two module instances with separate service caches; proto message and error classes come from google-ads-node and stay shared, so `instanceof` checks keep working across them.
- New subpath entries `google-ads-api/enums` and `google-ads-api/fields` expose the generated enums and field types without loading the gRPC service clients.
- `googleAdsVersion` is exported from the package root.
- New `grpc_channel_options` client option forwards gRPC channel settings such as keepalive to every service client; cached service clients are keyed by client id, refresh token and these options (#547).
- New service: `MultiPartyAuthReviewService`
- New resource names: `LiftMeasurementAgeRange`, `LiftMeasurementCampaign`, `LiftMeasurementConfig`, `LiftMeasurementDevice`, `LiftMeasurementFlight`, `LiftMeasurementGender`, `LiftMeasurementVideo`, `MultiPartyAuthReview`
- New enums include `AdSubFormatType`, `BrandLiftMeasurementType`, `LiftMetricType`, `LoyaltyMembership`, `MultiPartyAuthReviewStatus`, `Sentiment`, `SyntheticContentSource` and `ThirdPartyConversionAttributionIntegrationPartner`

### Breaking Changes

- Node.js 22 or newer is required.
- Deep imports of build files (for example `google-ads-api/build/src/protos/autogen/enums`) no longer resolve. Use the package root, `google-ads-api/enums` or `google-ads-api/fields` instead.
- TypeScript projects on `moduleResolution: node` (node10) cannot type-resolve the `google-ads-api/enums` and `google-ads-api/fields` subpaths; use `node16`, `nodenext` or `bundler`.
- Removed services and resources: `CampaignLifecycleGoalService`, `CustomerLifecycleGoalService`, `CampaignLifecycleGoal`, `CustomerLifecycleGoal` (use `Goal`). Removed enum: `CustomerAcquisitionOptimizationMode`.

### Fixes

- `getGoogleAdsError()` no longer throws a `TypeError` when an error carries no `GoogleAdsFailure` trailer (for example REST-style `google.rpc.ErrorInfo` errors such as `SERVICE_DISABLED`); the original error is returned instead (#548).
- google-ads-api does not pin `jws`; a fresh install of this release resolves `jws` 4.0.1, which addresses the advisory reported in #529. Refresh your lockfile if it still holds 4.0.0.

### 24.1.0

### Version Upgrade

- Upgraded google-ads-api version to v24.1. Refer to Google Ads release notes [here](https://developers.google.com/google-ads/api/docs/release-notes) for changes.
- Upgraded google-ads-node dependency to v24.1.0
- Upgraded google-gax dependency to v5.0.7
- @isaacs/ttlcache now requires ^1.4.0

### New Features

- New services: `ReservationService`, `YouTubeVideoUploadService`
- New resource names: `AppTopCombinationView`, `CartDataSalesView`, `VideoEnhancement`, `YouTubeVideoUpload`
- New enums include `ReservationRequestType`, `PreviewType`, and new `ExperimentType` values (`ADOPT_AI_MAX`, `ADOPT_BROAD_MATCH_KEYWORDS`, `OPTIMIZE_ASSETS`, `PMAX_REPLACEMENT_SHOPPING`)
- New v24.1 fields such as `segments.mobile_device_platform` and `customer_user_access.passkey_enabled`

### Breaking Changes

- `parse()` now returns plain objects for message-typed leaves (e.g. `change_event.old_resource`) instead of protobuf message instances, and converts all nested int64 values from Long objects to JavaScript numbers. Code reading `.low`/`.high` from nested values, or relying on protobuf prototypes, must use the plain values instead. Note that int64 values above `Number.MAX_SAFE_INTEGER` (2^53 - 1) lose precision when converted, consistent with the existing behaviour for directly-selected fields.

### Fixes

- `resource_name` attributes for ten view resources (including `keyword_view` and `paid_organic_search_term_view`) were missing from parsed results due to a code generation bug; they are now included.
- `getFieldMask()` now throws a descriptive `Error` on objects containing circular references instead of overflowing the stack, and treats typed arrays (`Buffer`, `Uint8Array`) and `Long` values as leaf values. Previously, update masks built from payloads containing `Long` values included invalid `.low`/`.high`/`.unsigned` paths that the API rejected.
- Report streams now destroy their underlying response stream and JSON parser when consumers exit iteration early
- Rejected `close()` calls during gRPC service cache eviction are now caught instead of surfacing as unhandled promise rejections (the dispose callback was previously `async` and fire-and-forget)
- Cached gRPC service clients past their TTL are no longer returned, and expired entries awaiting purge no longer resolve to `undefined`
- `listAccessibleCustomers()` closes its one-shot `CustomerServiceClient` after the call instead of caching it

### 23.0.0

### Version Upgrade

- Upgraded google-ads-api version to v23. Refer to Google Ads release notes [here](https://developers.google.com/google-ads/api/docs/release-notes) for changes.
- Upgraded google-ads-node dependency to v23.0.0 (now aligned with Google Ads API versioning)

### 22.0.0

### Version Upgrade

- Upgraded google-ads-api version to v22. Refer to Google Ads release notes [here](https://developers.google.com/google-ads/api/docs/release-notes) for changes.
- Upgraded google-ads-node dependency to v19.0.0
- Upgraded google-gax dependency to v5.0.6

### New Features

- New service: `AssetGenerationService` with `generateText` method
- New resource names: `CampaignGoalConfig`, `Goal`, `TargetingExpansionView`
- New enums: `YouTubeVideoProperty`, `CustomerLifecycleOptimizationMode`, `GoalOptimizationEligibility`, `GoalType`

### Breaking Changes

- Removed field: `asset_group_asset.performance_label`

### Performance

- Optimised `decamelizeKeys` in REST response parsing, removed `map-obj` dependency

### 21.0.1

- Fixed issue with new v21 resources & fields not being correctly parsed.

### 21.0.0

### Version Upgrade

- Upgraded google-ads-api version to v21. Refer to Google ads release notes [here](https://developers.google.com/google-ads/api/docs/release-notes) for changes.
- Upgraded google-ads-node dependency to v18.0.0

### Bug Fixes

- Fixed parsing of FieldMask fields (like `changed_fields`) in REST API responses ([#519](https://github.com/Opteo/google-ads-api/issues/519))
  - REST API returns FieldMask fields as comma-separated strings (e.g., `"field1,field2"`) which were not being properly parsed
  - Now correctly converts them to objects with a `paths` array format: `{ paths: ["field1", "field2"] }`
  - Handles case conversion from camelCase to snake_case to maintain consistency with the rest of the library
  - Properly processes nested paths (e.g., `"ipBlock.ipAddress"` → `"ip_block.ip_address"`)
  - The `changed_fields` field now works correctly and follows the same naming conventions as the rest of the library

### Library Changes

- Updated enum definitions to support Google Ads API v21 changes
- Enhanced parser test coverage with additional test cases for change events and FieldMask fields
- Added `skipLibCheck` to TypeScript configuration for faster compilation
- Added prettier configuration for consistent code formatting

### 20.0.1

### Version Upgrade

- Upgraded google-ads-api version to v20. Refer to Google ads release notes [here](https://developers.google.com/google-ads/api/docs/release-notes) for changes.

### REST API

- This library now uses the REST API for report, reportStream, search and searchStream. This will result in minor breaking changes to reporting calls:

- Fields with the enum value `0` will now be `undefined` instead
- Array-fields (such as `final_urls`) with the value `[]` will now be `undefined` instead

While these changes are inconvenient, the performance of the REST api is significantly better than the gRPC api, particularly for responses with many rows.

### 19.1.0

### Version Upgrade

- Upgraded google-ads-api version to v19.1. Refer to Google ads release notes [here](https://developers.google.com/google-ads/api/docs/release-notes) for changes.

### 19.0.2

- Fix issue with reportCount() not giving the correct total results count.

## 19.0.1

- Fix issue with type interface for search_settings not showing any valid fields.

## 19.0.0

### Version Upgrade

- Upgraded google-ads-api version to v19. Refer to Google ads release notes [here](https://developers.google.com/google-ads/api/docs/release-notes) for changes.

### Library Changes

- We currently do not support `return_total_results_count` on search_settings for SearchGoogleAdsRequest. Please use `reportCount()` instead. This has been reflected in the `RequestOptions` type:

```ts
export type RequestOptions = Omit<
  services.ISearchGoogleAdsRequest,
  "customer_id" | "query" | "search_settings"
> & {
  search_settings?: Omit<
    services.ISearchSettings,
    "return_total_results_count"
  >;
};
```

For more information please see the `SearchSettings` reference on the Google document [here](https://developers.google.com/google-ads/api/reference/rpc/v19/SearchSettings).
