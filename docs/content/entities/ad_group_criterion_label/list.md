---
type: list
entity: AdGroupCriterionLabel
title: List AdGroupCriterionLabel
order: 3
---

### List all AdGroupCriterionLabel

This `customer.adGroupCriterionLabels.list()` method works just like `get`, except that it returns all of the entities in the account. It isn't rate limited, but it can be very slow, so use it sparingly.

```javascript
// Listing all the adGroupCriterionLabels in the account
let result = await customer.adGroupCriterionLabels.list()

// Listing with constraints and a limited number of results
let result = await customer.adGroupCriterionLabels.list({
  constraints: [
    {
      key: 'ad_group_criterion_label.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
})
```

```javascript

// Example result
[// Todo: add example list() return here]

```
