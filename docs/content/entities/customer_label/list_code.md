---
type: list_code
entity: CustomerLabel
title: List CustomerLabel
order: 3.1
---

```javascript
// Listing all the customerLabels in the account
let result = await customer.customerLabels.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.customerLabels.list({
  constraints: [
    {
      key: 'customer_label.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'customer_label.some_field.sub_field',
})
```

```javascript
// Example result
;[
  /* Todo: add example list() return here */
]
```
