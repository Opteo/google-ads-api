---
title: Get CustomerFeed
order: 2.1
type: get_code
entity: CustomerFeed
---

```javascript
// Getting the entity
let result = await customer.customerFeeds.get('customers/9262111890/customerFeeds/82896692')
```

```javascript
// Example result
;({
  feed: 'customers/9262111890/feeds/82896692',
  matching_function: {
    function_string: 'EQUALS(FEED_ITEM_ID,51840594005)',
    left_operands: [{ requestContextOperand: { contextType: 2 } }],
    operator: 4,
    right_operands: [{ constantOperand: { longValue: 51840594005 } }],
  },
  placeholder_types: [2],
  resource_name: 'customers/9262111890/customerFeeds/82896692',
  status: 2,
})
```
