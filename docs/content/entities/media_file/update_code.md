---
title: Update MediaFile
order: 5.1
type: update_code
entity: MediaFile
---

```javascript
// Updating the entity

const media_file = {
  resource_name: 'customers/3827277046/mediaFiles/2844631150', // The resource_name is required
  // ...any other fields that you would like to update
}

// Passing in a single entity to update
const result = await customer.mediaFiles.update(media_file)

// Passing in an array of entities to update, validating only
const result = await customer.mediaFiles.update([media_file, other_media_file], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/3827277046/mediaFiles/2844631150'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
