---
title: Create AdGroupBidModifier
order: 4
type: create
entity: AdGroupBidModifier
---

### Create AdGroupBidModifier

This section describes how to create a AdGroupBidModifier.

```javascript
// Creating the entity

const ad_group_bid_modifier = {
  // Your AdGroupBidModifier here, without immutable fields such as resource_name
}

const result = await customer.adGroupBidModifiers.create(ad_group_bid_modifier)
```

```javascript
// Example result
;['customers/9262111890/adGroupBidModifiers/66537099246~30000']
```
