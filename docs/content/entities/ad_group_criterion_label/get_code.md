---
title: Get AdGroupCriterionLabel
order: 2.1
type: get_code
entity: AdGroupCriterionLabel
---

```javascript
// Getting the entity
let result = await customer.adGroupCriterionLabels.get(
  'customers/3827277046/adGroupCriterionLabels/45808681353~331634074542~3866969030'
)
```

```javascript
// Example result
;({
  ad_group_criterion: 'customers/3827277046/adGroupCriteria/45808681353~331634074542',
  label: 'customers/3827277046/labels/3866969030',
  resource_name: 'customers/3827277046/adGroupCriterionLabels/45808681353~331634074542~3866969030',
})
```
