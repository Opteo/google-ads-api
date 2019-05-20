---
type: list_code
entity: FeedItemTarget
title: List FeedItemTarget
order: 3.1
---

```javascript
// Listing all the feedItemTargets in the account
let result = await customer.feedItemTargets.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.feedItemTargets.list({
  constraints: [
    {
      key: 'feed_item_target.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'feed_item_target.some_field.sub_field',
})
```

```javascript
// Example result
;[
  /* Todo: add example list() return here */
]
```
