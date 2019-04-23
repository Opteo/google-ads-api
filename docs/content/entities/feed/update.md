---
title: Update Feed
order: 5
type: update
entity: Feed
---

This section describes how to update a Feed.

```javascript
// Updating the entity

const feed = {
    resource_name: 'customers/9262111890/feeds/77425432', // The resource_name is required
    // ...any other fields that you would like to update
}

const results = await customer.feeds.update(feed)

console.log(results) // ['customers/9262111890/feeds/77425432']
```
