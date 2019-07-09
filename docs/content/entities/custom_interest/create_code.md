---
title: Create CustomInterest
order: 4.1
type: create_code
entity: CustomInterest
---

```javascript
// Creating the entity

const custom_interest = {
  // Your CustomInterest here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.customInterests.create(custom_interest)

// Passing in an array of entities to create, validating only
const result = await customer.customInterests.create([custom_interest, other_custom_interest], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/3827277046/customInterests/13338354'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
