---
title: Create FeedMapping
order: 4.1
type: create_code
entity: FeedMapping
---

```javascript
// Creating the entity

const feed_mapping = {
  // Your FeedMapping here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.feedMappings.create(feed_mapping)

// Passing in an array of entities to create, validating only
const result = await customer.feedMappings.create([feed_mapping, other_feed_mapping], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/9262111890/feedMappings/82896692~91300060'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
