---
title: Get Video
order: 2
type: get
entity: Video
---

### Get a Video

The `customer.videos.get(resource_name)` method returns the Video identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that Video

#### Returns

Returns that Video as an object.

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
