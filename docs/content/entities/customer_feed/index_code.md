---
order: 1.1
type: object_code
entity: CustomerFeed
title: CustomerFeed
---

```javascript
// Example CustomerFeed
const customer_feed = {
  feed: 'customers/9262111890/feeds/82896692',
  matching_function: {
    function_string: 'EQUALS(FEED_ITEM_ID,51840594005)',
    left_operands: [{ request_context_operand: { context_type: 2 } }],
    operator: 4,
    right_operands: [{ constant_operand: { long_value: 51840594005 } }],
  },
  placeholder_types: [2],
  resource_name: 'customers/9262111890/customerFeeds/82896692',
  status: 2,
}
```
