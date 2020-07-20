---
order: 1.1
type: manual
entity: overview
title: Features
---

## Overview

### Features

* Simple and easy-to-use API
* Uses [gRPC](https://grpc.io/) and [Protocol Buffers](https://developers.google.com/protocol-buffers/) internally (recommended by Google)
* Typescript definitions for all [Google Ads API resources, enums, and errors](https://developers.google.com/google-ads/api/reference/rpc/google.ads.googleads.v1.resources)

### Installation

```bash
$ yarn add google-ads-api
```

### Why does this library exist?

The official Google Ads client libraries are robust, but they don't always offer the most user-friendly developer interfaces, and their documentation can be confusing. 

This library aims to offer a better way to use the Google Ads API. 

-   **[google-ads-node](https://github.com/Opteo/google-ads-node)** is a low-level Node implementation of the API, which imitates the stucture of the other client libraries.
-   **[google-ads-api](https://github.com/Opteo/google-ads-api)** (this library) is a wrapper around `google-ads-node` to provide a better developer experience.

### Google Ads API versions

We aim to release new versions of this library within a few weeks of [new API versions](https://developers.google.com/google-ads/api/docs/release-notes) becoming available. These are the releases so far:
- **v4.0 of the official google ads API**: Versions `4.0.0` and above of this library
- **v3.0 of the official google ads API**: Versions `3.6.0` to `3.7.4` of this library
- **v2.0 of the official google ads API**: Versions `3.0.0` to `3.5.2` of this library
- **v1.3 of the official google ads API**: Versions `2.3.0` to `2.3.0` of this library
- **v1.2 of the official google ads API**: Versions `2.1.0` to `2.2.0` of this library
- **v1.1 of the official google ads API**: Versions `1.2.0` to `2.0.0` of this library
- **v1.0 of the official google ads API**: Versions `1.0.0` to `1.0.2` of this library  
