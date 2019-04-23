---
title: Create SharedSet
order: 4
type: create
entity: SharedSet
---

This section describes how to create a SharedSet.

```javascript
// Creating the entity

const shared_set = {
    // Your SharedSet here, without immutable fields such as resource_name
}

const results = await customer.sharedSets.create(shared_set)

console.log(results) // ['customers/9262111890/sharedSets/1788591305']
```
