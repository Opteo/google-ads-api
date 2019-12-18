---
title: Create KeywordPlanAdGroup
order: 4.1
type: create_code
entity: KeywordPlanAdGroup
---

```javascript
// Creating the entity

const keyword_plan_ad_group = {
  // Your KeywordPlanAdGroup here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.keywordPlanAdGroups.create(keyword_plan_ad_group)

// Passing in an array of entities to create, validating only
const result = await customer.keywordPlanAdGroups.create([keyword_plan_ad_group, other_keyword_plan_ad_group], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/9262111890/keywordPlanAdGroups/104819196'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
