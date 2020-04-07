---
order: 5.1
type: manual
entity: enums
title: Using Enums
---

## Enums

All enums are represented as numbers in the Google Ads API. This means:

-   Numbers must be used for enums when making mutate calls (create, update, delete).
-   Reports will include numbers instead of strings for enum fields.

For example:

```typescript
/*
    campaign.status can have a few states:

    "UNSPECIFIED" = 0
    "UNKNOWN" = 1
    "ENABLED" = 2
    "PAUSED" = 3
    "REMOVED" = 4
*/

const campaigns = await customer.query(`SELECT campaign.status FROM campaign`)

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

const campaigns = await customer.query(`SELECT campaign.status FROM campaign`)

if (campaigns[0].campaign.status === enums.CampaignStatus.ENABLED) {
    // the campaign is enabled
}

const campaign_to_update = {
    resource_name: `customers/123/campaigns/123`,
    status: enums.CampaignStatus.PAUSED,
}

await customer.campaigns.update(campaign) // This will set the status to "PAUSED"
```

The [`enums.ts`](https://github.com/Opteo/google-ads-node/blob/master/src/lib/enums.ts) file (found in our companion library) lists out all enums available in the Google Ads API. For example:

```typescript
// Note that this will be compiled to an object by typescript.
export enum AdvertisingChannelType {
    'UNSPECIFIED' = 0,
    'UNKNOWN' = 1,
    'SEARCH' = 2,
    'DISPLAY' = 3,
    'SHOPPING' = 4,
    'HOTEL' = 5,
    'VIDEO' = 6,
    'MULTI_CHANNEL' = 7,
}
```

GAQL, on the other hand, expects strings for enums in constraints:

```javascript
customer.query(`
    SELECT 
      ad_group_ad.id
    FROM 
        ad_group_ad 
    WHERE 
        campaign.status = "ENABLED" <-- works!
        campaign.status = ENABLED   <-- also works (for enums)
        campaign.status = 2         <-- will not work
`)
```

-   When using `customer.query()`, you must use strings.
-   When using `customer.report()`, both strings and numbers are supported.
