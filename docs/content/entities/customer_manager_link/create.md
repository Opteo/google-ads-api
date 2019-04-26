---
title: Create CustomerManagerLink
order: 4
type: create
entity: CustomerManagerLink
---

### Create CustomerManagerLink

This section describes how to create a CustomerManagerLink.

```javascript
// Creating the entity

const customer_manager_link = {
  // Your CustomerManagerLink here, without immutable fields such as resource_name
}

const result = await customer.customerManagerLinks.create(customer_manager_link)
```

```javascript
// Example result
;['customers/9262111890/customerManagerLinks/6141549892~121665495']
```
