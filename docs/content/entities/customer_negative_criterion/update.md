---
title: Update CustomerNegativeCriterion
order: 5
type: update
entity: CustomerNegativeCriterion
---

This section describes how to update a CustomerNegativeCriterion.

```javascript
// Updating the entity

const customer_negative_criterion = {
    resource_name: 'customers/3827277046/customerNegativeCriteria/1163177997', // The resource_name is required
    // ...any other fields that you would like to update
}

const results = await customer.customerNegativeCriteria.update(customer_negative_criterion)

console.log(results) // ['customers/3827277046/customerNegativeCriteria/1163177997']
```
