---
title: Update AdGroupBidModifier
order: 5.1
type: update_code
entity: AdGroupBidModifier
---

```javascript
// Updating the entity

const ad_group_bid_modifier = {
  resource_name: 'customers/9262111890/adGroupBidModifiers/66537099246~30000', // The resource_name is required
  // ...any other fields that you would like to update
}

// Passing in a single entity to update
const result = await customer.adGroupBidModifiers.update(ad_group_bid_modifier)

// Passing in an array of entities to update, validating only
const result = await customer.adGroupBidModifiers.update([ad_group_bid_modifier, other_ad_group_bid_modifier], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/9262111890/adGroupBidModifiers/66537099246~30000'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
