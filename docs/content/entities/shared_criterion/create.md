---
title: Create SharedCriterion
order: 4
type: create
entity: SharedCriterion
---

This section describes how to create a SharedCriterion.

```javascript
// Creating the entity

const shared_criterion = {
    // Your SharedCriterion here, without immutable fields such as resource_name
}

const results = await customer.sharedCriteria.create(shared_criterion)

console.log(results) // ['customers/9262111890/sharedCriteria/1788591305~13223616']
```
