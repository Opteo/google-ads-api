---
title: Create CustomerClientLink
order: 4.1
type: create_code
entity: CustomerClientLink
---

```javascript
// Creating the entity

const customer_client_link = {
  // Your CustomerClientLink here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.customerClientLinks.create(customer_client_link)

// Passing in an array of entities to create, validating only
const result = await customer.customerClientLinks.create([customer_client_link, other_customer_client_link], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/1234567890/customerClientLinks/123123123'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
