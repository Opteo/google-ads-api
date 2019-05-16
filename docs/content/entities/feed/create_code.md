---
title: Create Feed
order: 4.1
type: create_code
entity: Feed
---

```javascript
// Creating the entity

const feed = {
  // Your Feed here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.feeds.create(feed)

// Passing in an array of entities to create, validating only
const result = await customer.feeds.create([feed, other_feed], {
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
