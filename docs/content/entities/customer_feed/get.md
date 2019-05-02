---
title: Get CustomerFeed
order: 2
type: get
entity: CustomerFeed
---

### Get a CustomerFeed

The `customer.customerFeeds.get(resource_name)` method returns the CustomerFeed identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that CustomerFeed

#### Returns

Returns that CustomerFeed as an object.

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
