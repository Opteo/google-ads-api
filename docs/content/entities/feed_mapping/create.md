---
title: Create FeedMapping 
---

This section describes how to create a FeedMapping.



```javascript

// Creating the entity

const feed_mapping = {
    // Your FeedMapping here 
}

const results = await customer.feedMappings.create(feed_mapping)

console.log(results) // ['customers/1234567890/feedMappings/9765432177']

```