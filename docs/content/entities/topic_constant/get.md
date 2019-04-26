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
let result = await customer.topicConstants.get('customers/1234567890/topicConstants/123123123')
```

```javascript
// Example result
;({ resource_name: '', id: 0, path: [{ value: '' }], topic_constant_parent: 'topicConstants/-1' })
```
