---
title: Create SharedCriterion 
---

This section describes how to create a SharedCriterion.



```javascript

// Creating the entity

const shared_criterion = {
    // Your SharedCriterion here 
}

const results = await customer.sharedCriteria.create(shared_criterion)

console.log(results) // ['customers/1234567890/sharedCriteria/9765432177']

```