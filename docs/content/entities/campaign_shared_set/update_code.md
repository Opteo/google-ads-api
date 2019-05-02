---
title: Update CampaignSharedSet
order: 5.1
type: update_code
entity: CampaignSharedSet
---

```javascript
// Updating the entity

const campaign_shared_set = {
  resource_name: 'customers/9262111890/campaignSharedSets/1485014801~1788591305', // The resource_name is required
  // ...any other fields that you would like to update
}

// Passing in a single entity to update
const result = await customer.campaignSharedSets.update(campaign_shared_set)

// Passing in an array of entities to update, validating only
const result = await customer.campaignSharedSets.update([campaign_shared_set, other_campaign_shared_set], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/9262111890/campaignSharedSets/1485014801~1788591305'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
