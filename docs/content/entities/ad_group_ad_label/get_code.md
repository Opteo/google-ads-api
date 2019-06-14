---
title: Get AdGroupAdLabel
order: 2.1
type: get_code
entity: AdGroupAdLabel
---

```javascript
// Getting the entity
let result = await customer.adGroupAdLabels.get(
  'customers/3827277046/adGroupAdLabels/37706041345~204347238383~1285360183'
)
```

```javascript
// Example result
;({
  ad_group_ad: 'customers/3827277046/adGroupAds/37706041345~204347238383',
  label: 'customers/3827277046/labels/1285360183',
  resource_name: 'customers/3827277046/adGroupAdLabels/37706041345~204347238383~1285360183',
})
```
