---
title: Create KeywordPlanNegativeKeyword
order: 4.1
type: create_code
entity: KeywordPlanNegativeKeyword
---

```javascript
// Creating the entity

const keyword_plan_negative_keyword = {
  // Your KeywordPlanNegativeKeyword here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.keywordPlanNegativeKeywords.create(keyword_plan_negative_keyword)

// Passing in an array of entities to create, validating only
const result = await customer.keywordPlanNegativeKeywords.create(
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
