---
title: Create AdGroupFeed
order: 4
type: create
entity: AdGroupFeed
---

### Create AdGroupFeed

This section describes how to create a AdGroupFeed.

```javascript
// Creating the entity

const ad_group_feed = {
  // Your AdGroupFeed here, without immutable fields such as resource_name
}

const result = await customer.adGroupFeeds.create(ad_group_feed)
```

```javascript
// Example result
;['customers/3827277046/adGroupFeeds/36337683057~43009393']
```
