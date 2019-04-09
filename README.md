<p align="center">
  <a href="https://github.com/opteo/google-ads-api">
    Google Ads Api
  </a>
</p>

<p align="center">
  Unofficial Google Ads API client library for Node
</p>
<p align="center">
  <a href="https://developers.google.com/google-ads/api/docs/release-notes">
    <img src="https://img.shields.io/badge/google%20ads-v1.1.0-009688.svg?style=flat-square">
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

<p align="center">Built by <a href="https://opteo.com">Opteo</a></p>

<p align="center">
  <a href="https://opteo.com">
    <img src="https://app.opteo.com/icons/logo.svg">
  </a>
</p>

# Features

-   Simple and easy to use API
-   Uses [gRPC](https://grpc.io/) and [Protocol Buffers](https://developers.google.com/protocol-buffers/) internally (recommended by Google)
-   Typescript definitions for all [Google Ads API resources, enums and errors](https://developers.google.com/google-ads/api/reference/rpc/google.ads.googleads.v1.resources)`

# Installation

```bash
$ yarn add google-ads-api
```

# Example

```javascript
import { GoogleAdsApi, types, enums } from 'google-ads-api'

// 1. Create a new client with your credentials
const client = new GoogleAdsApi({
    client_id: '<CLIENT_ID>',
    client_secret: '<CLIENT_SECRET>',
    developer_token: '<DEVELOPER_TOKEN>',
})

// 2. Load a customer with a valid CID & authentication
const customer = client.Customer({
    customer_account_id: '<CUSTOMER_ACCOUNT_ID>',
    refresh_token: '<REFRESH_TOKEN>',
})

// 3. Use the report method for querying customer data
const response = await customer.report({
    entity: 'ad_group',
    attributes: ['ad_group.id', 'ad_group.name', 'ad_group.status'],
    metrics: ['metrics.clicks'],
    segments: ['segments.device'],
    constraints: ['metrics.impressions > 10'],
    date_constant: 'LAST_30_DAYS',
    limit: 5,
})

// 4. Inspect the data and benefit from ts definitions!
for (const row of response) {
    const { ad_group, metrics } = row
    if (ad_group.status === enums.AdGroupStatus.ENABLED) {
        console.log(`Ad group "${ad_group.name}" had ${metrics.clicks} clicks.`)
    }
}
```

# Usage

## Authentication

Before you can use the google ads API, you'll need to gather some authentication. You'll need:

-   **Client id** and **client secret**: These are your OAuth credentials. You'll find them in your [google cloud console](https://console.cloud.google.com/apis/api/googleads.googleapis.com/). If you don't already have these tokens, see [google's instructions](https://developers.google.com/google-ads/api/docs/oauth/cloud-project).
-   **Developer token**: You'll find this in your google ads account, in the API Center.

Then, for every google ads account that you want to access, you'll need:

-   **Customer account ID**: This is the CID of the account you want to access, which will look like `xxx-xxx-xxxx`.
-   **Login customer ID**: _(only required if accessing the account via an MCC)_ This is usually the CID of the highest-level account in your MCC structure, also in the format `xxx-xxx-xxxx`.
-   **Refresh token**: You'll get this token when somebody authorises you to query their adwords account via OAuth.

```javascript
import { GoogleAdsApi } from 'google-ads-api'

const client = new GoogleAdsApi({
    client_id: '<YOUR_CLIENT_ID>',
    client_secret: '<YOUR_CLIENT_SECRET>',
    developer_token: '<YOUR_DEVELOPER_TOKEN>',
})

const customer = client.Customer({
    customer_account_id: '123-123-123',
    login_customer_id: '456-456-456', // Optionally provide a login-customer-id
    refresh_token: '<YOUR_REFRESH_TOKEN>',
})
```

## Basic Usage

### Reporting & metrics

To get reports with metrics, you'll use `customer.search()` or `customer.query()`.

### Using `customer.search()`

The `customer.search()` method allows you to query customer data using GAQL ([Google Ads Query Language](https://developers.google.com/google-ads/api/docs/query/overview)) query strings. This is great for prototyping and getting results out quickly.

```javascript
const campaigns = await customer.search(`
    SELECT 
      campaign.id, campaign.name, campaign.status
    FROM 
      campaign
    ORDER BY campaign.id
`)

const campaigns = await customer.search(`
    SELECT 
        campaign.id, campaign.name, campaign.status, 
        metrics.impressions, metrics.cost
    FROM 
      campaign
    WHERE 
      campaign.status = 'PAUSED' 
      AND metrics.impressions > 5
    ORDER BY campaign.id
`)
```

### Using `customer.report()`

The `customer.report()` method is a safer and more structured way to use GAQL. It is also more practical to use when your queries need to be built dynamically. If you are using typescript, it will give you handy autocomplete, too!

```javascript
const response = await customer.report({
    entity: 'ad_group', // The SELECT clause of your query
    attributes: ['ad_group.id', 'ad_group.name', 'ad_group.status'], // The attribute fields of your query
    metrics: ['metrics.clicks'], // The metric fields of your query
    segments: ['segments.date'], // The segment fields of your query
    constraints: ['metrics.impressions > 10'], // The WHERE clause of your query
    date_constant: 'LAST_30_DAYS', // The DURING clause of your query if using a date constant.
    order_by: 'metrics.clicks', // the ORDER BY clause of your query
    sort_order: 'desc',
    limit: 5, // The LIMIT clause of your query.
})

const response = await customer.report({
    // the contraints array can come in a few different forms:

    // raw strings, which will be concatenated with "AND"
    constraints: ['campaign.status = "PAUSED"'],

    // objects with a single value, which is short hand for "="
    constraints: [
        {
            'campaign.status': enums.CampaignStatus.PAUSED,
        },
    ],

    // objects with an array value, which is short hand for "IN"
    constraints: [
        {
            'campaign.status': [enums.CampaignStatus.PAUSED, enums.CampaignStatus.ENABLED],
        },
    ],

    // a full { key, op, val } object (most verbose option)
    constraints: [
        {
            key: 'campaign.status',
            op: ' NOT_IN ',
            val: enums.CampaignStatus.REMOVED,
        },
    ],
})

const response = await customer.report({
    // If you need to select a specific date range, use from_date and to_date
    from_date: '2019-01-01',
    to_date: '2019-02-15',
})
```

### Entities

This library is built around `entities` such as `campaigns`, `adGroups` or `sharedSetCriterions`.

You'll find them on the top-level entity, `customer`.

Each `entity` has a few methods. For example, `campaign` has

-   `customer.campaigns.get()` to get a single campaign
-   `customer.campaigns.list()` to get all campaigns (without metrics or segments)
-   `customer.campaigns.create()` to create a new campaign
-   `customer.campaigns.update()` to update campaign fields such as `campaign.name`
-   `customer.campaigns.delete()` to delete a campaign

Most entities will have these five methods, but they may also have others depending on what is available in the [Google Ads API](https://developers.google.com/google-ads/api/reference/rpc/google.ads.googleads.v1.services).

### Getting and listing

These operations will get you all fields, unsegmented, without metrics.

-   If you're interested in metrics, please use `customer.report()` or `customer.search()`.
-   The `get()` method is rate limited heavily by Google. Use it only for debugging.
-   The `list()` method is designed to get you every single field for an entity. Some entities can be quite large, so consider using `customer.report()` or `customer.search()` to get only the fields you actually need for performance reasons.

```javascript
// Get single campaign with an id or resource name
const campaign = await customer.campaigns.get(123123123)
const campaign = await customer.campaigns.get('customers/123/campaigns/123')

// List multiple ad groups
const ad_groups = await customer.adGroups.list({
    constraints: ["campaign.id = 123"]
    limit: 15,
})
```

### Mutations

Most entities in the Google Ads API will have mutation methods for creating, updating, and deleting.

#### Create

The `create` method can take a single entity or array of entities. Optionally, you can supply a second argument with the following options: `validate_only` and `partial_failure`. For more details on these, refer to the [Google Ads API documentation](https://developers.google.com/google-ads/api/reference/rpc/google.ads.googleads.v1.services#google.ads.googleads.v1.services.MutateCampaignsRequest).

The `results` property of the response object will contain the newly created entity resource names.

```javascript
const campaign = {
    name: 'new-campaign',
    campaign_budget: 'customers/123/campaignBudgets/123',
    advertising_channel_type: enums.AdvertisingChannelType.SEARCH,
    status: enums.CampaignStatus.PAUSED,
}

const { results } = await customer.campaigns.create(campaign)
console.log(results) // ['customers/123/campaigns/456']
```

#### Update

The `update` method works the same way as `create` and takes a single entity or array of entities to update. All properties passed (that can be updated) will be updated, so if you **don't want to update an attribute, don't include it**. This method also supports the additional `validate_only` and `partial_failure` options.

The `results` property of the response object will contain the updated entity resource names.

```javascript
const campaign = {
    resource_name: `customers/123/campaigns/123`,
    name: 'updated-campaign-name',
}
const { results } = await customer.campaigns.update(campaign, { validate_only: true })
```

#### Delete

The `delete` method should be provided with the resource name of the entity to remove. Note: When deleting an entity in the Google Ads API, it will continue to exist, but it will be immutable and its status will be changed to `REMOVED`.

```javascript
await customer.campaigns.delete('customers/123/campaigns/123')
```

### Enums

All enums are represented as integers in the google ads API.

For example:

```typescript
const campaigns = await customer.search(`SELECT campaign.status FROM campaign`)

if (campaigns[0].campaign.status === 2) {
    // the campaign is enabled
}

const campaign_to_update = {
    resource_name: `customers/123/campaigns/123`,
    status: 3,
}

await customer.campaigns.update(campaign) // This will set the status to "PAUSED"
```

Of course, using numbers directly isn't convenient. Instead, use the `enums` import:

```typescript
import { enums } from 'google-ads-api'

const campaigns = await customer.search(`SELECT campaign.status FROM campaign`)

if (campaigns[0].campaign.status === enums.CampaignStatus.ENABLED) {
    // the campaign is enabled
}

const campaign_to_update = {
    resource_name: `customers/123/campaigns/123`,
    status: enums.CampaignStatus.PAUSED,
}

await customer.campaigns.update(campaign) // This will set the status to "PAUSED"
```

The [`enums.ts`](https://github.com/Opteo/google-ads-node/blob/master/src/lib/enums.ts) file (found in our companion library) lists out all enums available in the google ads API. For example:

```typescript
// Note that this will be compiled to an object by typescript.
export enum CampaignStatus {
    'UNSPECIFIED' = 0,
    'UNKNOWN' = 1,
    'ENABLED' = 2,
    'PAUSED' = 3,
    'REMOVED' = 4,
}
```

### Error Handling

To handle errors from the Google Ads API, the best approach is to use the provided error enums, available with the `enums` import. A full list of error types can be found in the [Google Ads API references](https://developers.google.com/google-ads/api/reference/rpc/google.ads.googleads.v1.errors).

```typescript
import { enums } from 'google-ads-api'

try {
    const campaigns = await customer.report({
        entity: 'campaign',
        attributes: ['ad_group_criterion.keyword.text'],
    })
} catch (err) {
    if (err.code.queryError === enums.QueryError.PROHIBITED_RESOURCE_TYPE_IN_SELECT_CLAUSE) {
        // Handle error case..
    }
}
```

As well as the error code, the `message`, `request_id`, `request` object and grpc `failure` object properties are accessible e.g.

```javascript
console.log(err.message) // "Cannot select fields from the following resource.."
console.log(err.request_id) // "5Tzsyp_M_9F7oHl_EZh8Ow"
console.log(err.request) // Request protocol buffer body in readable format
console.log(err.failure) // gRPC GoogleAdsFailure instance
```

## Utilities

In this library, we also provide a set of helper methods that can assist you during development.

| Method          | Description                                                                |
| --------------- | -------------------------------------------------------------------------- |
| `fromMicros`    | Converts micro value to a normal number                                    |
| `toMicros`      | Converts a normal number to a micro value                                  |
| `getEnumString` | Get the value of an enum as a string (instead of the default number value) |

```javascript
import { fromMicros, toMicros, getEnumString } from 'google-ads-api'

fromMicros(123300000) // 123.3
toMicros(123.3) // 123300000

// You must pass the enum name and the value
getEnumString('AdvertisingChannelType', enums.AdvertisingChannelType.DISPLAY) // "DISPLAY"
```

# Typescript

All arguments and return types in this library have been carefully set up with typescript. We also expose every single type in the google ads api via the `types` export, should you choose to use them in your own code:

```typescript
import { types } from 'google-ads-api'

const campaign: types.Campaign = {
    id: 123123,
    some_wrong_field: false, // The type checker won't allow this.
    name: [1, 2, 3], // `name` should be a string, so this will also throw an error.
}
```

The [`resources.ts`](https://github.com/Opteo/google-ads-node/blob/master/src/lib/resources.ts) file (found in our companion library) is a good reference for all exported types. For example, you'll find:

```typescript
// Example interface for the v1 common "TextAdInfo" entity in the Google Ads API

/* .google.ads.googleads.v1.common.TextAdInfo */
export interface TextAdInfo {
    headline?: string
    description_1?: string
    description_2?: string
}
```

# Changelog

View the changelog for this library here: https://github.com/Opteo/google-ads-api/blob/master/CHANGELOG.md

Check out the official [Google Ads API release notes](https://developers.google.com/google-ads/api/docs/release-notes) for a detailed changelog.

# Motivation

When we first started using AdWords, we found the API difficult to use. SOAP, in particular, was a huge pain to use with Node.

The Google Ads API is a massive step in the right direction, but we still don't feel that it still isn't quite as developer friendly as it could be. We have written two libraries to fill that gap:

-   [`google-ads-node`](https://github.com/Opteo/google-ads-node) is a low-level Node implementation of the API which imitates the stucture of the other client libraries.
-   `google-ads-api` (this library) is a wrapper around `google-ads-node` to provide a better developer experience.
