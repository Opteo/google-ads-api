---
title: Create CampaignLabel
order: 4.1
type: create_code
entity: CampaignLabel
---

```javascript
// Creating the entity

const campaign_label = {
  // Your CampaignLabel here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.campaignLabels.create(campaign_label)

// Passing in an array of entities to create, validating only
const result = await customer.campaignLabels.create([campaign_label, other_campaign_label], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/3827277046/campaignLabels/729914321~898377018'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
