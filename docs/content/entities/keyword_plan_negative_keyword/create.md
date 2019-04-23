---
title: Create KeywordPlanNegativeKeyword
order: 4
type: create
entity: KeywordPlanNegativeKeyword
---

This section describes how to create a KeywordPlanNegativeKeyword.

```javascript
// Creating the entity

const keyword_plan_negative_keyword = {
    // Your KeywordPlanNegativeKeyword here, without immutable fields such as resource_name
}

const results = await customer.keywordPlanNegativeKeywords.create(keyword_plan_negative_keyword)

console.log(results) // ['customers/1234567890/keywordPlanNegativeKeywords/123123123']
```
