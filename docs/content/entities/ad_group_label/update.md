---
title: Update AdGroupLabel
order: 5
type: update
entity: AdGroupLabel
---

### Update AdGroupLabel

This section describes how to update a AdGroupLabel.

```javascript
// Updating the entity

const ad_group_label = {
  resource_name: 'customers/3827277046/adGroupLabels/42877626370~3345231412', // The resource_name is required
  // ...any other fields that you would like to update
}

const result = await customer.adGroupLabels.update(ad_group_label)
```

```javascript
// Example result
;['customers/3827277046/adGroupLabels/42877626370~3345231412']
```
