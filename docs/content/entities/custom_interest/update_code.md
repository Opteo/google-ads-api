---
title: Update CustomInterest
order: 5.1
type: update_code
entity: CustomInterest
---

```javascript
// Updating the entity

const custom_interest = {
  resource_name: 'customers/3827277046/customInterests/13338354', // The resource_name is required
  // ...any other fields that you would like to update
}

// Passing in a single entity to update
const result = await customer.customInterests.update(custom_interest)

// Passing in an array of entities to update, validating only
const result = await customer.customInterests.update([custom_interest, other_custom_interest], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/3827277046/customInterests/13338354'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
