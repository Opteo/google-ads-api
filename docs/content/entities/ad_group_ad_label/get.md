---
title: Get AdGroupAdLabel
order: 2
type: get
entity: AdGroupAdLabel
---

### Get an AdGroupAdLabel

The `customer.adGroupAdLabels.get(resource_name)` method returns the AdGroupAdLabel identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that AdGroupAdLabel

#### Returns

Returns that AdGroupAdLabel as an object.

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
