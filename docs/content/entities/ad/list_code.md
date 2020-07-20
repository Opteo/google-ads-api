---
type: list_code
entity: Ad
title: List Ad
order: 3.1
---

```javascript
// Listing all the ads in the account
let result = await customer.ads.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.ads.list({
  constraints: [
    {
      key: 'ad.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'ad.some_field.sub_field',
})
```

```javascript
// Example result
;[
  /* Todo: add example list() return here */
]
```
