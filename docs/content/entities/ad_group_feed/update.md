---
title: Update AdGroupFeed
order: 5
type: update
entity: AdGroupFeed
---

This section describes how to update a AdGroupFeed.

```javascript
// Updating the entity

const ad_group_feed = {
    resource_name: 'customers/3827277046/adGroupFeeds/36337683057~43009393', // The resource_name is required
    // ...any other fields that you would like to update
}

const results = await customer.adGroupFeeds.update(ad_group_feed)

console.log(results) // ['customers/3827277046/adGroupFeeds/36337683057~43009393']
```
