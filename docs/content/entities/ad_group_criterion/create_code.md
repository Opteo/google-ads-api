---
title: Create AdGroupCriterion
order: 4.1
type: create_code
entity: AdGroupCriterion
---

```javascript
// Creating the entity

const ad_group_criterion = {
  // Your AdGroupCriterion here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.adGroupCriteria.create(ad_group_criterion)

// Passing in an array of entities to create, validating only
const result = await customer.adGroupCriteria.create([ad_group_criterion, other_ad_group_criterion], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/9262111890/adGroupCriteria/60170225920~521456008776'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
