---
title: Update CampaignBudget
order: 5.1
type: update_code
entity: CampaignBudget
---

```javascript
// Updating the entity

const campaign_budget = {
  resource_name: 'customers/9262111890/campaignBudgets/1624493702', // The resource_name is required
  // ...any other fields that you would like to update
}

// Passing in a single entity to update
const result = await customer.campaignBudgets.update(campaign_budget)

// Passing in an array of entities to update, validating only
const result = await customer.campaignBudgets.update([campaign_budget, other_campaign_budget], {
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
