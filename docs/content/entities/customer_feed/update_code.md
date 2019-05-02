---
title: Update CustomerFeed
order: 5.1
type: update_code
entity: CustomerFeed
---

```javascript
// Updating the entity

const customer_feed = {
  resource_name: 'customers/9262111890/customerFeeds/82896692', // The resource_name is required
  // ...any other fields that you would like to update
}

// Passing in a single entity to update
const result = await customer.customerFeeds.update(customer_feed)

// Passing in an array of entities to update, validating only
const result = await customer.customerFeeds.update([customer_feed, other_customer_feed], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/9262111890/customerFeeds/82896692'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
