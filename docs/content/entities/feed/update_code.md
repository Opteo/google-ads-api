---
title: Update Feed
order: 5.1
type: update_code
entity: Feed
---

```javascript
// Updating the entity

const feed = {
  resource_name: 'customers/9262111890/feeds/82896692', // The resource_name is required
  // ...any other fields that you would like to update
}

// Passing in a single entity to update
const result = await customer.feeds.update(feed)

// Passing in an array of entities to update, validating only
const result = await customer.feeds.update([feed, other_feed], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/9262111890/feeds/82896692'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
