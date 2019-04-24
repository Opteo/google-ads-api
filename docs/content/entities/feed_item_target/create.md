---
title: Create FeedItemTarget
order: 4
type: create
entity: FeedItemTarget
---

This section describes how to create a FeedItemTarget.

```javascript
// Creating the entity

const feed_item_target = {
    // Your FeedItemTarget here, without immutable fields such as resource_name
}

const results = await customer.feedItemTargets.create(feed_item_target)

console.log(results) // ['customers/1234567890/feedItemTargets/123123123']
```
