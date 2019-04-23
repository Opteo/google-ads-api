---
title: Update BillingSetup
order: 5
type: update
entity: BillingSetup
---

This section describes how to update a BillingSetup.

```javascript
// Updating the entity

const billing_setup = {
    resource_name: 'customers/9262111890/billingSetups/465508048', // The resource_name is required
    // ...any other fields that you would like to update
}

const results = await customer.billingSetups.update(billing_setup)

console.log(results) // ['customers/9262111890/billingSetups/465508048']
```
