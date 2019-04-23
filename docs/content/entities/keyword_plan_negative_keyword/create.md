---
title: Create KeywordPlanNegativeKeyword 
---

This section describes how to create a KeywordPlanNegativeKeyword.



```javascript

// Creating the entity

const keyword_plan_negative_keyword = {
    // Your KeywordPlanNegativeKeyword here 
}

const results = await customer.keywordPlanNegativeKeywords.create(keyword_plan_negative_keyword)

console.log(results) // ['customers/1234567890/keywordPlanNegativeKeywords/9765432177']

```