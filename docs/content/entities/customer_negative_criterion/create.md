---
title: Create CustomerNegativeCriterion 
---

This section describes how to create a CustomerNegativeCriterion.



```javascript

// Creating the entity

const customer_negative_criterion = {
    // Your CustomerNegativeCriterion here 
}

const results = await customer.customerNegativeCriteria.create(customer_negative_criterion)

console.log(results) // ['customers/1234567890/customerNegativeCriteria/9765432177']

```