---
title: Update MediaFile
order: 5
type: update
entity: MediaFile
---

This section describes how to update a MediaFile.

```javascript
// Updating the entity

const media_file = {
    resource_name: 'customers/3827277046/mediaFiles/2844631150', // The resource_name is required
    // ...any other fields that you would like to update
}

const results = await customer.mediaFiles.update(media_file)

console.log(results) // ['customers/3827277046/mediaFiles/2844631150']
```
