---
order: 5.1
type: manual
entity: enums
title: Enums in reporting
---

## Enums

This library uses enums for all inputs and outputs of the Google Ads API. This reduces ambiguity when reading and writing code.

## Enums in reporting

All enums are represented as integers in the google ads API.

For example:

```typescript
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
