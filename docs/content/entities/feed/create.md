---
title: Create Feed
order: 4
type: create
entity: Feed
---

### Create Feed

This section describes how to create a Feed.

```javascript
// Creating the entity

const feed = {
  // Your Feed here, without immutable fields such as resource_name
}

const result = await customer.feeds.create(feed)
```

```javascript
// Example result
;['customers/9262111890/feeds/82896692']
```
