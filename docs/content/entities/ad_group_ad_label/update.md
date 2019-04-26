---
title: Update AdGroupAdLabel
order: 5
type: update
entity: AdGroupAdLabel
---

### Update AdGroupAdLabel

This section describes how to update a AdGroupAdLabel.

```javascript
// Updating the entity

const ad_group_ad_label = {
  resource_name: 'customers/3827277046/adGroupAdLabels/37706041185~191743801329~1091971976', // The resource_name is required
  // ...any other fields that you would like to update
}

const result = await customer.adGroupAdLabels.update(ad_group_ad_label)
```

```javascript
// Example result
;['customers/3827277046/adGroupAdLabels/37706041185~191743801329~1091971976']
```
