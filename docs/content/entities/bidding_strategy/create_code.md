---
title: Create BiddingStrategy
order: 4.1
type: create_code
entity: BiddingStrategy
---

```javascript
// Creating the entity

const bidding_strategy = {
  // Your BiddingStrategy here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.biddingStrategies.create(bidding_strategy)

// Passing in an array of entities to create, validating only
const result = await customer.biddingStrategies.create([bidding_strategy, other_bidding_strategy], {
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
