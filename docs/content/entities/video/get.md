---
title: Get Video
order: 2
type: get
entity: Video
---

The `customer.videos.get()` method returns all fields for one Video, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript
// Getting the entity
let result = await customer.videos.get('customers/3827277046/videos/Vl9qUzhuTExwWkk')

// Here's what the result might look like
result ===
    {
        resource_name: 'customers/3827277046/videos/Vl9qUzhuTExwWkk',
        channel_id: 'UCOSYb4yvogm0SAI8rX8kGWQ',
        duration_millis: 40356,
        id: 'V_jS8nLLpZI',
        title: 'Opteo',
    }
```
