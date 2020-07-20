---
title: Create SharedSet
order: 4.1
type: create_code
entity: SharedSet
---

```javascript
// Creating the entity

const shared_set = {
  // Your SharedSet here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.sharedSets.create(shared_set)

// Passing in an array of entities to create, validating only
const result = await customer.sharedSets.create([shared_set, other_shared_set], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/9262111890/sharedSets/1788591305'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
