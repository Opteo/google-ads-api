---
title: Update SharedCriterion
order: 5
type: update
entity: SharedCriterion
---

This section describes how to update a SharedCriterion.

```javascript
// Updating the entity

const shared_criterion = {
    resource_name: 'customers/9262111890/sharedCriteria/1788591305~13223616', // The resource_name is required
    // ...any other fields that you would like to update
}

const results = await customer.sharedCriteria.update(shared_criterion)

console.log(results) // ['customers/9262111890/sharedCriteria/1788591305~13223616']
```
