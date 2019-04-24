---
title: Update CustomerManagerLink
order: 5
type: update
entity: CustomerManagerLink
---

This section describes how to update a CustomerManagerLink.

```javascript
// Updating the entity

const customer_manager_link = {
    resource_name: 'customers/9262111890/customerManagerLinks/6141549892~121665495', // The resource_name is required
    // ...any other fields that you would like to update
}

const results = await customer.customerManagerLinks.update(customer_manager_link)

console.log(results) // ['customers/9262111890/customerManagerLinks/6141549892~121665495']
```
