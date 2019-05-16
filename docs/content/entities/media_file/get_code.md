---
title: Get MediaFile
order: 2.1
type: get_code
entity: MediaFile
---

```javascript
// Getting the entity
let result = await customer.mediaFiles.get('customers/3827277046/mediaFiles/2844631150')
```

```javascript
// Example result
;({
  resource_name: 'customers/3827277046/mediaFiles/2844631150',
  file_size: 0,
  id: 2844631150,
  mime_type: 1,
  name: 'My media file',
  source_url: '',
  type: 1,
})
```
