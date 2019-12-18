---
title: Create AdGroupAdLabel
order: 4.1
type: create_code
entity: AdGroupAdLabel
---

```javascript
// Creating the entity

const ad_group_ad_label = {
  // Your AdGroupAdLabel here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.adGroupAdLabels.create(ad_group_ad_label)

// Passing in an array of entities to create, validating only
const result = await customer.adGroupAdLabels.create([ad_group_ad_label, other_ad_group_ad_label], {
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
