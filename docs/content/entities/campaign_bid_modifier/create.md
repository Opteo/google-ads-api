---
title: Create CampaignBidModifier
order: 4
type: create
entity: CampaignBidModifier
---

This section describes how to create a CampaignBidModifier.

```javascript
// Creating the entity

const campaign_bid_modifier = {
    // Your CampaignBidModifier here, without immutable fields such as resource_name
}

const results = await customer.campaignBidModifiers.create(campaign_bid_modifier)

console.log(results) // ['customers/3827277046/campaignBidModifiers/729684361~8000']
```
