---
title: Update CustomerManagerLink
order: 5.1
type: update_code
entity: CustomerManagerLink
---

```javascript
// Updating the entity

const customer_manager_link = {
  resource_name: 'customers/9262111890/customerManagerLinks/6141549892~121665495', // The resource_name is required
  // ...any other fields that you would like to update
}

// Passing in a single entity to update
const result = await customer.customerManagerLinks.update(customer_manager_link)

// Passing in an array of entities to update, validating only
const result = await customer.customerManagerLinks.update([customer_manager_link, other_customer_manager_link], {
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
