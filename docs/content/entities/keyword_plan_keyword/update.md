---
title: Update KeywordPlanKeyword
order: 5
type: update
entity: KeywordPlanKeyword
---

This section describes how to update a KeywordPlanKeyword.

```javascript
// Updating the entity

const keyword_plan_keyword = {
    resource_name: 'customers/1234567890/keywordPlanKeywords/123123123', // The resource_name is required
    // ...any other fields that you would like to update
}

const results = await customer.keywordPlanKeywords.update(keyword_plan_keyword)

console.log(results) // ['customers/1234567890/keywordPlanKeywords/123123123']
```
