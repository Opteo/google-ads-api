# Changelog

## 19.0.0

### Version Upgrade
- Upgraded google-ads-api version to v19. Refer to Google ads release notes [here](https://developers.google.com/google-ads/api/docs/release-notes) for changes.

### Library Changes
- We currently do not support `return_total_results_count` on search_settings for SearchGoogleAdsRequest. This has been reflected in the `RequestOptions` type

```ts
export type RequestOptions = Omit<
  services.ISearchGoogleAdsRequest,
  "customer_id" | "query" | "search_settings"
> & {
  search_settings?: Omit<
    services.SearchGoogleAdsRequest["search_settings"],
    "return_total_results_count"
  >;
};
```

For more information please see the `SearchSettings` reference on the Google document [here](https://developers.google.com/google-ads/api/reference/rpc/v19/SearchSettings).

### Upcoming Breaking Changes
For v20 this library will use the REST api for report, reportStream, search and searchStream - this may result in minor breaking changes that will be disclosed with that release.
