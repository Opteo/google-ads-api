---
title: Create AdGroupFeed
order: 4.1
type: create_code
entity: AdGroupFeed
---

```javascript
// Creating the entity

const ad_group_feed = {
  // Your AdGroupFeed here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.adGroupFeeds.create(ad_group_feed)

// Passing in an array of entities to create, validating only
const result = await customer.adGroupFeeds.create([ad_group_feed, other_ad_group_feed], {
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
