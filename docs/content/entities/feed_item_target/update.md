---
title: Update FeedItemTarget
order: 5
type: update
entity: FeedItemTarget
---

This section describes how to update a FeedItemTarget.

```javascript
// Updating the entity

const feed_item_target = {
    resource_name: 'customers/1234567890/feedItemTargets/123123123', // The resource_name is required
    // ...any other fields that you would like to update
}

const results = await customer.feedItemTargets.update(feed_item_target)

console.log(results) // ['customers/1234567890/feedItemTargets/123123123']
```
