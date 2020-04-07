---
title: Update Ad
order: 5.1
type: update_code
entity: Ad
manual_mode: true
---

```javascript
// Updating the entity

const ad = {
    resource_name: 'customers/1234567890/ads/123123123', // The resource_name is required
    final_urls : ['https://updated-url.com']
    expanded_text_ad: {
        headline_part1: 'updated headline here',
    },
}

// Passing in a single entity to update
const result = await customer.ads.update(ad)

// Passing in an array of entities to update, validating only
const result = await customer.ads.update([ad, other_ad], {
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
