---
title: Get AdGroupAdLabel
order: 2.1
type: get_code
entity: AdGroupAdLabel
---

```javascript
// Getting the entity
let result = await customer.adGroupAdLabels.get(
  'customers/3827277046/adGroupAdLabels/37706041185~191743801329~1091971976'
)
```

```javascript
// Example result
;({
  resource_name: 'customers/3827277046/adGroupAdLabels/37706041185~191743801329~1091971976',
  ad_group_ad: 'customers/3827277046/adGroupAds/37706041185~191743801329',
  label: 'customers/3827277046/labels/1091971976',
})
```
