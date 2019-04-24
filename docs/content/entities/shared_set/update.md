---
title: Update SharedSet
order: 5
type: update
entity: SharedSet
---

This section describes how to update a SharedSet.

```javascript
// Updating the entity

const shared_set = {
    resource_name: 'customers/9262111890/sharedSets/1788591305', // The resource_name is required
    // ...any other fields that you would like to update
}

const results = await customer.sharedSets.update(shared_set)

console.log(results) // ['customers/9262111890/sharedSets/1788591305']
```
