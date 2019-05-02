---
title: Create CampaignCriterion
order: 4.1
type: create_code
entity: CampaignCriterion
---

```javascript
// Creating the entity

const campaign_criterion = {
  // Your CampaignCriterion here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.campaignCriteria.create(campaign_criterion)

// Passing in an array of entities to create, validating only
const result = await customer.campaignCriteria.create([campaign_criterion, other_campaign_criterion], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/9262111890/campaignCriteria/1599497210~1000'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
