---
title: Get MediaFile
order: 2
type: get
entity: MediaFile
---

### Get MediaFile

The `customer.mediaFiles.get()` method returns all fields for one MediaFile, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

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
