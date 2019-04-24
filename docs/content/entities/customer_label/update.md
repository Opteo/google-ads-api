---
title: Update CustomerLabel
order: 5
type: update
entity: CustomerLabel
---

This section describes how to update a CustomerLabel.

```javascript
// Updating the entity

const customer_label = {
    resource_name: 'customers/1234567890/customerLabels/123123123', // The resource_name is required
    // ...any other fields that you would like to update
}

const results = await customer.customerLabels.update(customer_label)

console.log(results) // ['customers/1234567890/customerLabels/123123123']
```
