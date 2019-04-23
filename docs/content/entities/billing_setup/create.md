---
title: Create BillingSetup 
---

This section describes how to create a BillingSetup.



```javascript

// Creating the entity

const billing_setup = {
    // Your BillingSetup here 
}

const results = await customer.billingSetup.create(billing_setup)

console.log(results) // ['customers/1234567890/billingSetup/9765432177']

```