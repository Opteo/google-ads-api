---
title: Update CampaignLabel
order: 5.1
type: update_code
entity: CampaignLabel
---

```javascript
// Updating the entity

const campaign_label = {
  resource_name: 'customers/3827277046/campaignLabels/881817006~898377018', // The resource_name is required
  // ...any other fields that you would like to update
}

// Passing in a single entity to update
const result = await customer.campaignLabels.update(campaign_label)

// Passing in an array of entities to update, validating only
const result = await customer.campaignLabels.update([campaign_label, other_campaign_label], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/3827277046/campaignLabels/881817006~898377018'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
