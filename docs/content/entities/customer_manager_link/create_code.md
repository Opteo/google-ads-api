---
title: Create CustomerManagerLink
order: 4.1
type: create_code
entity: CustomerManagerLink
---

```javascript
// Creating the entity

const customer_manager_link = {
  // Your CustomerManagerLink here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.customerManagerLinks.create(customer_manager_link)

// Passing in an array of entities to create, validating only
const result = await customer.customerManagerLinks.create([customer_manager_link, other_customer_manager_link], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/9262111890/customerManagerLinks/6141549892~121665495'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
