---
title: Update AdGroupCriterionLabel
order: 5
type: update
entity: AdGroupCriterionLabel
---

This section describes how to update a AdGroupCriterionLabel.

```javascript
// Updating the entity

const ad_group_criterion_label = {
    resource_name: 'customers/1234567890/adGroupCriterionLabels/123123123', // The resource_name is required
    // ...any other fields that you would like to update
}

const results = await customer.adGroupCriterionLabels.update(ad_group_criterion_label)

console.log(results) // ['customers/1234567890/adGroupCriterionLabels/123123123']
```
