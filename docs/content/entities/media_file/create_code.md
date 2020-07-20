---
title: Create MediaFile
order: 4.1
type: create_code
entity: MediaFile
---

```javascript
// Creating the entity

const media_file = {
  // Your MediaFile here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.mediaFiles.create(media_file)

// Passing in an array of entities to create, validating only
const result = await customer.mediaFiles.create([media_file, other_media_file], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/3827277046/mediaFiles/44067075104'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
