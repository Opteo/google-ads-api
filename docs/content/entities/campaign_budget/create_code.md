---
title: Create CampaignBudget
order: 4.1
type: create_code
entity: CampaignBudget
---

```javascript
// Creating the entity

const campaign_budget = {
  // Your CampaignBudget here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.campaignBudgets.create(campaign_budget)

// Passing in an array of entities to create, validating only
const result = await customer.campaignBudgets.create([campaign_budget, other_campaign_budget], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/9262111890/campaignBudgets/1624493702'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
