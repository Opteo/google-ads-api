---
title: Create AdGroupBidModifier 
---

This section describes how to create a AdGroupBidModifier.



```javascript

// Creating the entity

const ad_group_bid_modifier = {
    // Your AdGroupBidModifier here 
}

const results = await customer.adGroupBidModifiers.create(ad_group_bid_modifier)

console.log(results) // ['customers/1234567890/adGroupBidModifiers/9765432177']

```