---
title: Update Asset
order: 5.1
type: update_code
entity: Asset
---

```javascript
// Updating the entity

const asset = {
  resource_name: 'customers/3827277046/assets/225386305', // The resource_name is required
  // ...any other fields that you would like to update
}

// Passing in a single entity to update
const result = await customer.assets.update(asset)

// Passing in an array of entities to update, validating only
const result = await customer.assets.update([asset, other_asset], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/3827277046/assets/225386305'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
