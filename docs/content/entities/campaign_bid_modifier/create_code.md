---
title: Create CampaignBidModifier
order: 4.1
type: create_code
entity: CampaignBidModifier
---

```javascript
// Creating the entity

const campaign_bid_modifier = {
  // Your CampaignBidModifier here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.campaignBidModifiers.create(campaign_bid_modifier)

// Passing in an array of entities to create, validating only
const result = await customer.campaignBidModifiers.create([campaign_bid_modifier, other_campaign_bid_modifier], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/3827277046/campaignBidModifiers/881817006~8000'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
