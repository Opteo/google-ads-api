---
title: Get MediaFile
order: 2.1
type: get_code
entity: MediaFile
---

```javascript
// Getting the entity
let result = await customer.mediaFiles.get('customers/3827277046/mediaFiles/4565915444')
```

```javascript
// Example result
;({
  resource_name: 'customers/3827277046/mediaFiles/4565915444',
  file_size: 0,
  id: 4565915444,
  mime_type: 1,
  name: 'My media file',
  source_url: '',
  type: 6,
  video: { ad_duration_millis: 40356, youtube_video_id: 'V_jS8nLLpZI' },
})
```
