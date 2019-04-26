---
title: Create CustomerFeed
order: 4
type: create
entity: CustomerFeed
---

### Create CustomerFeed

This section describes how to create a CustomerFeed.

```javascript
// Creating the entity

const customer_feed = {
  // Your CustomerFeed here, without immutable fields such as resource_name
}

const result = await customer.customerFeeds.create(customer_feed)
```

```javascript
// Example result
;['customers/9262111890/customerFeeds/77425432']
```
