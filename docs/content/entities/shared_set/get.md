---
title: Get SharedSet
order: 2
type: get
entity: SharedSet
---

The `customer.sharedSets.get()` method returns all fields for one SharedSet, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript
// Getting the entity
let result = await customer.sharedSets.get('customers/9262111890/sharedSets/1788591305')

// Here's what the result might look like
result ===
    {
        resource_name: 'customers/9262111890/sharedSets/1788591305',
        id: 1788591305,
        member_count: 6,
        name: 'My shared set',
        reference_count: 0,
        status: 2,
        type: 2,
    }
```
