---
title: Update CustomerFeed
order: 5
type: update
entity: CustomerFeed
---

### Update CustomerFeed

This section describes how to update a CustomerFeed.

```javascript
// Updating the entity

const customer_feed = {
  resource_name: 'customers/9262111890/customerFeeds/77425432', // The resource_name is required
  // ...any other fields that you would like to update
}

const result = await customer.customerFeeds.update(customer_feed)
```

```javascript
// Example result
;['customers/9262111890/customerFeeds/77425432']
```
