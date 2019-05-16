---
title: Update CampaignCriterion
order: 5.1
type: update_code
entity: CampaignCriterion
---

```javascript
// Updating the entity

const campaign_criterion = {
  resource_name: 'customers/9262111890/campaignCriteria/1599497210~1000', // The resource_name is required
  // ...any other fields that you would like to update
}

// Passing in a single entity to update
const result = await customer.campaignCriteria.update(campaign_criterion)

// Passing in an array of entities to update, validating only
const result = await customer.campaignCriteria.update([campaign_criterion, other_campaign_criterion], {
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
