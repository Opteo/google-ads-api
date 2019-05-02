---
title: Create Campaign
order: 4.1
type: create_code
entity: Campaign
---

```javascript
// Creating the entity

const campaign = {
  // Your Campaign here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.campaigns.create(campaign)

// Passing in an array of entities to create, validating only
const result = await customer.campaigns.create([campaign, other_campaign], {
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
