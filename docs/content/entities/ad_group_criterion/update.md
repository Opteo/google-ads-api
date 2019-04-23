---
title: Update AdGroupCriterion
order: 5
type: update
entity: AdGroupCriterion
---

This section describes how to update a AdGroupCriterion.

```javascript
// Updating the entity

const ad_group_criterion = {
    resource_name: 'customers/9262111890/adGroupCriteria/56328868446~1165620981', // The resource_name is required
    // ...any other fields that you would like to update
}

const results = await customer.adGroupCriteria.update(ad_group_criterion)

console.log(results) // ['customers/9262111890/adGroupCriteria/56328868446~1165620981']
```
