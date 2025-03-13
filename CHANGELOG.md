# Changelog

### Upcoming Breaking Changes

From v20 onwards this library will use the REST api for report, reportStream, search and searchStream. This will result in minor breaking changes to reporting calls:

- Fields with the enum value `0` will now be `undefined` instead
- Array-fields (such as `final_urls`) with the value `[]` will now be `undefined` instead

While these changes are inconvenient, the performance of the REST api is significantly better than the gRPC api, particularly for responses with many rows.

To prepare for this change, we recommend you use the install the `19.0.0-rest-beta` version of this library and test your application with it.

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
