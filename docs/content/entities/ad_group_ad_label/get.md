---
title: Get AdGroupAdLabel
order: 2
type: get
entity: AdGroupAdLabel
---

The `customer.adGroupAdLabels.get()` method returns all fields for one AdGroupAdLabel, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript
// Getting the entity
let result = await customer.adGroupAdLabels.get(
    'customers/3827277046/adGroupAdLabels/37706041185~191743801329~1091971976'
)

// Here's what the result might look like
result ===
    {
        resource_name: 'customers/3827277046/adGroupAdLabels/37706041185~191743801329~1091971976',
        ad_group_ad: 'customers/3827277046/adGroupAds/37706041185~191743801329',
        label: 'customers/3827277046/labels/1091971976',
    }
```
