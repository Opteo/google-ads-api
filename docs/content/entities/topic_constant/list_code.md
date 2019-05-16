---
type: list_code
entity: TopicConstant
title: List TopicConstant
order: 3.1
---

```javascript
// Listing all the topicConstants in the account
let result = await customer.topicConstants.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.topicConstants.list({
  constraints: [
    {
      key: 'topic_constant.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'topic_constant.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    topic_constant: {
      resource_name: 'topicConstants/1786',
      id: 1786,
      path: [
        { value: '' },
        { value: 'Computers & Electronics' },
        { value: 'Consumer Electronics' },
        { value: 'Camera & Photo Equipment' },
        { value: 'Cameras & Camcorders' },
        { value: 'Camcorders' },
        { value: 'Body Mounted & Action Cameras' },
      ],
      topic_constant_parent: 'topicConstants/308',
    },
  },
]
```
