---
title: Create FeedItem
order: 4
type: create
entity: FeedItem
---

### Create FeedItem

This section describes how to create a FeedItem.

```javascript
// Creating the entity

const feed_item = {
  // Your FeedItem here, without immutable fields such as resource_name
}

const result = await customer.feedItems.create(feed_item)
```

```javascript
// Example result
;['customers/3827277046/feedItems/43009393~9779152283']
```
