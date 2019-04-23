---
title: Update CampaignBidModifier
order: 5
type: update
entity: CampaignBidModifier
---

This section describes how to update a CampaignBidModifier.

```javascript
// Updating the entity

const campaign_bid_modifier = {
    resource_name: 'customers/3827277046/campaignBidModifiers/729684361~8000', // The resource_name is required
    // ...any other fields that you would like to update
}

const results = await customer.campaignBidModifiers.update(campaign_bid_modifier)

console.log(results) // ['customers/3827277046/campaignBidModifiers/729684361~8000']
```
