---
title: Create KeywordPlanKeyword
order: 4
type: create
entity: KeywordPlanKeyword
---

This section describes how to create a KeywordPlanKeyword.

```javascript
// Creating the entity

const keyword_plan_keyword = {
    // Your KeywordPlanKeyword here, without immutable fields such as resource_name
}

const results = await customer.keywordPlanKeywords.create(keyword_plan_keyword)

console.log(results) // ['customers/1234567890/keywordPlanKeywords/123123123']
```
