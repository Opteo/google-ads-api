---
title: Update AdGroupAdLabel
order: 5.1
type: update_code
entity: AdGroupAdLabel
---

```javascript
// Updating the entity

const ad_group_ad_label = {
  resource_name: 'customers/3827277046/adGroupAdLabels/37706041345~206217423725~1285360183', // The resource_name is required
  // ...any other fields that you would like to update
}

// Passing in a single entity to update
const result = await customer.adGroupAdLabels.update(ad_group_ad_label)

// Passing in an array of entities to update, validating only
const result = await customer.adGroupAdLabels.update([ad_group_ad_label, other_ad_group_ad_label], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/3827277046/adGroupAdLabels/37706041345~206217423725~1285360183'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
