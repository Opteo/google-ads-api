---
title: Update AdGroupAd
order: 5.1
type: update_code
entity: AdGroupAd
---

```javascript
// Updating the entity

const ad_group_ad = {
  resource_name: 'customers/9262111890/adGroupAds/63236814369~303721890851', // The resource_name is required
  // ...any other fields that you would like to update
}

// Passing in a single entity to update
const result = await customer.adGroupAds.update(ad_group_ad)

// Passing in an array of entities to update, validating only
const result = await customer.adGroupAds.update([ad_group_ad, other_ad_group_ad], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/9262111890/adGroupAds/63236814369~303721890851'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
