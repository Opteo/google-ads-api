---
title: Create MediaFile 
---

This section describes how to create a MediaFile.



```javascript

// Creating the entity

const media_file = {
    // Your MediaFile here 
}

const results = await customer.mediaFiles.create(media_file)

console.log(results) // ['customers/1234567890/mediaFiles/9765432177']

```