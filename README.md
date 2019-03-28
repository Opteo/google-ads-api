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
    <img src="https://img.shields.io/badge/google%20ads-v1.0.0-009688.svg?style=flat-square">
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

## Features
- Simple and easy to use API
- Uses [gRPC](https://grpc.io/) and [Protocol Buffers](https://developers.google.com/protocol-buffers/) internally (recommended by Google)
- Typescript definitions for all [Google Ads API resources, enums and errors](https://developers.google.com/google-ads/api/reference/rpc/google.ads.googleads.v1.resources)

## Installation
```bash
$ yarn add google-ads-api
```

## Example
```typescript
import { GoogleAdsApi, types, enums } from "google-ads-api"

// 1. Create a new client with your credentials
const client = new GoogleAdsApi({
    client_id: "<CLIENT_ID>",
    client_secret: "<CLIENT_SECRET>",
    developer_token: "<DEVELOPER_TOKEN>"
})

async function main() {
  // 2. Load a customer with a valid CID & authentication
  const customer = client.Customer({
      customer_account_id: "<CUSTOMER_ACCOUNT_ID>",
      refresh_token: "<REFRESH_TOKEN>"
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
  for(const row of response) {
    const ad_group = row.ad_group as types.AdGroup
    const metrics = row.metrics as types.Metrics
    
    if(ad_group.status === enums.AdGroupStatus.ENABLED) {
      console.log(`Ad group "${ad_group.name}" had ${metrics.clicks} clicks.`)
    }
  }
}

main()
```

## Usage

### Authentication

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

### Basic Usage
Most Google Ads services, accessible via `customer.<serviceName>`, have a `get` and `list` method for retrieving entity data, **not including** metrics and segments. Other supported services also provide a series of mutate operations, namely `create`, `update` and `delete`. Mutate operation examples can be found in the next section.

```javascript
// Get single campaign with an id or resource name
const campaign = await customer.campaigns.get(123123123)
const campaign = await customer.campaigns.get('customers/123/campaigns/123')

// List multiple ad groups
const ad_groups = await customer.adGroups.list({
    constraints: ["campaign.id = 123"]
    limit: 15,
})

// Query using report method
const campaigns = await customer.report({
    entity: 'campaign',
    attributes: ['campaign.id', 'campaign.name'],
    metrics: ['metrics.cost', 'metrics.clicks'],
    segments: ['segments.date'],
    constraints: [{ status: 'ENABLED' }],
    from_date: '2019-01-01',
})
```

### Using GAQL (Google Ads Query Language)
The `customer.search` allows you to query customer data using GAQL ([Google Ads Query Language](https://developers.google.com/google-ads/api/docs/query/overview)) query strings.
```javascript
const campaigns = await customer.search(`
    SELECT campaign.id, campaign.name, campaign.status
    FROM campaign
    ORDER BY campaign.id
`)

const campaigns = await customer.search(`
    SELECT 
        campaign.id, campaign.name, campaign.status, 
        metrics.impressions, metrics.cost
    FROM campaign
    WHERE campaign.status = 'PAUSED' AND metrics.impressions > 5
    ORDER BY campaign.id
`)
```

<br/>
<br/>

## Type Definitions
All Typescript definition files for Google Ads resources can be found in our companion library, [google-ads-node](https://github.com/opteo/google-ads-node). Specifically, the files [`resources.ts`](https://github.com/Opteo/google-ads-node/blob/master/src/lib/resources.ts) and [`enums.ts`](https://github.com/Opteo/google-ads-node/blob/master/src/lib/enums.ts) will be useful for referencing if you're using this library in a Typescript environment.

```typescript
// Example interface for the v1 common "TextAdInfo" entity in the Google Ads API

/* .google.ads.googleads.v1.common.TextAdInfo */
export interface TextAdInfo {
  headline?: string;
  description_1?: string;
  description_2?: string;
}
```

Both the interfaces and enums can be imported into your project from google-ads-api, as shown below:
```typescript
import { types, enums } from "google-ads-api"

const campaign: types.Campaign = { ... }

if(channel === enums.AdvertisingChannelType.SEARCH) {
  // ...
}
```

## Changelog
Check out the official [Google Ads API release notes](https://developers.google.com/google-ads/api/docs/release-notes) for a detailed changelog.

## Google Ads Query Language

#### Query Language Grammar

```
Query            -> SelectClause FromClause? WhereClause? OrderByClause? LimitClause?
SelectClause     -> SELECT FieldName (, FieldName)*
FromClause       -> FROM ResourceName
WhereClause      -> WHERE Condition (AND Condition)*
OrderByClause    -> ORDER BY Ordering (, Ordering)*
LimitClause      -> LIMIT PositiveInteger

Condition        -> FieldName Operator Value
Operator         -> = | != | > | >= | < | <= | IN | NOT IN |
                    LIKE | NOT LIKE | CONTAINS ANY | CONTAINS ALL |
                    CONTAINS NONE | IS NULL | IS NOT NULL | DURING |
                    BETWEEN
Value            -> Literal | LiteralList | Number | NumberList | String |
                    StringList | Function
Ordering         -> FieldName (ASC | DESC)?

FieldName        -> [a-z] ([a-zA-Z0-9._])*
ResourceName     -> [a-z] ([a-zA-Z_])*

StringList       -> ( String (, String)* )
LiteralList      -> ( Literal (, Literal)* )
NumberList       -> ( Number (, Number)* )

PositiveInteger  -> [1-9] ([0-9])*
Number           -> -? [0-9]+ (. [0-9] [0-9]*)?
String           -> (' Char* ') | (" Char* ")
Literal          -> [a-zA-Z0-9_]*

Function         -> LAST_14_DAYS | LAST_30_DAYS | LAST_7_DAYS |
                    LAST_BUSINESS_WEEK | LAST_MONTH | LAST_WEEK_MON_SUN |
                    LAST_WEEK_SUN_SAT | THIS_MONTH | THIS_WEEK_MON_TODAY |
                    THIS_WEEK_SUN_TODAY | TODAY | YESTERDAY
```

-   `?` indicates an optional element.
-   `*` means zero or more; `+` means one or more.
-   `(xxxxxx)` indicates a grouping.
-   `[a-z0-9]` signifies character ranges.
-   `|` stand for "or".

For more information on the Google Ads Query Language, visit [Google Ads Api Docs](https://developers.google.com/google-ads/api/docs/query/overview).
