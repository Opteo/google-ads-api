---
title: Create AdGroup
order: 4.1
type: create_code
entity: AdGroup
---

```javascript
// Creating the entity

const ad_group = {
  // Your AdGroup here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.adGroups.create(ad_group)

// Passing in an array of entities to create, validating only
const result = await customer.adGroups.create([ad_group, other_ad_group], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/9262111890/adGroups/60937781178'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
