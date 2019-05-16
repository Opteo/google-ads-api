---
type: list_code
entity: CarrierConstant
title: List CarrierConstant
order: 3.1
---

```javascript
// Listing all the carrierConstants in the account
let result = await customer.carrierConstants.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.carrierConstants.list({
  constraints: [
    {
      key: 'carrier_constant.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'carrier_constant.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    carrier_constant: {
      resource_name: 'carrierConstants/70720',
      country_code: 'TW',
      id: 70720,
      name: 'Long Distance & Mobile Business Group',
    },
  },
]
```
