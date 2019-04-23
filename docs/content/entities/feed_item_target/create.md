---
title: Create FeedItemTarget 
---

This section describes how to create a FeedItemTarget.



```javascript

// Creating the entity

const feed_item_target = {
    // Your FeedItemTarget here 
}

const results = await customer.feedItemTargets.create(feed_item_target)

console.log(results) // ['customers/1234567890/feedItemTargets/9765432177']

```