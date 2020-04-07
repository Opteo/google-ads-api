---
title: Update FeedMapping
order: 5.1
type: update_code
entity: FeedMapping
---

```javascript
// Updating the entity

const feed_mapping = {
  resource_name: 'customers/9262111890/feedMappings/82896692~91300060', // The resource_name is required
  // ...any other fields that you would like to update
}

// Passing in a single entity to update
const result = await customer.feedMappings.update(feed_mapping)

// Passing in an array of entities to update, validating only
const result = await customer.feedMappings.update([feed_mapping, other_feed_mapping], {
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
