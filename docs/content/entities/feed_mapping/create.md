---
title: Create FeedMapping
order: 4
type: create
entity: FeedMapping
---

This section describes how to create a FeedMapping.

```javascript
// Creating the entity

const feed_mapping = {
    // Your FeedMapping here, without immutable fields such as resource_name
}

const results = await customer.feedMappings.create(feed_mapping)

console.log(results) // ['customers/9262111890/feedMappings/77425432~84739365']
```
