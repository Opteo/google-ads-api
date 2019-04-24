---
title: Create CustomerNegativeCriterion
order: 4
type: create
entity: CustomerNegativeCriterion
---

This section describes how to create a CustomerNegativeCriterion.

```javascript
// Creating the entity

const customer_negative_criterion = {
    // Your CustomerNegativeCriterion here, without immutable fields such as resource_name
}

const results = await customer.customerNegativeCriteria.create(customer_negative_criterion)

console.log(results) // ['customers/3827277046/customerNegativeCriteria/1163177997']
```
