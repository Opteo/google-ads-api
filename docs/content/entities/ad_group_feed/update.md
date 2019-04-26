---
title: Update AdGroupFeed
order: 5
type: update
entity: AdGroupFeed
---

### Update AdGroupFeed

This section describes how to update a AdGroupFeed.

```javascript
// Updating the entity

const ad_group_feed = {
  resource_name: 'customers/3827277046/adGroupFeeds/36337683057~43009393', // The resource_name is required
  // ...any other fields that you would like to update
}

const result = await customer.adGroupFeeds.update(ad_group_feed)
```

```javascript
// Example result
;['customers/3827277046/adGroupFeeds/36337683057~43009393']
```
