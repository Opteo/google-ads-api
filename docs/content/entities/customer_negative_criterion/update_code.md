---
title: Update CustomerNegativeCriterion
order: 5.1
type: update_code
entity: CustomerNegativeCriterion
---

```javascript
// Updating the entity

const customer_negative_criterion = {
  resource_name: 'customers/3827277046/customerNegativeCriteria/297329731575', // The resource_name is required
  // ...any other fields that you would like to update
}

// Passing in a single entity to update
const result = await customer.customerNegativeCriteria.update(customer_negative_criterion)

// Passing in an array of entities to update, validating only
const result = await customer.customerNegativeCriteria.update(
  [customer_negative_criterion, other_customer_negative_criterion],
  {
    validate_only: true,
  }
)
```

```javascript

// Example result
{
	results : ['customers/3827277046/customerNegativeCriteria/297329731575'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
