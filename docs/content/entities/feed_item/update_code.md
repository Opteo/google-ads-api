---
title: Update FeedItem
order: 5.1
type: update_code
entity: FeedItem
---

```javascript
// Updating the entity

const feed_item = {
  resource_name: 'customers/3827277046/feedItems/43009393~9779152283', // The resource_name is required
  // ...any other fields that you would like to update
}

// Passing in a single entity to update
const result = await customer.feedItems.update(feed_item)

// Passing in an array of entities to update, validating only
const result = await customer.feedItems.update([feed_item, other_feed_item], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/3827277046/feedItems/43009393~9779152283'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
