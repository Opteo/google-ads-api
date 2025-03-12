<p align="center" style="font-size:32px">
    Google Ads API
</p>

<p align="center">
  Unofficial Google Ads API client library for Node.js
</p>
<p align="center">
  <a href="https://developers.google.com/google-ads/api/docs/release-notes">
    <img src="https://img.shields.io/badge/google%20ads-v17.1.0-009688.svg?style=flat-square">
  </a>
  <a href="https://www.npmjs.com/package/google-ads-api">
    <img src="https://img.shields.io/npm/v/google-ads-api.svg?style=flat-square">
  </a>
  <a>
    <img src="https://img.shields.io/npm/dm/google-ads-api.svg?style=flat-square">
    </a>
</p>

<p align="center">
  <a href="https://opteo.com">
    <img src="https://app.opteo.com/favicon.png" width="90" height="90">
  </a>
</p>

# Features

- Simple and easy to use API
- Uses [gRPC](https://grpc.io/) and [Protocol Buffers](https://developers.google.com/protocol-buffers/) internally (recommended by Google)
- Typescript definitions for all resources, enums, errors and services
- Provides all API functionality

# Installation

```bash
npm install google-ads-api
```

# Usage

- Setup
  - [Create a client](#create-a-client)
  - [Create a customer instance](#create-a-customer-instance)
  - [List accessible customers](#list-accessible-customers)
- Reporting
  - [Retrieve Campaigns with metrics](#retrieve-campaigns-with-metrics)
  - [Retrieve Campaigns using GAQL](#retrieve-campaigns-using-gaql)
  - [Retrieve Ad Group metrics by date](#retrieve-ad-group-metrics-by-date)
  - [Retrieve Keywords with an async iterator](#retrieve-keywords-with-an-async-iterator)
  - [Retrieve Keywords with a raw stream](#retrieve-keywords-with-a-raw-stream)
  - [Summary Row](#summary-row)
  - [Total Results Count](#total-results-count)
- Mutations
  - [Create an expanded text ad](#create-an-expanded-text-ad)
  - [Create a campaign & budget atomically](#create-a-campaign--budget-atomically)
- Misc
  - [Resource Names](#resource-names)
  - [Hooks](#hooks)
  - [Error handling](#error-handling)

## Create a client

```ts
import { GoogleAdsApi } from "google-ads-api";

const client = new GoogleAdsApi({
  client_id: "<CLIENT-ID>",
  client_secret: "<CLIENT-SECRET>",
  developer_token: "<DEVELOPER-TOKEN>",
});
```

---

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

---

## List accessible customers

This is a special client method for listing the accessible customers for a given refresh token, and is equivalent to [CustomerService.listAccessibleCustomers](https://developers.google.com/google-ads/api/reference/rpc/v13/CustomerService#listaccessiblecustomers). It returns the resource names of available customer accounts.

```ts
const client = new GoogleAdsApi({
  client_id: "<CLIENT-ID>",
  client_secret: "<CLIENT-SECRET>",
  developer_token: "<DEVELOPER-TOKEN>",
});

const refreshToken = "<REFRESH-TOKEN>";

const customers = await client.listAccessibleCustomers(refreshToken);
```

---

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
    "metrics.impressions",
    "metrics.all_conversions",
  ],
  constraints: {
    "campaign.status": enums.CampaignStatus.ENABLED,
  },
  limit: 20,
});
```

---

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
    metrics.impressions,
    metrics.all_conversions
  FROM 
    campaign
  WHERE
    campaign.status = "ENABLED"
  LIMIT 20
`);
```

---

## Retrieve Ad Group metrics by date

```ts
import { enums } from "google-ads-api";

const campaigns = await customer.report({
  entity: "ad_group",
  metrics: [
    "metrics.cost_micros",
    "metrics.clicks",
    "metrics.impressions",
    "metrics.all_conversions",
  ],
  segments: ["segments.date"],
  from_date: "2021-01-01",
  to_date: "2021-02-01",
});
```

---

## Retrieve Keywords with an async iterator

Calls searchStream internally but returns the rows one by one in an async iterator.

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

// Rows are streamed in one by one
for await (const row of stream) {
    // Break the loop to stop streaming
    if (someLogic) {
        break
    }
}
```
<!-- prettier-ignore-end -->

Or use a GAQL query.

<!-- prettier-ignore-start -->
```ts
const stream = customer.queryStream(`
  SELECT
    ad_group_criterion.keyword.text,
    ad_group_criterion.status
  FROM
    ad_group_criterion
  WHERE
    ad_group_criterion.type = "KEYWORD"
`);

// Rows are streamed in one by one
for await (const row of stream) {
    // Break the loop to stop streaming
    if (someLogic) {
        break
    }
}
```
<!-- prettier-ignore-end -->

---

## Retrieve Keywords with a raw stream

Returns the raw stream so that events can be handled manually. For more information on Google's stream methods please [consult their docs](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#server-streaming).

<!-- prettier-ignore-start -->

```ts
import { enums, parse } from "google-ads-api";

const reportOptions = {
  entity: "ad_group_criterion",
  attributes: [
    "ad_group_criterion.keyword.text", 
    "ad_group_criterion.status",
  ],
  constraints: {
    "ad_group_criterion.type": enums.CriterionType.KEYWORD,
  },
};

const stream = customer.reportStreamRaw(reportOptions);

// Rows are streamed in 10,000 row chunks
stream.on("data", (chunk) => {
  const parsedResults = parse({
    results: chunk.results,
    reportOptions,
  });
});

stream.on("error", (error) => {
  throw new Error(error);
});

stream.on("end", () => {
  console.log("stream has finished");
});
```
<!-- prettier-ignore-end -->

---

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

---

## Create a Campaign & Budget atomically

```ts
import {
  resources,
  enums,
  toMicros,
  ResourceNames,
  MutateOperation,
} from "google-ads-api";

// Create a resource name with a temporary resource id (-1)
const budgetResourceName = ResourceNames.campaignBudget(
  customer.credentials.customer_id,
  "-1"
);

const operations: MutateOperation<
  resources.ICampaignBudget | resources.ICampaign
>[] = [
  {
    entity: "campaign_budget",
    operation: "create",
    resource: {
      // Create a budget with the temporary resource id
      resource_name: budgetResourceName,
      name: "Planet Express Budget",
      delivery_method: enums.BudgetDeliveryMethod.STANDARD,
      amount_micros: toMicros(500),
    },
  },
  {
    entity: "campaign",
    operation: "create",
    resource: {
      name: "Planet Express",
      advertising_channel_type: enums.AdvertisingChannelType.SEARCH,
      status: enums.CampaignStatus.PAUSED,
      manual_cpc: {
        enhanced_cpc_enabled: false,
      },
      // Use the temporary resource id which will be created in the previous operation
      campaign_budget: budgetResourceName,
      network_settings: {
        target_google_search: true,
        target_search_network: true,
      },
    },
  },
];

const result = await customer.mutateResources(operations);
```

---

## Add Policy Exemption Rules

```ts
import {
  resources,
  enums,
  toMicros,
  ResourceNames,
  MutateOperation,
} from "google-ads-api";

// Ad Group to which you want to add the keyword
const adGroupResourceName = "customers/123/adGroups/456";

const keyword = "24 hour locksmith harlem";

const operations: MutateOperation<
  resources.IAdGroupCriterion & {
    exempt_policy_violation_keys?: google.ads.googleads.v17.common.IPolicyViolationKey[];
  }
>[] = [
  {
    entity: "ad_group_criterion",
    operation: "create",
    resource: {
      // Keyword with policy violation exemptions
      ad_group: adGroupResourceName,
      keyword: {
        text: "24 hour locksmith harlem",
        match_type: enums.KeywordMatchType.PHRASE,
      },
      status: enums.AdGroupStatus.ENABLED,
    },
    exempt_policy_violation_keys: [
      {
        policy_name: "LOCAL_SERVICES",
        violating_text: keyword,
      },
    ],
  },
];

const result = await customer.mutateResources(operations);
```

---

## Uploading Click Conversions

```ts
const clickConversion = {
  gclid: "<GOOGLE-CLICK-ID>",
  conversion_action: "customers/1234567890/conversionActions/111222333",
  conversion_date_time: "2022-01-11 00:00:00",
  conversion_value: 123,
  currency_code: "GBP",
};

const request = new services.UploadClickConversionsRequest({
  customer_id: customerId,
  conversions: [clickConversion],
});

await customer.conversionUploads.uploadClickConversions(request);
```

---

## Summary Row

If a summary row is requested in the `report` method, it will be included as the **first** row of the results.

```ts
const [summaryRow, ...response] = await customer.report({
  entity: "campaign",
  metrics: ["metrics.clicks", "metrics.all_conversions"],
  search_settings: {
    return_summary_row: true,
  },
});
```

If a summery row is requested in the `reportStream` method, it will be included as the **final** iterated row of the results.

```ts
const stream = customer.reportStream({
  entity: "campaign",
  metrics: ["metrics.clicks", "metrics.all_conversions"],
  search_settings: {
    return_summary_row: true,
  },
});

const accumulator = [];
for await (const row of stream) {
  accumulator.push(row);
}

const summaryRow = accumulator.slice(-1)[0];
```

---

## Total Results Count

The `reportCount` method acts like `report` but returns the total number of rows that the query would have returned (ignoring the limit). This replaces the `return_total_results_count` report option. Hooks are **not** called in this function to avoid cacheing conflicts.

```ts
const totalRows = await customer.reportCount({
  entity: "search_term_view",
  attributes: ["search_term_view.resource_name"],
});
```

---

## Report Results Order

There are 2 methods of sorting the results of report. The prefered method is to use the `order` key, which should be an array of objects with a `field` key and an optional `sort_order` key. The order of the items in the array will map to the order of the sorting keys in the GAQL query, and hence the priorities of the sorts.

```ts
const response = await customer.report({
  entity: "campaign",
  attributes: ["campaign.id"],
  metrics: ["metrics.clicks"],
  segments: ["segments.date"],
  order: [
    { field: "metrics.clicks", sort_order: "DESC" },
    { field: "segments.date", sort_order: "ASC" },
    { field: "campaign.id" }, // default sort_order is descending
  ],
});
```

The other method is to use the `order_by` and `sort_order` keys, however this will be deprecated in a future version of the API.

```ts
const response = await customer.report({
  entity: "campaign",
  attributes: ["campaign.id"],
  metrics: ["metrics.clicks"],
  segments: ["segments.date"],
  order_by: "metrics.clicks",
  sort_order: "DESC",
});
```

---

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
ResourceNames.geoTargetConstant(amsterdamLocationId);
// "geoTargetConstants/1010543"

ResourceNames.accountBudget(customer.credentials.customer_id, 123);
// "customers/1234567890/accountBudgets/123"
```

---

## Hooks

The library provides hooks that can be executed before, after or on error of a query, stream or a mutation.

### Query/stream hooks:

- `onQueryStart`
- `onQueryError`
- `onQueryEnd`
- `onStreamStart`
- `onStreamError`

These hooks have access to the `customerCredentials` argument, containing the `customer_id`, `login_customer_id` and `linked_customer_id`.

These hooks also have access to the `query` argument, containing the GAQL query as a string.

These hooks also have access the the `reportOptions` argument. This will be undefined when using the `query` method.

### Mutation hooks:

- `onMutationStart`
- `onMutationError`
- `onMutationEnd`

These hooks have access to the `customerCredentials` argument, containing the `customer_id`, `login_customer_id` and `linked_customer_id`.

These hooks also have access to the `method` argument, containing the mutation method as a string.

### Service hooks:

- `onServiceStart`
- `onServiceError`
- `onServiceEnd`

These hooks have access to the `customerCredentials` argument, containing the `customer_id`, `login_customer_id` and `linked_customer_id`.

These hooks also have access to the `method` argument, containing the mutation method as a string.

### Pre-request hooks:

- `onQueryStart` - `query` and `report`
- `onStreamStart` - `reportStream` and `reportStreamRaw`
- `onMutationStart`
- `onServiceStart`

These hooks are executed **before** a query/stream/mutation/service.

These hooks have access to the `cancel` method, which can cancel the action before it is done. The query and mutation pre-request hooks allow an optional argument to be passed into the `cancel` method, which will be used as an alternative return value for the query/mutation. A good use case for this method would be to cancel with a cached result.

These hooks also have access to the `editOptions` method which allows the request options to be changed before the request is sent. Keys included in the object passed to `editOptions` will be changed, and the rest will be maintained. A good use case for this method would be to set `validateOnly` as true when not in production.

```ts
import { OnQueryStart } from "google-ads-api";

const onQueryStart: OnQueryStart = async ({ cancel, editOptions }) => {
  if (env.mode === "test") {
    cancel([]); // Cancels the request. The supplied argument will become the alternative return value in query and mutation hooks
  }
  if (env.mode === "dev") {
    editOptions({ validate_only: true }); // Edits the request options
  }
};

const customer = client.Customer(
  {
    clientOptions,
    customerOptions,
  },
  { onQueryStart }
);
```

### On error hooks:

- `onQueryError` - `query` and `report`
- `onStreamError` - `reportStream` (but **not** `reportStreamRaw`)
- `onMutationError`
- `onServiceStart`

These hooks are executed when a query/stream/mutation/service throws an error. If the error is a Google Ads failure then it will be converted to a `GoogleAdsFailure` first. The error can be accessed in these hooks with the `error` argument. Note that the `onStreamError` hook will not work with the `reportStreamRaw` method to avoid blocking the thread.

```ts
import { OnQueryError } from "google-ads-api";

const onQueryError: OnQueryError = async ({ error }) => {
  console.log(error.message); // An Error or a GoogleAdsFailure
};

const customer = client.Customer(
  {
    clientOptions,
    customerOptions,
  },
  { onQueryError }
);
```

### Post-request hooks:

- `onQueryEnd` - `query` and `report`
- `onMutationEnd`
- `onServiceEnd`

These hooks are executed **after** a query, mutation or service. This library does not contain an `onStreamEnd` hook to avoid accumulating the results of streams, and also so that we don't block the thread by waiting for the end event to be emitted.

```ts
import { OnQueryEnd } from "google-ads-api";

const onQueryEnd: OnQueryEnd = async ({ response, resolve }) => {
  const [first] = response; // The results of the query/mutation
  resolve([first]); // The supplied argument will become the alternative return value
};

const customer = client.Customer(
  {
    clientOptions,
    customerOptions,
  },
  { onQueryEnd }
);
```

---

## Error handling

All errors, apart from GRPC specific cases (such as a connection problem or timeout, [see more here](https://github.com/grpc/grpc/blob/master/doc/statuscodes.md)), are instances of a [GoogleAdsFailure](https://developers.google.com/google-ads/api/reference/rpc/v13/GoogleAdsFailure).

You can find a list of all error types for a specific version in [the official documentation](https://developers.google.com/google-ads/api/reference/rpc/v13/AccessInvitationErrorEnum.AccessInvitationError), as well as more information about [handling errors here](https://developers.google.com/google-ads/api/docs/best-practices/error-types).

```ts
import { errors } from "google-ads-api";

try {
  await customer.query(`
      SELECT campaign.bad_field FROM campaign
    `);
} catch (err) {
  if (err instanceof errors.GoogleAdsFailure) {
    console.log(err.errors); // Array of errors.GoogleAdsError instances

    // Get the first one and explicitly check for a certain error type
    const [firstError] = err.errors;
    if (
      firstError.error_code.query_error ===
      errors.QueryErrorEnum.QueryError.UNRECOGNIZED_FIELD
    ) {
      console.log(
        `Error: using invalid field "${firstError.trigger}" in query`
      );
    }
  }
}
```

# Updating this library to the latest Google Ads API version

1. Update google-ads-node & publish to NPM. Check that package for instructions.
2. Update google-ads-node & google-gax in package.json. google-gax must be the same version as google-ads-node,
   Otherwise you are likely to get a `TypeError: Channel credentials must be a ChannelCredentials object` error.
3. Update the version in `version.ts`.
4. Update the versions in `src/protos/index.ts`.
5. Run `yarn compile` to update the generated files. The `tsc` command might fail -- if so, temporarily add @ts-nocheck to the top of problematic files so that the compile script can continue. After the compile script has run, those @ts-nocheck lines should no longer be required. The compile step depends on some environment variables being set (see scripts/fields.ts), so make sure to set those.
6. Prettify the generated files so the the diffs are easier to read.
7. Check that the diffs are expected and that the generated files are correct. New Gads versions will often add new services, fields, and enums.
8. Test with `yarn test`.
9. Test by linking to a real project and making some real requests.
10. Once confident, bump the major version & publish to NPM.
