---
title: Create KeywordPlan
order: 4.1
type: create_code
entity: KeywordPlan
---

```javascript
// Creating the entity

const keyword_plan = {
  // Your KeywordPlan here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.keywordPlans.create(keyword_plan)

// Passing in an array of entities to create, validating only
const result = await customer.keywordPlans.create([keyword_plan, other_keyword_plan], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/9262111890/keywordPlans/115113466'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
