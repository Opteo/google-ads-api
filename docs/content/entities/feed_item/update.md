---
title: Update FeedItem
order: 5
type: update
entity: FeedItem
---

### Update FeedItem

This section describes how to update a FeedItem.

```javascript
// Updating the entity

const feed_item = {
  resource_name: 'customers/3827277046/feedItems/43009393~9779152283', // The resource_name is required
  // ...any other fields that you would like to update
}

const result = await customer.feedItems.update(feed_item)
```

```javascript
// Example result
;['customers/3827277046/feedItems/43009393~9779152283']
```
