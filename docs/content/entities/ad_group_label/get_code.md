---
title: Get AdGroupLabel
order: 2.1
type: get_code
entity: AdGroupLabel
---

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
