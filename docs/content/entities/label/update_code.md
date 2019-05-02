---
title: Update Label
order: 5.1
type: update_code
entity: Label
---

```javascript
// Updating the entity

const label = {
  resource_name: 'customers/3827277046/labels/872103121', // The resource_name is required
  // ...any other fields that you would like to update
}

// Passing in a single entity to update
const result = await customer.labels.update(label)

// Passing in an array of entities to update, validating only
const result = await customer.labels.update([label, other_label], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/3827277046/labels/872103121'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
