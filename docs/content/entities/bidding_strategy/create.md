---
title: Create BiddingStrategy 
---

This section describes how to create a BiddingStrategy.



```javascript

// Creating the entity

const bidding_strategy = {
    // Your BiddingStrategy here 
}

const results = await customer.biddingStrategies.create(bidding_strategy)

console.log(results) // ['customers/1234567890/biddingStrategies/9765432177']

```