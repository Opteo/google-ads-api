---
title: Create AdGroupCriterionLabel
order: 4.1
type: create_code
entity: AdGroupCriterionLabel
---

```javascript
// Creating the entity

const ad_group_criterion_label = {
  // Your AdGroupCriterionLabel here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.adGroupCriterionLabels.create(ad_group_criterion_label)

// Passing in an array of entities to create, validating only
const result = await customer.adGroupCriterionLabels.create(
  [ad_group_criterion_label, other_ad_group_criterion_label],
  {
    validate_only: true,
  }
)
```

```javascript

// Example result
{
	results : ['customers/1234567890/adGroupCriterionLabels/123123123'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
