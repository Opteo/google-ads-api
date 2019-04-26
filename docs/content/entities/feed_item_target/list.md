---
type: list
entity: FeedItemTarget
title: List FeedItemTarget
order: 3
---

### List all FeedItemTarget

This `customer.feedItemTargets.list()` method works just like `get`, except that it returns all of the entities in the account. It isn't rate limited, but it can be very slow, so use it sparingly.

```javascript
// Listing all the feedItemTargets in the account
let result = await customer.feedItemTargets.list()

// Listing with constraints and a limited number of results
let result = await customer.feedItemTargets.list({
  constraints: [
    {
      key: 'feed_item_target.some_field',
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
