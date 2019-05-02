---
title: Update BillingSetup
order: 5.1
type: update_code
entity: BillingSetup
---

```javascript
// Updating the entity

const billing_setup = {
  resource_name: 'customers/9262111890/billingSetups/465508048', // The resource_name is required
  // ...any other fields that you would like to update
}

// Passing in a single entity to update
const result = await customer.billingSetups.update(billing_setup)

// Passing in an array of entities to update, validating only
const result = await customer.billingSetups.update([billing_setup, other_billing_setup], {
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
