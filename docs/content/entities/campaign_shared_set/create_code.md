---
title: Create CampaignSharedSet
order: 4.1
type: create_code
entity: CampaignSharedSet
---

```javascript
// Creating the entity

const campaign_shared_set = {
  // Your CampaignSharedSet here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.campaignSharedSets.create(campaign_shared_set)

// Passing in an array of entities to create, validating only
const result = await customer.campaignSharedSets.create([campaign_shared_set, other_campaign_shared_set], {
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
