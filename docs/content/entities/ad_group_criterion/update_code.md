---
title: Update AdGroupCriterion
order: 5.1
type: update_code
entity: AdGroupCriterion
---

```javascript
// Updating the entity

const ad_group_criterion = {
  resource_name: 'customers/9262111890/adGroupCriteria/60170225920~521456008776', // The resource_name is required
  // ...any other fields that you would like to update
}

// Passing in a single entity to update
const result = await customer.adGroupCriteria.update(ad_group_criterion)

// Passing in an array of entities to update, validating only
const result = await customer.adGroupCriteria.update([ad_group_criterion, other_ad_group_criterion], {
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
