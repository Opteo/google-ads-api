---
title: Create CustomerNegativeCriterion
order: 4.1
type: create_code
entity: CustomerNegativeCriterion
---

```javascript
// Creating the entity

const customer_negative_criterion = {
  // Your CustomerNegativeCriterion here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.customerNegativeCriteria.create(customer_negative_criterion)

// Passing in an array of entities to create, validating only
const result = await customer.customerNegativeCriteria.create(
  [customer_negative_criterion, other_customer_negative_criterion],
  {
    validate_only: true,
  }
)
```

```javascript

// Example result
{
	results : ['customers/3827277046/customerNegativeCriteria/1163177997'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
