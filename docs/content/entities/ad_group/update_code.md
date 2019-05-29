---
title: Update AdGroup
order: 5.1
type: update_code
entity: AdGroup
---

```javascript
// Updating the entity

const ad_group = {
  resource_name: 'customers/9262111890/adGroups/60937781178', // The resource_name is required
  // ...any other fields that you would like to update
}

// Passing in a single entity to update
const result = await customer.adGroups.update(ad_group)

// Passing in an array of entities to update, validating only
const result = await customer.adGroups.update([ad_group, other_ad_group], {
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
