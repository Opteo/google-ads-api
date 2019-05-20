---
title: Update ConversionAction
order: 5.1
type: update_code
entity: ConversionAction
---

```javascript
// Updating the entity

const conversion_action = {
  resource_name: 'customers/9262111890/conversionActions/314732636', // The resource_name is required
  // ...any other fields that you would like to update
}

// Passing in a single entity to update
const result = await customer.conversionActions.update(conversion_action)

// Passing in an array of entities to update, validating only
const result = await customer.conversionActions.update([conversion_action, other_conversion_action], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/9262111890/conversionActions/314732636'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
