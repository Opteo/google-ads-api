---
title: Update FeedItem
order: 5
type: update
entity: FeedItem
---

This section describes how to update a FeedItem.

```javascript
// Updating the entity

const feed_item = {
    resource_name: 'customers/3827277046/feedItems/43009393~9779152283', // The resource_name is required
    // ...any other fields that you would like to update
}

const results = await customer.feedItems.update(feed_item)

console.log(results) // ['customers/3827277046/feedItems/43009393~9779152283']
```
