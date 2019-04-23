---
title: Create AdGroupCriterionLabel
order: 4
type: create
entity: AdGroupCriterionLabel
---

This section describes how to create a AdGroupCriterionLabel.

```javascript
// Creating the entity

const ad_group_criterion_label = {
    // Your AdGroupCriterionLabel here, without immutable fields such as resource_name
}

const results = await customer.adGroupCriterionLabels.create(ad_group_criterion_label)

console.log(results) // ['customers/1234567890/adGroupCriterionLabels/123123123']
```
