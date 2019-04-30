---
title: Create FeedMapping
order: 4
type: create
entity: FeedMapping
---

### Create FeedMapping

This section describes how to create a FeedMapping.

```javascript
// Creating the entity

const feed_mapping = {
  // Your FeedMapping here, without immutable fields such as resource_name
}

const result = await customer.feedMappings.create(feed_mapping)
```

```javascript
// Example result
;['customers/9262111890/feedMappings/82896692~91300060']
```
