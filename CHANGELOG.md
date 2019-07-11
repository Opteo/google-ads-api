# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.


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
