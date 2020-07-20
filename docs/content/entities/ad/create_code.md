---
title: Create Ad
order: 4.1
type: create_code
entity: Ad
---

```javascript
// Creating the entity

const ad = {
  // Your Ad here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.ads.create(ad)

// Passing in an array of entities to create, validating only
const result = await customer.ads.create([ad, other_ad], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/1234567890/ads/123123123'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
