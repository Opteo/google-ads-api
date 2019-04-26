---
type: list
entity: CustomInterest
title: List CustomInterest
order: 3
---

### List all CustomInterest

This `customer.customInterests.list()` method works just like `get`, except that it returns all of the entities in the account. It isn't rate limited, but it can be very slow, so use it sparingly.

```javascript
// Listing all the customInterests in the account
let result = await customer.customInterests.list()

// Listing with constraints and a limited number of results
let result = await customer.customInterests.list({
  constraints: [
    {
      key: 'custom_interest.some_field',
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
