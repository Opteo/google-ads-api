---
title: Update CustomInterest
order: 5
type: update
entity: CustomInterest
---

This section describes how to update a CustomInterest.

```javascript
// Updating the entity

const custom_interest = {
    resource_name: 'customers/1234567890/customInterests/123123123', // The resource_name is required
    // ...any other fields that you would like to update
}

const results = await customer.customInterests.update(custom_interest)

console.log(results) // ['customers/1234567890/customInterests/123123123']
```
