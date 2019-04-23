---
title: Create CampaignBidModifier 
---

This section describes how to create a CampaignBidModifier.



```javascript

// Creating the entity

const campaign_bid_modifier = {
    // Your CampaignBidModifier here 
}

const results = await customer.campaignBidModifiers.create(campaign_bid_modifier)

console.log(results) // ['customers/1234567890/campaignBidModifiers/9765432177']

```