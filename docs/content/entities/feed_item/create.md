---
title: Create FeedItem 
---

This section describes how to create a FeedItem.



```javascript

// Creating the entity

const feed_item = {
    // Your FeedItem here 
}

const results = await customer.feedItems.create(feed_item)

console.log(results) // ['customers/1234567890/feedItems/9765432177']

```