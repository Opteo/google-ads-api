---
title: Get TopicConstant
order: 2.1
type: get_code
entity: TopicConstant
---

```javascript
// Getting the entity
let result = await customer.topicConstants.get('topicConstants/1786')
```

```javascript
// Example result
;({
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
})
```
