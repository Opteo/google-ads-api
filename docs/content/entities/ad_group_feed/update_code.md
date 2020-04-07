---
title: Update AdGroupFeed
order: 5.1
type: update_code
entity: AdGroupFeed
---

```javascript
// Updating the entity

const ad_group_feed = {
  resource_name: 'customers/3827277046/adGroupFeeds/69639056828~43009393', // The resource_name is required
  // ...any other fields that you would like to update
}

// Passing in a single entity to update
const result = await customer.adGroupFeeds.update(ad_group_feed)

// Passing in an array of entities to update, validating only
const result = await customer.adGroupFeeds.update([ad_group_feed, other_ad_group_feed], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/3827277046/adGroupFeeds/69639056828~43009393'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
