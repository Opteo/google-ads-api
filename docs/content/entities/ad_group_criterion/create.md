---
title: Create AdGroupCriterion
order: 4
type: create
entity: AdGroupCriterion
---

### Create AdGroupCriterion

This section describes how to create a AdGroupCriterion.

```javascript
// Creating the entity

const ad_group_criterion = {
  // Your AdGroupCriterion here, without immutable fields such as resource_name
}

const result = await customer.adGroupCriteria.create(ad_group_criterion)
```

```javascript
// Example result
;['customers/9262111890/adGroupCriteria/60170225920~521456008776']
```
