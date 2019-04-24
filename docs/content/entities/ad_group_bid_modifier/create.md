---
title: Create AdGroupBidModifier
order: 4
type: create
entity: AdGroupBidModifier
---

This section describes how to create a AdGroupBidModifier.

```javascript
// Creating the entity

const ad_group_bid_modifier = {
    // Your AdGroupBidModifier here, without immutable fields such as resource_name
}

const results = await customer.adGroupBidModifiers.create(ad_group_bid_modifier)

console.log(results) // ['customers/9262111890/adGroupBidModifiers/54493284610~30000']
```
