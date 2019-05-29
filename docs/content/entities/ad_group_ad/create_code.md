---
title: Create AdGroupAd
order: 4.1
type: create_code
entity: AdGroupAd
---

```javascript
// Creating the entity

const ad_group_ad = {
  // Your AdGroupAd here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.adGroupAds.create(ad_group_ad)

// Passing in an array of entities to create, validating only
const result = await customer.adGroupAds.create([ad_group_ad, other_ad_group_ad], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/9262111890/adGroupAds/56328868446~284706472002'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
