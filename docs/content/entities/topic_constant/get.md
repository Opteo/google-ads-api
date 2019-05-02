---
title: Get TopicConstant
order: 2
type: get
entity: TopicConstant
---

### Get a TopicConstant

The `customer.topicConstants.get(resource_name)` method returns the TopicConstant identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that TopicConstant

#### Returns

Returns that TopicConstant as an object.

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
