---
order: 1
type: object
entity: CustomerFeed
title: CustomerFeed
---

## CustomerFeed

### The CustomerFeed object

This section describes the CustomerFeed entity.

```javascript
// Example CustomerFeed
const customer_feed = {
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
}
```
