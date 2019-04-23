---
title: Create AdGroupCriterionLabel 
---

This section describes how to create a AdGroupCriterionLabel.



```javascript

// Creating the entity

const ad_group_criterion_label = {
    // Your AdGroupCriterionLabel here 
}

const results = await customer.adGroupCriterionLabels.create(ad_group_criterion_label)

console.log(results) // ['customers/1234567890/adGroupCriterionLabels/9765432177']

```