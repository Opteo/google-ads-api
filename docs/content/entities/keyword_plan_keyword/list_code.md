---
type: list_code
entity: KeywordPlanKeyword
title: List KeywordPlanKeyword
order: 3.1
---

```javascript
// Listing all the keywordPlanKeywords in the account
let result = await customer.keywordPlanKeywords.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.keywordPlanKeywords.list({
  constraints: [
    {
      key: 'keyword_plan_keyword.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'keyword_plan_keyword.some_field.sub_field',
})
```

```javascript
// Example result
;[
  /* Todo: add example list() return here */
]
```
