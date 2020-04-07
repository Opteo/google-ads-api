---
title: Update FeedItemTarget
order: 5.1
type: update_code
entity: FeedItemTarget
---

```javascript
// Updating the entity

const feed_item_target = {
  resource_name: 'customers/1234567890/feedItemTargets/123123123', // The resource_name is required
  // ...any other fields that you would like to update
}

// Passing in a single entity to update
const result = await customer.feedItemTargets.update(feed_item_target)

// Passing in an array of entities to update, validating only
const result = await customer.feedItemTargets.update([feed_item_target, other_feed_item_target], {
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
