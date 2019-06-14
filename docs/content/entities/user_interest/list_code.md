---
type: list_code
entity: UserInterest
title: List UserInterest
order: 3.1
---

```javascript
// Listing all the userInterests in the account
let result = await customer.userInterests.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.userInterests.list({
  constraints: [
    {
      key: 'user_interest.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'user_interest.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    user_interest: {
      availabilities: [],
      launched_to_all: true,
      name: 'My user interest',
      resource_name: 'customers/9262111890/userInterests/84',
      taxonomy_type: 5,
      user_interest_id: 84,
      user_interest_parent: 'customers/9262111890/userInterests/302',
    },
  },
]
```
