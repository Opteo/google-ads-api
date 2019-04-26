---
title: Create BillingSetup
order: 4
type: create
entity: BillingSetup
---

### Create BillingSetup

This section describes how to create a BillingSetup.

```javascript
// Creating the entity

const billing_setup = {
  // Your BillingSetup here, without immutable fields such as resource_name
}

const result = await customer.billingSetups.create(billing_setup)
```

```javascript
// Example result
;['customers/9262111890/billingSetups/465508048']
```
