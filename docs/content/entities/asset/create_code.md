---
title: Create Asset
order: 4.1
type: create_code
entity: Asset
---

```javascript
// Creating the entity

const asset = {
  // Your Asset here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.assets.create(asset)

// Passing in an array of entities to create, validating only
const result = await customer.assets.create([asset, other_asset], {
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
