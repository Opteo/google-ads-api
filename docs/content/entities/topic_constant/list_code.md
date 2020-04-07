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
      id: 115,
      path: [
        '',
        'People & Society',
        'Family & Relationships',
        'Family',
        'Parenting',
        'Babies & Toddlers',
        'Baby Care & Hygiene',
      ],
      resource_name: 'topicConstants/115',
      topic_constant_parent: 'topicConstants/1374',
    },
  },
]
```
