---
title: Get AdGroupLabel
order: 2
type: get
entity: AdGroupLabel
---

### Get an AdGroupLabel

The `customer.adGroupLabels.get(resource_name)` method returns the AdGroupLabel identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that AdGroupLabel

#### Returns

Returns that AdGroupLabel as an object.

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
