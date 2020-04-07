---
title: Update AdGroupLabel
order: 5.1
type: update_code
entity: AdGroupLabel
---

```javascript
// Updating the entity

const ad_group_label = {
  resource_name: 'customers/3827277046/adGroupLabels/69639056828~3345231412', // The resource_name is required
  // ...any other fields that you would like to update
}

// Passing in a single entity to update
const result = await customer.adGroupLabels.update(ad_group_label)

// Passing in an array of entities to update, validating only
const result = await customer.adGroupLabels.update([ad_group_label, other_ad_group_label], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/3827277046/adGroupLabels/69639056828~3345231412'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
