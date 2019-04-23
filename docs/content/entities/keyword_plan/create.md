---
title: Create KeywordPlan 
---

This section describes how to create a KeywordPlan.



```javascript

// Creating the entity

const keyword_plan = {
    // Your KeywordPlan here 
}

const results = await customer.keywordPlans.create(keyword_plan)

console.log(results) // ['customers/1234567890/keywordPlans/9765432177']

```