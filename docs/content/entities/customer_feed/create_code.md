---
title: Create CustomerFeed
order: 4.1
type: create_code
entity: CustomerFeed
---

```javascript
// Creating the entity

const customer_feed = {
  // Your CustomerFeed here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.customerFeeds.create(customer_feed)

// Passing in an array of entities to create, validating only
const result = await customer.customerFeeds.create([customer_feed, other_customer_feed], {
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
