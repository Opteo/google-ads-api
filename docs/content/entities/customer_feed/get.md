---
title: Get CustomerFeed
order: 2
type: get
entity: CustomerFeed
---

### Get CustomerFeed

The `customer.customerFeeds.get()` method returns all fields for one CustomerFeed, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript
// Getting the entity
let result = await customer.customerFeeds.get('customers/9262111890/customerFeeds/77425432')
```

```javascript
// Example result
;({
  resource_name: 'customers/9262111890/customerFeeds/77425432',
  feed: 'customers/9262111890/feeds/77425432',
  matching_function: {
    function_string: 'EQUALS(FEED_ITEM_ID,51842329086)',
    left_operands: [{ requestContextOperand: { contextType: 2 } }],
    operator: 4,
    right_operands: [{ constantOperand: { longValue: { value: 51842329086 } } }],
  },
  placeholder_types: [7],
  status: 2,
})
```
