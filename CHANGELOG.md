# Changelog

### 26.1.0

A major release: Google Ads API v26.1, an ES module-only package, and fixes that change the shape of several methods. Every breaking change below says what to change in your code.

### Version Upgrade

- Upgraded google-ads-api version to v26.1. Refer to Google Ads release notes [here](https://developers.google.com/google-ads/api/docs/release-notes) for changes.
- Upgraded google-ads-node dependency to v26.1.0
- Upgraded google-gax dependency to v6.16.0 and google-auth-library to v11.3.3
- Upgraded stream-json to v3 (CVE-2026-71429, #554); the package now declares stream-chain as a dependency

### Breaking Changes

#### Packaging

- **ES modules only.** The package no longer ships a CommonJS build. `import { GoogleAdsApi } from "google-ads-api"` works as before. CommonJS code can still call `require("google-ads-api")`, `require("google-ads-api/enums")` and `require("google-ads-api/fields")`: Node.js loads the ES module through its built-in `require(esm)` support and returns the same module instance as `import`.
- **Requires Node.js 22.12 or newer**, the first 22.x release where `require(esm)` works without a flag.
- **Jest in CommonJS mode** must transform the ES module-only `stream-json` and `stream-chain` packages, or run in Jest's ESM mode:

  ```js
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "/node_modules/(stream-json|stream-chain)/.+\\.js$": ["ts-jest", { tsconfig: { allowJs: true } }],
  },
  transformIgnorePatterns: ["/node_modules/(?!(stream-json|stream-chain)/)"],
  ```

#### Mutations

- **Single-operation services take one resource.** The API accepts exactly one operation per request for `accountBudgetProposals`, `accountLinks`, `batchJobs`, `billingSetups`, `customerBudgetNetworkSettings`, `customerClientLinks`, `customers`, `customerSkAdNetworkConversionValueSchemas`, `customerUserAccesses` and `customerUserAccessInvitations`. Their `create`, `update` and `remove` helpers now take one resource (or one resource name for `remove`) instead of an array. These helpers never worked with an array (see Fixes), so call them once per resource:

  ```ts
  // 25.x
  await customer.customers.update([{ resource_name, tracking_url_template }]);
  // 26.x
  await customer.customers.update({ resource_name, tracking_url_template });
  ```

- **Mutation hooks receive `mutateOptions`.** `onMutationStart`, `onMutationEnd` and `onMutationError` get the effective mutate options (`validate_only`, `partial_failure`, `response_content_type`) on every path, including changes made with `editOptions`. For `mutateResources` the hooks previously received only the operations array, so a hook could not tell a `validate_only` dry run from a real mutation. Read the options from `mutateOptions` instead of `mutation` or `mutations`:

  ```ts
  // 25.x: always undefined for mutateResources
  const dryRun = options.isServiceCall
    ? options.mutation.validate_only
    : options.mutations.validate_only;
  // 26.x
  const dryRun = options.mutateOptions.validate_only;
  ```

  `BaseMutationHookArgs` requires `mutateOptions`, so code that builds hook arguments itself (for example in tests) must include it. `mutateResources` no longer writes `editOptions` changes into the options object the caller passed in.

- Helpers for services without mutate options (`batchJobs`, `billingSetups`, `customerUserAccesses`, `customerUserAccessInvitations`) type their `options` parameter as `Record<string, never>` instead of `never`.

- **Update helpers build the update mask from the object you pass.** `customer.campaigns.update([{ resource_name, url_custom_parameters: [] }])` now clears `url_custom_parameters`; previously the mask dropped the empty list and the update changed nothing. As with `mutateResources`, every key of a plain object goes into the mask, so the API now rejects a key that names no field of the resource instead of silently ignoring it. Message instances (`new resources.Campaign({...})`) behave as before: their unset repeated fields stay out of the mask, so clear a list by passing a plain object.

#### Queries and streams

- **Stream methods take only the options searchStream accepts.** `SearchGoogleAdsStreamRequest` has no `page_token`, `page_size`, `validate_only` or `search_settings`, so `queryStream` now takes `StreamRequestOptions`, and `reportStream` and `reportStreamRaw` take `ReportStreamOptions` (report options plus `summary_row_setting`). `onStreamStart`'s `editOptions` takes `StreamRequestOptions`. Request a summary row in a stream with `summary_row_setting`:

  ```ts
  // 25.x: sent search_settings to searchStream, which does not take it
  customer.reportStream({
    entity: "campaign",
    metrics,
    search_settings: { return_summary_row: true },
  });
  // 26.x
  customer.reportStream({
    entity: "campaign",
    metrics,
    summary_row_setting: enums.SummaryRowSetting.SUMMARY_ROW_WITH_RESULTS,
  });
  ```

- **`query` and `report` send `page_token` and `validate_only` to `search`.** Both went to `searchStream`, which supports neither. A `validate_only` query now validates the query, and a `page_token` query starts from that page.
- **REST results parse repeated enum and INT64 fields.** Each element of a repeated enum now parses to its enum number and each element of a repeated INT64 to a number, matching scalar fields and gRPC results. For example `campaign.excluded_parent_asset_field_types` returns `[13]` instead of `["SITELINK"]`, and `campaign.shopping_setting.advertising_partner_ids` returns `[123]` instead of `["123"]`. Compare against `enums` values instead of strings.

- **`max_reporting_rows` applies to `query` and `report`.** Both counted rows only approximately (or, for paginated searches, not at all), so queries returned results above the cap. They now throw the same `Exceeded the maximum number of rows set by "max_reporting_rows"` error as `queryStream` and `reportStream` once the decoded rows exceed the cap. A GAQL `LIMIT` still bypasses the cap.
- **REST errors become `GoogleAdsFailure`s only when the API says so.** `query`, `report` and the stream methods look for the error detail whose `@type` names `GoogleAdsFailure`, wherever it sits in `details`. Other errors, such as `google.rpc.ErrorInfo` with `SERVICE_DISABLED`, became an empty `GoogleAdsFailure` (`errors: []`, no message). They now surface as the original error: the axios error for `search`, or an `Error` with the API message and the error body as `cause` for streamed responses. Code that relied on `instanceof errors.GoogleAdsFailure` for these errors must handle a plain `Error`.

#### Service methods

- **Paginated methods return one page as the RPC response.** `keywordPlanIdeas.generateKeywordIdeas`, `batchJobs.listBatchJobResults`, `campaignDrafts.listCampaignDraftAsyncErrors` and `experiments.listExperimentAsyncErrors` returned an array of every result across all pages, while their types promised the response message. They now return the response message for one page, with `results` (or `errors`), `next_page_token` and fields such as `total_size` and `aggregate_metric_results` that the array dropped. Pass `page_token` to fetch the next page:

  ```ts
  // 25.x: an array, despite the declared response type
  const ideas = await customer.keywordPlanIdeas.generateKeywordIdeas(request);
  // 26.x
  const ideas = [];
  let page_token: string | undefined;
  do {
    const response = await customer.keywordPlanIdeas.generateKeywordIdeas({
      ...request,
      page_token,
    });
    ideas.push(...response.results);
    page_token = response.next_page_token || undefined;
  } while (page_token);
  ```

- **Long-running methods carry gax operation types.** `batchJobs.runBatchJob`, `campaignDrafts.promoteCampaignDraft`, `experiments.scheduleExperiment`, `experiments.promoteExperiment` and `offlineUserDataJobs.runOfflineUserDataJob` return google-gax's `LROperation<Result, Metadata>`, the object they always returned at runtime. `await operation.promise()` now type-checks; `longrunning.Operation` members such as `toJSON()` never existed on the returned object.
- **LocalServices getters have new names:** `customer.localsLeadServices` becomes `customer.localServicesLeads`, and the new `LocalServicesEligibilityService` lives at `customer.localServicesEligibilities`. The generator removed the first `Service` from the name instead of the trailing one.

#### Types and API

- `ClientOptions["developer_token"]` now has the type `string | undefined`. TypeScript code that reads the option back as a `string` needs a guard or a default.
- Removed fields: the hotel criteria on `ad_group_bid_modifier` (`hotel_advance_booking_window`, `hotel_check_in_date_range`, `hotel_check_in_day`, `hotel_date_selection_type`, `hotel_length_of_stay`) and `customer.conversion_tracking_setting.enhanced_conversions_for_leads_enabled`.

### New Features

- `developer_token` becomes optional (#550, #553). Google sunset developer tokens on 9 September 2026: API access levels now belong to the Google Cloud project that owns your OAuth client, and the API ignores the token. When the option holds nothing, an empty string or only whitespace, the client sends no `developer-token` header. Previously an unset token went out as the string `"undefined"` and the API rejected an empty one with `DEVELOPER_TOKEN_PARAMETER_MISSING`. Configurations that pass a token behave as before; Google will reject the header in a future major API version, so remove it when convenient.
- Mutation hooks receive `mutateOptions` (see Breaking Changes).
- New exported types: `StreamRequestOptions` and `ReportStreamOptions`.
- New services: `CustomerBudgetNetworkSettingService`, `LocalServicesEligibilityService`
- New resource names: `CustomerBudgetNetworkSetting`, `SearchLiftKeywordBundle`
- New enums include `BenchmarksCustomerPercentileTier`, `BudgetNetworkIneligibleReason`, `ChannelPriorityTier`, `DateSelectionType`, `NetworkChannelType`, `OfflinePromotionCodeType`, `ReachMetricState`, `SearchLiftKeywordBundleStatus` and `YouTubeVideoUploadGenerativeContentDisclosure`

### Fixes

- Mutate helpers for single-operation services send their operation. They sent it as `operations`, which these requests do not have, so serialisation dropped the mutation and the API received only `customer_id` (#289, #316, #501, #518).
- `mutateResources` keeps `exempt_policy_violation_keys` when the mutation omits `operation`. Omitting it means `create`, but the library only forwarded the keys for an explicit `operation: "create"`.
- A REST error without failure details (for example a plain `PERMISSION_DENIED`) now surfaces as the original error instead of becoming `TypeError: Cannot read properties of undefined (reading '0')`.
- REST results keep numeric enum values. A field that arrived as a number (`status: 2`, or a value this version does not know such as `999`) became `undefined`; the parser now keeps the number, as protobuf decoding does.
- Every gRPC call gets its own metadata. Without a developer token, login customer id or linked customer id, google-gax handed calls on methods with no routing header one shared metadata object, so instrumentation that edits metadata in place (OpenTelemetry, dd-trace) carried trace headers and baggage from one call into the next.
- The lockfile resolves patched `@grpc/grpc-js` (1.14.7), `follow-redirects`, `brace-expansion` and `fast-uri`.

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
