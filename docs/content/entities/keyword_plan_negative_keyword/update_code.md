---
title: Update KeywordPlanNegativeKeyword
order: 5.1
type: update_code
entity: KeywordPlanNegativeKeyword
---

```javascript
// Updating the entity

const keyword_plan_negative_keyword = {
  resource_name: 'customers/1234567890/keywordPlanNegativeKeywords/123123123', // The resource_name is required
  // ...any other fields that you would like to update
}

// Passing in a single entity to update
const result = await customer.keywordPlanNegativeKeywords.update(keyword_plan_negative_keyword)

// Passing in an array of entities to update, validating only
const result = await customer.keywordPlanNegativeKeywords.update(
  [keyword_plan_negative_keyword, other_keyword_plan_negative_keyword],
  {
    validate_only: true,
  }
)
```

```javascript

// Example result
{
	results : ['customers/1234567890/keywordPlanNegativeKeywords/123123123'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
