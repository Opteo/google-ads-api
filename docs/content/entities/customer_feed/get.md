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
let result = await customer.customerFeeds.get('customers/9262111890/customerFeeds/82896692')
```

```javascript
// Example result
;({
  resource_name: 'customers/9262111890/customerFeeds/82896692',
  feed: 'customers/9262111890/feeds/82896692',
  matching_function: {
    function_string: 'EQUALS(FEED_ITEM_ID,51840594005)',
    left_operands: [{ requestContextOperand: { contextType: 2 } }],
    operator: 4,
    right_operands: [{ constantOperand: { longValue: { value: 51840594005 } } }],
  },
  placeholder_types: [2],
  status: 2,
})
```
