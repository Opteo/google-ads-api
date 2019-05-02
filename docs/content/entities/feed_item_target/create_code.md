---
title: Create FeedItemTarget
order: 4.1
type: create_code
entity: FeedItemTarget
---

```javascript
// Creating the entity

const feed_item_target = {
  // Your FeedItemTarget here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.feedItemTargets.create(feed_item_target)

// Passing in an array of entities to create, validating only
const result = await customer.feedItemTargets.create([feed_item_target, other_feed_item_target], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/1234567890/feedItemTargets/123123123'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
