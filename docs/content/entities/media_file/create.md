---
title: Create MediaFile
order: 4
type: create
entity: MediaFile
---

This section describes how to create a MediaFile.

```javascript
// Creating the entity

const media_file = {
    // Your MediaFile here, without immutable fields such as resource_name
}

const results = await customer.mediaFiles.create(media_file)

console.log(results) // ['customers/3827277046/mediaFiles/2844631150']
```
