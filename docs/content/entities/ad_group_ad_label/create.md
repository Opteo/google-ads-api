---
title: Create AdGroupAdLabel
order: 4
type: create
entity: AdGroupAdLabel
---

This section describes how to create a AdGroupAdLabel.

```javascript
// Creating the entity

const ad_group_ad_label = {
    // Your AdGroupAdLabel here, without immutable fields such as resource_name
}

const results = await customer.adGroupAdLabels.create(ad_group_ad_label)

console.log(results) // ['customers/3827277046/adGroupAdLabels/37706041185~191743801329~1091971976']
```
