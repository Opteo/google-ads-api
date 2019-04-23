---
title: Create BillingSetup 
---

This section describes how to create a BillingSetup.



```javascript

// Creating the entity

const billing_setup = {
    // Your BillingSetup here 
}

const results = await customer.billingSetups.create(billing_setup)

console.log(results) // ['customers/1234567890/billingSetups/9765432177']

```