---
type: list
entity: KeywordPlanKeyword
title: List KeywordPlanKeyword
order: 3
---

### List all KeywordPlanKeyword

This `customer.keywordPlanKeywords.list()` method works just like `get`, except that it returns all of the entities in the account. It isn't rate limited, but it can be very slow, so use it sparingly.

```javascript
// Listing all the keywordPlanKeywords in the account
let result = await customer.keywordPlanKeywords.list()

// Listing with constraints and a limited number of results
let result = await customer.keywordPlanKeywords.list({
  constraints: [
    {
      key: 'keyword_plan_keyword.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
})
```

```javascript

// Example result
[// Todo: add example list() return here]

```
