<p align="center" style="font-size:32px">
    Google Ads API
</p>

<p align="center">
  Unofficial Google Ads API client library for Node.js
</p>
<p align="center">
  <a href="https://developers.google.com/google-ads/api/docs/release-notes">
    <img src="https://img.shields.io/badge/google%20ads-v6-009688.svg?style=flat-square">
  </a>
  <a href="https://www.npmjs.com/package/google-ads-api">
    <img src="https://img.shields.io/npm/v/google-ads-api.svg?style=flat-square">
  </a>
  <a>
    <img src="https://img.shields.io/npm/dm/google-ads-api.svg?style=flat-square">
    </a>
  <a>
    <img src="https://img.shields.io/david/opteo/google-ads-api.svg?style=flat-square">
  </a>
</p>

<p align="center">
  <a href="https://opteo.com">
    <img src="https://app.opteo.com/icons/logo.svg">
  </a>
</p>

# Features

- Simple and easy to use API
- Uses [gRPC](https://grpc.io/) and [Protocol Buffers](https://developers.google.com/protocol-buffers/) internally (recommended by Google)
- Typescript definitions for all resources, enums, errors and services
- Provides all API functionality

> The Google Ads API is the new replacement to the AdWords API. Google will deprecate the AdWords API sometime in 2020.

# Installation

```bash
npm install google-ads-api
```

# Documentation

**Note:** Our documentation site is currently outdated (an older version of this library and the Google Ads API) but is still up. We're working on updating these docs soon.

---

### ➡️ [opteo.com/dev/google-ads-api](https://opteo.com/dev/google-ads-api)

---

For now we recommend following the usage examples below.

# Usage

- Setup
  - [Create a client](#create-a-client)
  - [Create a customer instance](#create-a-customer-instance)
  - [List accessible customers](#list-accessible-customers)
- Reporting
  - [Retrieve Campaigns with metrics](#retrieve-campaigns-with-metrics)
  - [Retrieve Campaigns using GAQL](#retrieve-campaigns-using-gaql)
  - [Retrieve Ad Group metrics by date](#retrieve-ad-group-metrics-by-date)
  - [Retrieve Keywords with streaming](#retrieve-keywords-with-streaming)
- Mutations
  - [Create an expanded text ad](#create-an-expanded-text-ad)
- Misc
  - [Resource Names](#resource-names)
  - [Query Hooks](#query-hooks)

## Create a client

```ts
import { GoogleAdsApi } from "google-ads-api";

const client = new GoogleAdsApi({
  client_id: "<CLIENT-ID>",
  client_secret: "<CLIENT-SECRET>",
  developer_token: "<DEVELOPER-TOKEN>",
});
```

## Create a customer instance

```ts
const customer = client.Customer({
  customer_id: "1234567890",
  refresh_token: "<REFRESH-TOKEN>",
});

// Also supports login & linked customer ids
const customer = client.Customer({
  customer_id: "1234567890",
  login_customer_id: "<LOGIN-CUSTOMER-ID>",
  linked_customer_id: "<LINKED-CUSTOMER-ID>",
  refresh_token: "<REFRESH-TOKEN>",
});
```

## List accessible customers

This is a special client method for listing the accessible customers for a given refresh token, and is equivalent to [CustomerService.listAccessibleCustomers](https://developers.google.com/google-ads/api/reference/rpc/v6/CustomerService#listaccessiblecustomers). It returns the resource names of available customer accounts.

```ts
const client = new GoogleAdsApi({
  client_id: "<CLIENT-ID>",
  client_secret: "<CLIENT-SECRET>",
  developer_token: "<DEVELOPER-TOKEN>",
});

const refreshToken = "<REFRESH-TOKEN">

const customers = await client.listAccessibleCustomers(refreshToken);
```

## Retrieve Campaigns with metrics

```ts
import { enums } from "google-ads-api";

const campaigns = await customer.report({
  entity: "campaign",
  attributes: [
    "campaign.id",
    "campaign.name",
    "campaign.bidding_strategy_type",
    "campaign_budget.amount_micros",
  ],
  metrics: [
    "metrics.cost_micros",
    "metrics.clicks",
    "metric.impressions",
    "metrics.all_conversions",
  ],
  constraints: {
    "campaign.status": enums.CampaignStatus.ENABLED,
  },
  limit: 20,
});
```

## Retrieve Campaigns using GAQL

If you prefer to use the [Google Ads Query Language](https://developers.google.com/google-ads/api/docs/query/overview) (GAQL) the `query` method is available. Internally `report` uses this function. [More GAQL examples can be found here](https://developers.google.com/google-ads/api/docs/query/cookbook).

```ts
const campaigns = await customer.query(`
  SELECT 
    campaign.id, 
    campaign.name,
    campaign.bidding_strategy_type,
    campaign_budget.amount_micros,
    metrics.cost_micros,
    metrics.clicks,
    metric.impressions,
    metrics.all_conversions,
  FROM 
    campaign
  WHERE
    campaign.status = "ENABLED"
  LIMIT 20
`);
```

## Retrieve Ad Group metrics by date

```ts
import { enums } from "google-ads-api";

const campaigns = await customer.report({
  entity: "ad_group",
  metrics: [
    "metrics.cost_micros",
    "metrics.clicks",
    "metric.impressions",
    "metrics.all_conversions",
  ],
  segments: ["segments.date"],
  from_date: "2021-01-01",
  to_date: "2021-02-01",
});
```

## Retrieve Keywords with streaming

Streaming is useful when you're dealing with >10k rows, as this is the page size for results.

<!-- prettier-ignore-start -->

```ts
import { enums } from "google-ads-api";

const stream = customer.reportStream({
  entity: "ad_group_criterion",
  attributes: [
    "ad_group_criterion.keyword.text", 
    "ad_group_criterion.status",
  ],
  constraints: {
    "ad_group_criterion.type": enums.CriterionType.KEYWORD,
  },
});

// Pages of rows are streamed in, each with a max size of 10k
for await (const rows of stream) {
    // Break the loop to stop streaming
    if(someLogic) {
        break
    }
}
```
<!-- prettier-ignore-end -->

## Create an expanded text ad

```ts
import { resources, enums, ResourceNames } from "google-ads-api";

const ad = new resources.Ad({
  expanded_text_ad: {
    headline_part1: "Cruise to Mars",
    headline_part2: "Best Space Cruise Line",
    description: "Buy your tickets now!",
    path1: "cruises",
    path2: "mars",
  },
  final_urls: ["https://example.com"],
  type: enums.AdType.EXPANDED_TEXT_AD,
});

const adGroup = ResourceNames.adGroup(cus.credentials.customerId, "123");

const adGroupAd = new resources.AdGroupAd({
  status: enums.AdGroupAdStatus.PAUSED,
  ad_group,
  ad,
});

// Returns an array of newly created resource names if successful
const { results } = await cus.adGroupAds.create([adGroupAd]);
```

## Resource Names

The library provides a set of helper methods under the `ResourceNames` export. These are used for compiling resource names from ids. Arguments can be of the type `string`, `number`, or a mix of both. If you have a `client.Customer` instance available, you can get the customer id with `customer.credentials.customerId`.

```ts
import { ResourceNames } from "google-ads-api";

const customerId = "1234567890";
const campaignId = "3218318373";

ResourceNames.campaign(customerId, campaignId);
// "customers/1234567890/campaigns/3218318373"

ResourceNames.adGroup(123, 123);
// "customers/123/adGroups/123"

ResourceNames.adGroupAd("1", "2", "3");
// "customers/1/adGroupAds/2~3"

const amsterdamLocationId = 1010543;
ResourceNames.geoTargetConstant(amsterdam);
// "geoTargetConstants/1010543"

ResourceNames.accountBudget(customer.credentials.customer_id, 123);
// "customers/1234567890/accountBudgets/123"
```

## Hooks

The library provides hooks that can be executed before, after or on error of a query or a mutation. Query hooks have access to the gaql query and the reportOptions, while mutation hooks have access to the mutations.

```ts
const customer = client.Customer({
  clientOptions,
  customerOptions,
  hooks: {
    onQueryStart({ credentials, query, reportOptions, cancel, editOptions }) {
      if (reportOptions.entity === "campaign") {
        cancel([]); // cancels the query and returns the given argument
      }
      if (env.mode === "dev") {
        editOptions({ validate_only: true }); // edits the request options
      }
    },
    onQueryError({ credentials, query, reportOptions, error }) {
      console.log(error);
    },
    onQueryEnd({ credentials, query, reportOptions, response, resolve }) {
      resolve(response.slice(0, 5)); // resolves the query with the given argument
    },
    onMutationStart({ credentials, mutations, cancel }) {
      if (mutations.length === 0) {
        cancel({}); // cancels the mutation and returns the given argument
      }
      if (env.mode === "dev") {
        editOptions({ validate_only: true }); // edits the mutate options
      }
    },
    onMutationError({ credentials, mutations, error }) {
      console.log(error);
    },
    onMutationEnd({ credentials, mutations, response, resolve }) {
      if (reponse.partial_failure_error) {
        resolve({}); // resolves the mutation with the given argument
      }
    },
  },
});
```
