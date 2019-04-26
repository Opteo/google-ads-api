---
title: Create AdGroupLabel
order: 4
type: create
entity: AdGroupLabel
---

### Create AdGroupLabel

This section describes how to create a AdGroupLabel.

```javascript
// Creating the entity

const ad_group_label = {
  // Your AdGroupLabel here, without immutable fields such as resource_name
}

const result = await customer.adGroupLabels.create(ad_group_label)
```

```javascript
// Example result
;['customers/3827277046/adGroupLabels/42877626370~3345231412']
```
