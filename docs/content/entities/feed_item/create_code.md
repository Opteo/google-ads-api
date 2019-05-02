---
title: Create FeedItem
order: 4.1
type: create_code
entity: FeedItem
---

```javascript
// Creating the entity

const feed_item = {
  // Your FeedItem here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.feedItems.create(feed_item)

// Passing in an array of entities to create, validating only
const result = await customer.feedItems.create([feed_item, other_feed_item], {
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
