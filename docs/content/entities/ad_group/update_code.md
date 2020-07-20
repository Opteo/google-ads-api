---
title: Update AdGroup
order: 5.1
type: update_code
entity: AdGroup
---

```javascript
// Updating the entity

const ad_group = {
  resource_name: 'customers/3827277046/adGroups/56761341338', // The resource_name is required
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
	results : ['customers/3827277046/adGroups/56761341338'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
