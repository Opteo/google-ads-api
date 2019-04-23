---
title: Create Feed
order: 4
type: create
entity: Feed
---

This section describes how to create a Feed.

```javascript
// Creating the entity

const feed = {
    // Your Feed here, without immutable fields such as resource_name
}

const results = await customer.feeds.create(feed)

console.log(results) // ['customers/9262111890/feeds/77425432']
```
