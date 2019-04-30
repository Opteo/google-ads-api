---
title: Get TopicConstant
order: 2
type: get
entity: TopicConstant
---

### Get TopicConstant

The `customer.topicConstants.get()` method returns all fields for one TopicConstant, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

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
