<p align="center" style="font-size:32px">
    Google Ads API
</p>

<p align="center">
  Unofficial Google Ads API client library for Node
</p>
<p align="center">
  <a href="https://developers.google.com/google-ads/api/docs/release-notes">
    <img src="https://img.shields.io/badge/google%20ads-v3.6.0-009688.svg?style=flat-square">
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

-   Simple and easy to use API
-   Uses [gRPC](https://grpc.io/) and [Protocol Buffers](https://developers.google.com/protocol-buffers/) internally (recommended by Google)
-   Typescript definitions for all [Google Ads API resources, enums and errors](https://developers.google.com/google-ads/api/reference/rpc/google.ads.googleads.v2.resources)

> The Google Ads API is the new replacement to the AdWords API. Google will deprecate the AdWords API sometime in 2020.

# Installation

```bash
$ yarn add google-ads-api
```

# Documentation

You can find the [full documentation here](https://opteo.com/dev/google-ads-api).

The documentation is divided into two main sections:

- [General concepts](https://opteo.com/dev/google-ads-api) for general usage of this library.
- [Core resources](https://opteo.com/dev/google-ads-api/#accountbudget) for the specific fields and methods available per resource.

You can improve the documentation by sending pull requests with edits to [these files](https://github.com/Opteo/google-ads-api/tree/master/docs/content). More instructions [here](https://github.com/Opteo/google-ads-api/tree/master/docs/). All help and feedback welcome!

# Basic Example

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

// 3. Use the query method for querying customer data
const response = await customer.query(`
    SELECT 
        ad_group.id,
        ad_group.name,
        metrics.clicks,
        segments.device
    FROM 
        ad_group
    WHERE 
        metrics.impressions > 10
        AND segments.date DURING LAST_30_DAYS
    LIMIT 5
`)

// 4. Inspect the data and benefit from ts definitions
for (const row of response) {
    const { ad_group, metrics } = row
    if (ad_group.status === enums.AdGroupStatus.ENABLED) {
        console.log(`Ad group "${ad_group.name}" had ${metrics.clicks} clicks.`)
    }
}

// 5. Create a new campaign
const campaign = {
    name: 'New Campaign',
    campaign_budget: 'customers/123/campaignBudgets/123',
    advertising_channel_type: enums.AdvertisingChannelType.SEARCH,
    status: enums.CampaignStatus.PAUSED,
}

const { results } = await customer.campaigns.create(campaign)

const new_campaign_resource_name = results[0]

// 6. ...modify it...
await customer.campaigns.update({
    resource_name : new_campaign_resource_name,
    name : 'New Campaign EDITED' 
})

// 7. ...and delete it.
await customer.campaigns.delete(new_campaign_resource_name)
```

# More examples

There are many more examples in the [full documentation](https://opteo.com/dev/google-ads-api).

You can also find a couple ready-to-run examples [in this branch](https://github.com/Opteo/google-ads-api/tree/561e5b4782a3a184c920d04aefdbc6e7547f0ae4/examples).
