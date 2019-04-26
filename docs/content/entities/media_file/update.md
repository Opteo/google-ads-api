---
title: Update MediaFile
order: 5
type: update
entity: MediaFile
---

### Update MediaFile

This section describes how to update a MediaFile.

```javascript
// Updating the entity

const media_file = {
  resource_name: 'customers/3827277046/mediaFiles/2844631150', // The resource_name is required
  // ...any other fields that you would like to update
}

const result = await customer.mediaFiles.update(media_file)
```

```javascript
// Example result
;['customers/3827277046/mediaFiles/2844631150']
```
