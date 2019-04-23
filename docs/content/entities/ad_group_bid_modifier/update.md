---
title: Update AdGroupBidModifier
order: 5
type: update
entity: AdGroupBidModifier
---

This section describes how to update a AdGroupBidModifier.

```javascript
// Updating the entity

const ad_group_bid_modifier = {
    resource_name: 'customers/9262111890/adGroupBidModifiers/54493284610~30000', // The resource_name is required
    // ...any other fields that you would like to update
}

const results = await customer.adGroupBidModifiers.update(ad_group_bid_modifier)

console.log(results) // ['customers/9262111890/adGroupBidModifiers/54493284610~30000']
```
