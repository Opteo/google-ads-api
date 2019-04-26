---
title: Create FeedItemTarget
order: 4
type: create
entity: FeedItemTarget
---

### Create FeedItemTarget

This section describes how to create a FeedItemTarget.

```javascript
// Creating the entity

const feed_item_target = {
  // Your FeedItemTarget here, without immutable fields such as resource_name
}

const result = await customer.feedItemTargets.create(feed_item_target)
```

```javascript
// Example result
;['customers/1234567890/feedItemTargets/123123123']
```
