---
title: Update CampaignBidModifier
order: 5
type: update
entity: CampaignBidModifier
---

### Update CampaignBidModifier

This section describes how to update a CampaignBidModifier.

```javascript
// Updating the entity

const campaign_bid_modifier = {
  resource_name: 'customers/3827277046/campaignBidModifiers/729684361~8000', // The resource_name is required
  // ...any other fields that you would like to update
}

const result = await customer.campaignBidModifiers.update(campaign_bid_modifier)
```

```javascript
// Example result
;['customers/3827277046/campaignBidModifiers/729684361~8000']
```
