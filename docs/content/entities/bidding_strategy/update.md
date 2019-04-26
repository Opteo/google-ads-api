---
title: Update BiddingStrategy
order: 5
type: update
entity: BiddingStrategy
---

### Update BiddingStrategy

This section describes how to update a BiddingStrategy.

```javascript
// Updating the entity

const bidding_strategy = {
  resource_name: 'customers/3827277046/biddingStrategies/1534381593', // The resource_name is required
  // ...any other fields that you would like to update
}

const result = await customer.biddingStrategies.update(bidding_strategy)
```

```javascript
// Example result
;['customers/3827277046/biddingStrategies/1534381593']
```
