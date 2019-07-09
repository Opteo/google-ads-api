---
title: Update CampaignBidModifier
order: 5.1
type: update_code
entity: CampaignBidModifier
---

```javascript
// Updating the entity

const campaign_bid_modifier = {
  resource_name: 'customers/3827277046/campaignBidModifiers/2015922405~8000', // The resource_name is required
  // ...any other fields that you would like to update
}

// Passing in a single entity to update
const result = await customer.campaignBidModifiers.update(campaign_bid_modifier)

// Passing in an array of entities to update, validating only
const result = await customer.campaignBidModifiers.update([campaign_bid_modifier, other_campaign_bid_modifier], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/3827277046/campaignBidModifiers/2015922405~8000'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
