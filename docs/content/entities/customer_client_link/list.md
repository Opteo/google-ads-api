---
type: list
entity: CustomerClientLink
title: List CustomerClientLink
order: 3
---

### List all CustomerClientLink

This `customer.customerClientLinks.list()` method works just like `get`, except that it returns all of the entities in the account. It isn't rate limited, but it can be very slow, so use it sparingly.

```javascript
// Listing all the customerClientLinks in the account
let result = await customer.customerClientLinks.list()

// Listing with constraints and a limited number of results
let result = await customer.customerClientLinks.list({
  constraints: [
    {
      key: 'customer_client_link.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
})
```

```javascript

// Example result
[// Todo: add example list() return here]

```
