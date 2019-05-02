---
type: list_code
entity: RemarketingAction
title: List RemarketingAction
order: 3.1
---

```javascript
// Listing all the remarketingActions in the account
let result = await customer.remarketingActions.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.remarketingActions.list({
  constraints: [
    {
      key: 'remarketing_action.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'remarketing_action.some_field.sub_field',
})
```

```javascript

// Example result
[// Todo: add example list() return here]

```
