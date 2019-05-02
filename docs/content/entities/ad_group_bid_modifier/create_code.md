---
title: Create AdGroupBidModifier
order: 4.1
type: create_code
entity: AdGroupBidModifier
---

```javascript
// Creating the entity

const ad_group_bid_modifier = {
  // Your AdGroupBidModifier here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.adGroupBidModifiers.create(ad_group_bid_modifier)

// Passing in an array of entities to create, validating only
const result = await customer.adGroupBidModifiers.create([ad_group_bid_modifier, other_ad_group_bid_modifier], {
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
