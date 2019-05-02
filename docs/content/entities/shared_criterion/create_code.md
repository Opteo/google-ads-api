---
title: Create SharedCriterion
order: 4.1
type: create_code
entity: SharedCriterion
---

```javascript
// Creating the entity

const shared_criterion = {
  // Your SharedCriterion here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.sharedCriteria.create(shared_criterion)

// Passing in an array of entities to create, validating only
const result = await customer.sharedCriteria.create([shared_criterion, other_shared_criterion], {
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
