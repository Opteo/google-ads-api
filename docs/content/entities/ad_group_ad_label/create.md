---
title: Create AdGroupAdLabel
order: 4
type: create
entity: AdGroupAdLabel
---

### Create AdGroupAdLabel

This section describes how to create a AdGroupAdLabel.

```javascript
// Creating the entity

const ad_group_ad_label = {
  // Your AdGroupAdLabel here, without immutable fields such as resource_name
}

const result = await customer.adGroupAdLabels.create(ad_group_ad_label)
```

```javascript
// Example result
;['customers/3827277046/adGroupAdLabels/37706041185~191743801329~1091971976']
```
