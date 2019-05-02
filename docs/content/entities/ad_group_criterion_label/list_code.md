---
type: list_code
entity: AdGroupCriterionLabel
title: List AdGroupCriterionLabel
order: 3.1
---

```javascript
// Listing all the adGroupCriterionLabels in the account
let result = await customer.adGroupCriterionLabels.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.adGroupCriterionLabels.list({
  constraints: [
    {
      key: 'ad_group_criterion_label.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'ad_group_criterion_label.some_field.sub_field',
})
```

```javascript

// Example result
[// Todo: add example list() return here]

```
