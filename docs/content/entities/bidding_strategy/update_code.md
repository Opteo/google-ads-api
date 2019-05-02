---
title: Update BiddingStrategy
order: 5.1
type: update_code
entity: BiddingStrategy
---

```javascript
// Updating the entity

const bidding_strategy = {
  resource_name: 'customers/3827277046/biddingStrategies/1534381593', // The resource_name is required
  // ...any other fields that you would like to update
}

// Passing in a single entity to update
const result = await customer.biddingStrategies.update(bidding_strategy)

// Passing in an array of entities to update, validating only
const result = await customer.biddingStrategies.update([bidding_strategy, other_bidding_strategy], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/3827277046/biddingStrategies/1534381593'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
