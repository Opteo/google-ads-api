---
title: Get Video
order: 2.1
type: get_code
entity: Video
---

```javascript
// Getting the entity
let result = await customer.videos.get('customers/3827277046/videos/Vl9qUzhuTExwWkk')
```

```javascript
// Example result
;({
  resource_name: 'customers/3827277046/videos/Vl9qUzhuTExwWkk',
  channel_id: 'UCOSYb4yvogm0SAI8rX8kGWQ',
  duration_millis: 40356,
  id: 'V_jS8nLLpZI',
  title: 'Opteo',
})
```
