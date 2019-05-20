---
type: list_code
entity: CustomInterest
title: List CustomInterest
order: 3.1
---

```javascript
// Listing all the customInterests in the account
let result = await customer.customInterests.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.customInterests.list({
  constraints: [
    {
      key: 'custom_interest.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'custom_interest.some_field.sub_field',
})
```

```javascript
// Example result
;[
  /* Todo: add example list() return here */
]
```
