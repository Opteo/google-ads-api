---
title: Create AdGroupCriterion 
---

This section describes how to create a AdGroupCriterion.



```javascript

// Creating the entity

const ad_group_criterion = {
    // Your AdGroupCriterion here 
}

const results = await customer.adGroupCriteria.create(ad_group_criterion)

console.log(results) // ['customers/1234567890/adGroupCriteria/9765432177']

```