---
title: Create CustomerManagerLink
order: 4
type: create
entity: CustomerManagerLink
---

This section describes how to create a CustomerManagerLink.

```javascript
// Creating the entity

const customer_manager_link = {
    // Your CustomerManagerLink here, without immutable fields such as resource_name
}

const results = await customer.customerManagerLinks.create(customer_manager_link)

console.log(results) // ['customers/9262111890/customerManagerLinks/6141549892~121665495']
```
