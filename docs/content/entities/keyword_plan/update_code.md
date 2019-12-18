---
title: Update KeywordPlan
order: 5.1
type: update_code
entity: KeywordPlan
---

```javascript
// Updating the entity

const keyword_plan = {
  resource_name: 'customers/9262111890/keywordPlans/115113466', // The resource_name is required
  // ...any other fields that you would like to update
}

// Passing in a single entity to update
const result = await customer.keywordPlans.update(keyword_plan)

// Passing in an array of entities to update, validating only
const result = await customer.keywordPlans.update([keyword_plan, other_keyword_plan], {
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
