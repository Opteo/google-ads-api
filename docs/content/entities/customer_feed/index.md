---
order: 1
type: object
entity: CustomerFeed
title: CustomerFeed
---

## CustomerFeed

### The CustomerFeed object

```javascript
// Example CustomerFeed
const customer_feed = {
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
}
```
