---
order: 1.1
type: manual
entity: overview
title: Features
---

## Overview

### Features

* Simple and easy to use API
* Uses [gRPC](https://grpc.io/) and [Protocol Buffers](https://developers.google.com/protocol-buffers/) internally (recommended by Google)
* Typescript definitions for all [Google Ads API resources, enums and errors](https://developers.google.com/google-ads/api/reference/rpc/google.ads.googleads.v1.resources)

### Installation

```bash
$ yarn add google-ads-api
```

### Why does this library exist?

The official Google Ads client libraries are robust, but they don't always offer the most user-friendly developer interfaces, and their documentation can be confusing. 

This library aims to offer a better way to use the Google Ads API. 

-   [`google-ads-node`](https://github.com/Opteo/google-ads-node) is a low-level Node implementation of the API which imitates the stucture of the other client libraries.
-   `google-ads-api` (this library) is a wrapper around `google-ads-node` to provide a better developer experience.

