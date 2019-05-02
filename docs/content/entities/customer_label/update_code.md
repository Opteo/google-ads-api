---
title: Update CustomerLabel
order: 5.1
type: update_code
entity: CustomerLabel
---

```javascript
// Updating the entity

const customer_label = {
  resource_name: 'customers/1234567890/customerLabels/123123123', // The resource_name is required
  // ...any other fields that you would like to update
}

// Passing in a single entity to update
const result = await customer.customerLabels.update(customer_label)

// Passing in an array of entities to update, validating only
const result = await customer.customerLabels.update([customer_label, other_customer_label], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/1234567890/customerLabels/123123123'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
