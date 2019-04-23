---
title: Update FeedMapping
order: 5
type: update
entity: FeedMapping
---

This section describes how to update a FeedMapping.

```javascript
// Updating the entity

const feed_mapping = {
    resource_name: 'customers/9262111890/feedMappings/77425432~84739365', // The resource_name is required
    // ...any other fields that you would like to update
}

const results = await customer.feedMappings.update(feed_mapping)

console.log(results) // ['customers/9262111890/feedMappings/77425432~84739365']
```
