---
title: Get AdGroupLabel
order: 2
type: get
entity: AdGroupLabel
---

### Get AdGroupLabel

The `customer.adGroupLabels.get()` method returns all fields for one AdGroupLabel, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript
// Getting the entity
let result = await customer.adGroupLabels.get('customers/3827277046/adGroupLabels/42877626370~3345231412')
```

```javascript
// Example result
;({
  resource_name: 'customers/3827277046/adGroupLabels/42877626370~3345231412',
  ad_group: 'customers/3827277046/adGroups/42877626370',
  label: 'customers/3827277046/labels/3345231412',
})
```
