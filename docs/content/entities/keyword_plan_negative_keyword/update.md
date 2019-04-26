---
title: Update KeywordPlanNegativeKeyword
order: 5
type: update
entity: KeywordPlanNegativeKeyword
---

### Update KeywordPlanNegativeKeyword

This section describes how to update a KeywordPlanNegativeKeyword.

```javascript
// Updating the entity

const keyword_plan_negative_keyword = {
  resource_name: 'customers/1234567890/keywordPlanNegativeKeywords/123123123', // The resource_name is required
  // ...any other fields that you would like to update
}

const result = await customer.keywordPlanNegativeKeywords.update(keyword_plan_negative_keyword)
```

```javascript
// Example result
;['customers/1234567890/keywordPlanNegativeKeywords/123123123']
```
