---
title: Update Campaign
order: 5.1
type: update_code
entity: Campaign
---

```javascript
// Updating the entity

const campaign = {
  resource_name: 'customers/9262111890/campaigns/1568629385', // The resource_name is required
  // ...any other fields that you would like to update
}

// Passing in a single entity to update
const result = await customer.campaigns.update(campaign)

// Passing in an array of entities to update, validating only
const result = await customer.campaigns.update([campaign, other_campaign], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/9262111890/campaigns/1568629385'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
