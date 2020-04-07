---
title: Update SharedCriterion
order: 5.1
type: update_code
entity: SharedCriterion
---

```javascript
// Updating the entity

const shared_criterion = {
  resource_name: 'customers/9262111890/sharedCriteria/1788591305~627191652608', // The resource_name is required
  // ...any other fields that you would like to update
}

// Passing in a single entity to update
const result = await customer.sharedCriteria.update(shared_criterion)

// Passing in an array of entities to update, validating only
const result = await customer.sharedCriteria.update([shared_criterion, other_shared_criterion], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/9262111890/sharedCriteria/1788591305~627191652608'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
