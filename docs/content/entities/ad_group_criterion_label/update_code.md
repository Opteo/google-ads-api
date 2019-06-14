---
title: Update AdGroupCriterionLabel
order: 5.1
type: update_code
entity: AdGroupCriterionLabel
---

```javascript
// Updating the entity

const ad_group_criterion_label = {
  resource_name: 'customers/3827277046/adGroupCriterionLabels/45808681353~331634074542~3866969030', // The resource_name is required
  // ...any other fields that you would like to update
}

// Passing in a single entity to update
const result = await customer.adGroupCriterionLabels.update(ad_group_criterion_label)

// Passing in an array of entities to update, validating only
const result = await customer.adGroupCriterionLabels.update(
  [ad_group_criterion_label, other_ad_group_criterion_label],
  {
    validate_only: true,
  }
)
```

```javascript

// Example result
{
	results : ['customers/3827277046/adGroupCriterionLabels/45808681353~331634074542~3866969030'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
