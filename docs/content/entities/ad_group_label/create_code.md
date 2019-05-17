---
title: Create AdGroupLabel
order: 4.1
type: create_code
entity: AdGroupLabel
---

```javascript
// Creating the entity

const ad_group_label = {
  // Your AdGroupLabel here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.adGroupLabels.create(ad_group_label)

// Passing in an array of entities to create, validating only
const result = await customer.adGroupLabels.create([ad_group_label, other_ad_group_label], {
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
