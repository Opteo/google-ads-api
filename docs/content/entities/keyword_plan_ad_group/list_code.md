---
type: list_code
entity: KeywordPlanAdGroup
title: List KeywordPlanAdGroup
order: 3.1
---

```javascript
// Listing all the keywordPlanAdGroups in the account
let result = await customer.keywordPlanAdGroups.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.keywordPlanAdGroups.list({
  constraints: [
    {
      key: 'keyword_plan_ad_group.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'keyword_plan_ad_group.some_field.sub_field',
})
```

```javascript
// Example result
;[
  /* Todo: add example list() return here */
]
```
