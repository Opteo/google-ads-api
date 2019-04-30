---
type: list
entity: CarrierConstant
title: List CarrierConstant
order: 3
---

### List all CarrierConstant

This `customer.carrierConstants.list()` method works just like `get`, except that it returns all of the entities in the account. It isn't rate limited, but it can be very slow, so use it sparingly.

```javascript
// Listing all the carrierConstants in the account
let result = await customer.carrierConstants.list()

// Listing with constraints and a limited number of results
let result = await customer.carrierConstants.list({
  constraints: [
    {
      key: 'carrier_constant.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
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
