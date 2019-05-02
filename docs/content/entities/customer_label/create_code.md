---
title: Create CustomerLabel
order: 4.1
type: create_code
entity: CustomerLabel
---

```javascript
// Creating the entity

const customer_label = {
  // Your CustomerLabel here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.customerLabels.create(customer_label)

// Passing in an array of entities to create, validating only
const result = await customer.customerLabels.create([customer_label, other_customer_label], {
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
