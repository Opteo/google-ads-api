---
title: Create CustomerFeed 
---

This section describes how to create a CustomerFeed.



```javascript

// Creating the entity

const customer_feed = {
    // Your CustomerFeed here 
}

const results = await customer.customerFeeds.create(customer_feed)

console.log(results) // ['customers/1234567890/customerFeeds/9765432177']

```