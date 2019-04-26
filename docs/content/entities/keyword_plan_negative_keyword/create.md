---
title: Create KeywordPlanNegativeKeyword
order: 4
type: create
entity: KeywordPlanNegativeKeyword
---

### Create KeywordPlanNegativeKeyword

This section describes how to create a KeywordPlanNegativeKeyword.

```javascript
// Creating the entity

const keyword_plan_negative_keyword = {
  // Your KeywordPlanNegativeKeyword here, without immutable fields such as resource_name
}

const result = await customer.keywordPlanNegativeKeywords.create(keyword_plan_negative_keyword)
```

```javascript
// Example result
;['customers/1234567890/keywordPlanNegativeKeywords/123123123']
```
