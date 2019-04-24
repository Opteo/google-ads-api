---
title: Create AdGroupFeed
order: 4
type: create
entity: AdGroupFeed
---

This section describes how to create a AdGroupFeed.

```javascript
// Creating the entity

const ad_group_feed = {
    // Your AdGroupFeed here, without immutable fields such as resource_name
}

const results = await customer.adGroupFeeds.create(ad_group_feed)

console.log(results) // ['customers/3827277046/adGroupFeeds/36337683057~43009393']
```
