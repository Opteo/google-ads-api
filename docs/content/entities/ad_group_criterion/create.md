---
title: Create AdGroupCriterion
order: 4
type: create
entity: AdGroupCriterion
---

This section describes how to create a AdGroupCriterion.

```javascript
// Creating the entity

const ad_group_criterion = {
    // Your AdGroupCriterion here, without immutable fields such as resource_name
}

const results = await customer.adGroupCriteria.create(ad_group_criterion)

console.log(results) // ['customers/9262111890/adGroupCriteria/56328868446~1165620981']
```
