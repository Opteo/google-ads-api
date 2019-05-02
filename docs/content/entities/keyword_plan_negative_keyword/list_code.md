---
type: list_code
entity: KeywordPlanNegativeKeyword
title: List KeywordPlanNegativeKeyword
order: 3.1
---

```javascript
// Listing all the keywordPlanNegativeKeywords in the account
let result = await customer.keywordPlanNegativeKeywords.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.keywordPlanNegativeKeywords.list({
  constraints: [
    {
      key: 'keyword_plan_negative_keyword.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'keyword_plan_negative_keyword.some_field.sub_field',
})
```

```javascript

// Example result
[// Todo: add example list() return here]

```
