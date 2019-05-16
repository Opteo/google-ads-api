# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

# [1.6.0](https://github.com/Opteo/google-ads-api/compare/v1.5.0...v1.6.0) (2019-05-16)


### Bug Fixes

* **customer:** added customer interface type ([f275c53](https://github.com/Opteo/google-ads-api/commit/f275c53))
* **docs:** add path prefix to Gatsby ([10b3e13](https://github.com/Opteo/google-ads-api/commit/10b3e13))


### Features

* **docs:** better types for entity fields ([9753350](https://github.com/Opteo/google-ads-api/commit/9753350))
* **services:**  imporoved service generation. Still need to update test generation. Start of reference docs generation. ([4517ef6](https://github.com/Opteo/google-ads-api/commit/4517ef6))



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
