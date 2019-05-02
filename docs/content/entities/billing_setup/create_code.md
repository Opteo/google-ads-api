---
title: Create BillingSetup
order: 4.1
type: create_code
entity: BillingSetup
---

```javascript
// Creating the entity

const billing_setup = {
  // Your BillingSetup here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.billingSetups.create(billing_setup)

// Passing in an array of entities to create, validating only
const result = await customer.billingSetups.create([billing_setup, other_billing_setup], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/9262111890/billingSetups/465508048'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
