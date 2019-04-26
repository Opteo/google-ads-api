---
title: Create CampaignBidModifier
order: 4
type: create
entity: CampaignBidModifier
---

### Create CampaignBidModifier

This section describes how to create a CampaignBidModifier.

```javascript
// Creating the entity

const campaign_bid_modifier = {
  // Your CampaignBidModifier here, without immutable fields such as resource_name
}

const result = await customer.campaignBidModifiers.create(campaign_bid_modifier)
```

```javascript
// Example result
;['customers/3827277046/campaignBidModifiers/729684361~8000']
```
