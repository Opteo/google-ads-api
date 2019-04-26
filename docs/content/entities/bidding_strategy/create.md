---
title: Create BiddingStrategy
order: 4
type: create
entity: BiddingStrategy
---

### Create BiddingStrategy

This section describes how to create a BiddingStrategy.

```javascript
// Creating the entity

const bidding_strategy = {
  // Your BiddingStrategy here, without immutable fields such as resource_name
}

const result = await customer.biddingStrategies.create(bidding_strategy)
```

```javascript
// Example result
;['customers/3827277046/biddingStrategies/1534381593']
```
