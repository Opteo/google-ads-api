---
title: Get TopicConstant
order: 2.1
type: get_code
entity: TopicConstant
---

```javascript
// Getting the entity
let result = await customer.topicConstants.get('topicConstants/115')
```

```javascript
// Example result
;({
  id: 115,
  path: [
    { value: '' },
    { value: 'People & Society' },
    { value: 'Family & Relationships' },
    { value: 'Family' },
    { value: 'Parenting' },
    { value: 'Babies & Toddlers' },
    { value: 'Baby Care & Hygiene' },
  ],
  resource_name: 'topicConstants/115',
  topic_constant_parent: 'topicConstants/1374',
})
```
