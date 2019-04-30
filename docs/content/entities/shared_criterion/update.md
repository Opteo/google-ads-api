---
title: Update SharedCriterion
order: 5
type: update
entity: SharedCriterion
---

### Update SharedCriterion

This section describes how to update a SharedCriterion.

```javascript
// Updating the entity

const shared_criterion = {
  resource_name: 'customers/9262111890/sharedCriteria/1788591305~627191652608', // The resource_name is required
  // ...any other fields that you would like to update
}

const result = await customer.sharedCriteria.update(shared_criterion)
```

```javascript
// Example result
;['customers/9262111890/sharedCriteria/1788591305~627191652608']
```
