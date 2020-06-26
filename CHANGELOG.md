# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [3.7.4](https://github.com/Opteo/google-ads-api/compare/v3.7.3...v3.7.4) (2020-06-26)



## [3.7.3](https://github.com/Opteo/google-ads-api/compare/v3.7.2...v3.7.3) (2020-06-25)



## [3.7.2](https://github.com/Opteo/google-ads-api/compare/v3.7.1...v3.7.2) (2020-06-23)


### Bug Fixes

* **docs:** show correct numbers for enums, fixes [#78](https://github.com/Opteo/google-ads-api/issues/78) and [#120](https://github.com/Opteo/google-ads-api/issues/120) ([90e85d1](https://github.com/Opteo/google-ads-api/commit/90e85d1))



## [3.7.1](https://github.com/Opteo/google-ads-api/compare/v3.7.0...v3.7.1) (2020-06-12)


### Bug Fixes

* **report:** ensure summary row is at the end of results when over page size ([9edac85](https://github.com/Opteo/google-ads-api/commit/9edac85))



# [3.7.0](https://github.com/Opteo/google-ads-api/compare/v3.6.2...v3.7.0) (2020-06-05)


### Bug Fixes

* **tests:** removed unreliable summary row test ([c51c318](https://github.com/Opteo/google-ads-api/commit/c51c318))


### Features

* **customer:** added createCustomerClient method ([#130](https://github.com/Opteo/google-ads-api/issues/130)) ([c054406](https://github.com/Opteo/google-ads-api/commit/c054406))
* **customer:** added listAccessibleCustomers method ([#132](https://github.com/Opteo/google-ads-api/issues/132)) ([a8e8d3d](https://github.com/Opteo/google-ads-api/commit/a8e8d3d))
* **reporting:** added support for specifying summary row setting ([#134](https://github.com/Opteo/google-ads-api/issues/134)) ([ce36202](https://github.com/Opteo/google-ads-api/commit/ce36202))



## [3.6.2](https://github.com/Opteo/google-ads-api/compare/v3.6.1...v3.6.2) (2020-05-28)



## [3.6.1](https://github.com/Opteo/google-ads-api/compare/v3.6.0...v3.6.1) (2020-04-20)


### Bug Fixes

* **deps:** updated google-ads-node to 1.15.2 ([#119](https://github.com/Opteo/google-ads-api/issues/119)) ([034e6b0](https://github.com/Opteo/google-ads-api/commit/034e6b0))



# [3.6.0](https://github.com/Opteo/google-ads-api/compare/v3.5.2...v3.6.0) (2020-04-09)


### Features

* Google Ads API v3 update ([#117](https://github.com/Opteo/google-ads-api/issues/117)) ([46fc5e9](https://github.com/Opteo/google-ads-api/commit/46fc5e9)). https://developers.google.com/google-ads/api/docs/release-notes
* Support for new `customer.reportStream()`, which uses GRPC streaming instead of pagination.
* Support for generics in `customer.report()`, and `customer.reportStream()`.
* Support for the conversion upload service.
* Export new `libTypes` variable containing typescript interfaces for library functions.
* Updated docs on http://opteo.com/dev/google-ads-api.
* New examples directory.



## [3.5.2](https://github.com/Opteo/google-ads-api/compare/v3.5.1...v3.5.2) (2020-03-11)


### Bug Fixes

* lock google-ads-node version to keep using v2 of the API for now ([384ea71](https://github.com/Opteo/google-ads-api/commit/384ea71))



## [3.5.1](https://github.com/Opteo/google-ads-api/compare/v3.5.0...v3.5.1) (2020-02-21)



# [3.5.0](https://github.com/Opteo/google-ads-api/compare/v3.4.3...v3.5.0) (2019-11-25)


### Features

* **client:** support for prevent mutations & logging from google-ads-node ([#91](https://github.com/Opteo/google-ads-api/issues/91)) ([4079f1b](https://github.com/Opteo/google-ads-api/commit/4079f1b))
* **services:** added recommendation service methods ([#84](https://github.com/Opteo/google-ads-api/issues/84)) ([e9a8c7d](https://github.com/Opteo/google-ads-api/commit/e9a8c7d))



## [3.4.3](https://github.com/Opteo/google-ads-api/compare/v3.4.2...v3.4.3) (2019-10-22)


### Bug Fixes

* **parsing:** fix for [#79](https://github.com/Opteo/google-ads-api/issues/79), where url_custom_parameters was incorrectly parsed ([cb45781](https://github.com/Opteo/google-ads-api/commit/cb45781))



## [3.4.2](https://github.com/Opteo/google-ads-api/compare/v3.4.1...v3.4.2) (2019-09-30)



## [3.4.1](https://github.com/Opteo/google-ads-api/compare/v3.4.0...v3.4.1) (2019-09-24)



# [3.4.0](https://github.com/Opteo/google-ads-api/compare/v3.2.1...v3.4.0) (2019-09-10)


### Bug Fixes

* **keyword plan:** types, parsing + tests ([e59e3fb](https://github.com/Opteo/google-ads-api/commit/e59e3fb))


### Features

* **keyword plans:** support for forecast and historical metrics ([2485a3a](https://github.com/Opteo/google-ads-api/commit/2485a3a))



## [3.2.1](https://github.com/Opteo/google-ads-api/compare/v3.2.0...v3.2.1) (2019-08-29)


### Bug Fixes

* **billingSetups:** removed billingSetups.update, which isn't supported by the Google Ads API. ([04e6b01](https://github.com/Opteo/google-ads-api/commit/04e6b01))
* **build:** allow { esModuleInterop: false } in tsconfig when using this library ([1050ff4](https://github.com/Opteo/google-ads-api/commit/1050ff4))



# [3.2.0](https://github.com/Opteo/google-ads-api/compare/v2.3.0...v3.2.0) (2019-08-14)


### Bug Fixes

* **parsing:** upgrade all dependencies including google-ads-node to fix [#67](https://github.com/Opteo/google-ads-api/issues/67) ([20610c2](https://github.com/Opteo/google-ads-api/commit/20610c2))


# [3.1.0] (2019-07-15)


### Bug Fixes

* **biddingStrategies:** Fixed typo. Mutations of bidding strategies should now work. Thanks @nsberndt! ([#64](https://github.com/Opteo/google-ads-api/pull/64)) 


### Features

* **Ads:** Allow editing ads without wiping their stats using `customer.ads.update()` ([#65](https://github.com/Opteo/google-ads-api/pull/65))



# 3.0.0 (2019-07-11)


### Breaking Changes

* **breaking:** Support for the new version of the Google Ads API, v2. Here are google's  migration docs: https://developers.google.com/google-ads/api/docs/migration-v1-v2
* **breaking:** Simplified our parsing of arrays in query/report responses. For example, `final_urls : [{ value : 'hello.com' }]` will now by `final_urls : [ 'hello.com' ]`.

### Features

* **Better errors for partial_failure**: When using `partial_failure = true`, the response object will now contain an `errors` array containing any errors your operations may have encountered.


# [2.3.0](https://github.com/Opteo/google-ads-api/compare/v2.2.0...v2.3.0) (2019-06-14)


### Features

* **api:** Update api to v1.3  ([#53](https://github.com/Opteo/google-ads-api/issues/53)) ([7f6a7aa](https://github.com/Opteo/google-ads-api/commit/7f6a7aa))



# [2.2.0](https://github.com/Opteo/google-ads-api/compare/v2.1.1...v2.2.0) (2019-05-29)


### Bug Fixes

* **report:** make sure that we respect google's snakeCase method for parsing results ([#56](https://github.com/Opteo/google-ads-api/issues/56)) ([0e7e5c1](https://github.com/Opteo/google-ads-api/commit/0e7e5c1))


### Features

* **report:** automatically add quotes around constraint values ([#54](https://github.com/Opteo/google-ads-api/issues/54)) ([5563a72](https://github.com/Opteo/google-ads-api/commit/5563a72))



## [2.1.1](https://github.com/Opteo/google-ads-api/compare/v2.1.0...v2.1.1) (2019-05-21)


### Bug Fixes

* **grpc:** fixed issues [#46](https://github.com/Opteo/google-ads-api/issues/46) and [#51](https://github.com/Opteo/google-ads-api/issues/51) by updating google-ads-node ([01da47e](https://github.com/Opteo/google-ads-api/commit/01da47e))



# [2.1.0](https://github.com/Opteo/google-ads-api/compare/v1.6.1...v2.1.0) (2019-05-20)


### Bug Fixes

* **npm:** remove examples directory and unused dependency ([8ad1366](https://github.com/Opteo/google-ads-api/commit/8ad1366))
* **report:** Fixed issue with pagination cutting off results when no limit is set ([#49](https://github.com/Opteo/google-ads-api/issues/49)) ([07023f4](https://github.com/Opteo/google-ads-api/commit/07023f4))


### Features

* **API:** Google ads api v1.2 ([#47](https://github.com/Opteo/google-ads-api/issues/47)) ([110b150](https://github.com/Opteo/google-ads-api/commit/110b150))
* **docs:** metadata in <head> ([#45](https://github.com/Opteo/google-ads-api/issues/45)) ([361c5a5](https://github.com/Opteo/google-ads-api/commit/361c5a5))



# 2.0.0 (2019-05-16)


### Breaking Changes

* **breaking:** renamed customer.adGroupCriterion to customer.adGroupCriteria
* **breaking:** renamed customer.biddingStrategys to customer.biddingStrategies
* **breaking:** renamed customer.campaignCriterion to customer.campaignCriteria
* **breaking:** renamed customer.customerNegativeCriterions to customer.customerNegativeCriteria
* **breaking:** renamed customer.sharedCriterion to customer.sharedCriteria
* **breaking:** removed all customer.somethingView services because they don't actually offer any useful functionality

### Features

* **New docs**: New docs published at https://opteo.com/dev/google-ads-api


### Bug Fixes

* **fix(mutations)**: single-entity creates and updates now work correctly for MerchantCenterLink, CustomerClientLink, AccountBudgetProposal, and BillingSetup. Attempts at using an array of entities to mutate will now result in an error.
* **fix(services)**: Fixed CustomerManagerLink create and update operations, which were failing due to a typo.


# [1.5.0](https://github.com/Opteo/google-ads-api/compare/v1.4.0...v1.5.0) (2019-04-30)


### Bug Fixes

* **utils:** added missing single object constraint implementation ([adf3cd0](https://github.com/Opteo/google-ads-api/commit/adf3cd0))


### Features

* **customer:** added global, atomic mutate method `customer.mutateResources()` ([db6ef9a](https://github.com/Opteo/google-ads-api/commit/db6ef9a))
* **reporting:** allow passing contraints as an object for report() function ([7513081](https://github.com/Opteo/google-ads-api/commit/7513081))



# [1.4.0](https://github.com/Opteo/google-ads-api/compare/v1.3.0...v1.4.0) (2019-04-17)


### Features

* **errors:** added support for error field location ([8c77ac5](https://github.com/Opteo/google-ads-api/commit/8c77ac5))



# [1.3.0](https://github.com/Opteo/google-ads-api/compare/v1.2.2...v1.3.0) (2019-04-16)


### Bug Fixes

* **utils:** better error message when 'val' field is undefined ([#18](https://github.com/Opteo/google-ads-api/issues/18)) ([fbf0647](https://github.com/Opteo/google-ads-api/commit/fbf0647))
* **utils:** even better error for val undefined in constraints ([196f506](https://github.com/Opteo/google-ads-api/commit/196f506))
* **utils:** removed bad commits from another branch ([e9da5c7](https://github.com/Opteo/google-ads-api/commit/e9da5c7))


### Features

* **errors:** removed unused error codes to make errors smaller ([5e525ff](https://github.com/Opteo/google-ads-api/commit/5e525ff))
* **utils:** added support for single constraint object ([a250364](https://github.com/Opteo/google-ads-api/commit/a250364))



## [1.2.2](https://github.com/Opteo/google-ads-api/compare/v1.2.1...v1.2.2) (2019-04-12)


### Bug Fixes

* **services:** Correctly parse enums to avoid "resource field missing" errors ([82e4ecc](https://github.com/Opteo/google-ads-api/commit/82e4ecc))



## [1.2.1](https://github.com/Opteo/google-ads-api/compare/v1.2.0...v1.2.1) (2019-04-08)



# [1.2.0](https://github.com/Opteo/google-ads-api/compare/v1.0.2...v1.2.0) (2019-04-02)


### Bug Fixes

* **constraints:** translate enum values to corresponding key (string) value ([1e3725f](https://github.com/Opteo/google-ads-api/commit/1e3725f))


### Features

* **api:** added support for google ads api v1.1.0 ([eac2784](https://github.com/Opteo/google-ads-api/commit/eac2784))



## [1.0.2](https://github.com/Opteo/google-ads-api/compare/v1.0.1...v1.0.2) (2019-04-01)


### Bug Fixes

* **deps:** added missing request package ([a4f754f](https://github.com/Opteo/google-ads-api/commit/a4f754f))
* **deps:** update yarn.lock ([73c5e56](https://github.com/Opteo/google-ads-api/commit/73c5e56))



<a name="1.0.1"></a>

## [1.0.1](https://github.com/Opteo/google-ads-api/compare/v1.0.0...v1.0.1) (2019-04-01)

### Bug Fixes

-   **services:** fixed mutates for services using word "criterion"
