---
title: Create ConversionAction
order: 4.1
type: create_code
entity: ConversionAction
---

```javascript
// Creating the entity

const conversion_action = {
  // Your ConversionAction here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.conversionActions.create(conversion_action)

// Passing in an array of entities to create, validating only
const result = await customer.conversionActions.create([conversion_action, other_conversion_action], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/3827277046/conversionActions/238277646'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
