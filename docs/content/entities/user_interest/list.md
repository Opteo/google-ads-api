---
type: list
entity: UserInterest
title: List UserInterest
order: 3
---

### List all UserInterest

This `customer.userInterests.list()` method works just like `get`, except that it returns all of the entities in the account. It isn't rate limited, but it can be very slow, so use it sparingly.

```javascript
// Listing all the userInterests in the account
let result = await customer.userInterests.list()

// Listing with constraints and a limited number of results
let result = await customer.userInterests.list({
  constraints: [
    {
      key: 'user_interest.some_field',
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
    user_interest: {
      resource_name: 'customers/9262111890/userInterests/3',
      availabilities: [],
      launched_to_all: true,
      name: 'My user interest',
      taxonomy_type: 5,
      user_interest_id: 3,
    },
  },
]
```
