---
title: Create KeywordPlanKeyword
order: 4
type: create
entity: KeywordPlanKeyword
---

### Create KeywordPlanKeyword

This section describes how to create a KeywordPlanKeyword.

```javascript
// Creating the entity

const keyword_plan_keyword = {
  // Your KeywordPlanKeyword here, without immutable fields such as resource_name
}

const result = await customer.keywordPlanKeywords.create(keyword_plan_keyword)
```

```javascript
// Example result
;['customers/1234567890/keywordPlanKeywords/123123123']
```
