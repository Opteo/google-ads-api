---
title: Create Label
order: 4.1
type: create_code
entity: Label
---

```javascript
// Creating the entity

const label = {
  // Your Label here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.labels.create(label)

// Passing in an array of entities to create, validating only
const result = await customer.labels.create([label, other_label], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/3827277046/labels/872103121'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
