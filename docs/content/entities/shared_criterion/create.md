---
title: Create SharedCriterion
order: 4
type: create
entity: SharedCriterion
---

### Create SharedCriterion

This section describes how to create a SharedCriterion.

```javascript
// Creating the entity

const shared_criterion = {
  // Your SharedCriterion here, without immutable fields such as resource_name
}

const result = await customer.sharedCriteria.create(shared_criterion)
```

```javascript
// Example result
;['customers/9262111890/sharedCriteria/1788591305~627191652608']
```
