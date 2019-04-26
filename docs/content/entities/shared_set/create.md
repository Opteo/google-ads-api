---
title: Create SharedSet
order: 4
type: create
entity: SharedSet
---

### Create SharedSet

This section describes how to create a SharedSet.

```javascript
// Creating the entity

const shared_set = {
  // Your SharedSet here, without immutable fields such as resource_name
}

const result = await customer.sharedSets.create(shared_set)
```

```javascript
// Example result
;['customers/9262111890/sharedSets/1788591305']
```
