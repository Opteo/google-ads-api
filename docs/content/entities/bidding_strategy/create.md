---
title: Create BiddingStrategy
order: 4
type: create
entity: BiddingStrategy
---

This section describes how to create a BiddingStrategy.

```javascript
// Creating the entity

const bidding_strategy = {
    // Your BiddingStrategy here, without immutable fields such as resource_name
}

const results = await customer.biddingStrategies.create(bidding_strategy)

console.log(results) // ['customers/3827277046/biddingStrategies/1534381593']
```
