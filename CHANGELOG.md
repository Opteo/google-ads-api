# Changelog

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
