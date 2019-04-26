---
type: list
entity: TopicConstant
title: List TopicConstant
order: 3
---

### List all TopicConstant

This `customer.topicConstants.list()` method works just like `get`, except that it returns all of the entities in the account. It isn't rate limited, but it can be very slow, so use it sparingly.

```javascript
// Listing all the topicConstants in the account
let result = await customer.topicConstants.list()

// Listing with constraints and a limited number of results
let result = await customer.topicConstants.list({
  constraints: [
    {
      key: 'topic_constant.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
})
```

```javascript
// Example result
;[{ topic_constant: { resource_name: '', id: 0, path: [{ value: '' }], topic_constant_parent: 'topicConstants/-1' } }]
```
