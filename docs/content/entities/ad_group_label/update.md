---
title: Update AdGroupLabel
order: 5
type: update
entity: AdGroupLabel
---

This section describes how to update a AdGroupLabel.

```javascript
// Updating the entity

const ad_group_label = {
    resource_name: 'customers/3827277046/adGroupLabels/42877626370~3345231412', // The resource_name is required
    // ...any other fields that you would like to update
}

const results = await customer.adGroupLabels.update(ad_group_label)

console.log(results) // ['customers/3827277046/adGroupLabels/42877626370~3345231412']
```
