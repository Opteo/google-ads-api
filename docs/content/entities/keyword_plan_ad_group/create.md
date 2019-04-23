---
title: Create KeywordPlanAdGroup 
---

This section describes how to create a KeywordPlanAdGroup.



```javascript

// Creating the entity

const keyword_plan_ad_group = {
    // Your KeywordPlanAdGroup here 
}

const results = await customer.keywordPlanAdGroups.create(keyword_plan_ad_group)

console.log(results) // ['customers/1234567890/keywordPlanAdGroups/9765432177']

```