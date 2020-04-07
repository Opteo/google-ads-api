---
type: list_code
entity: CustomerClientLink
title: List CustomerClientLink
order: 3.1
---

```javascript
// Listing all the customerClientLinks in the account
let result = await customer.customerClientLinks.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.customerClientLinks.list({
  constraints: [
    {
      key: 'customer_client_link.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'customer_client_link.some_field.sub_field',
})
```

```javascript
// Example result
;[
  /* Todo: add example list() return here */
]
```
