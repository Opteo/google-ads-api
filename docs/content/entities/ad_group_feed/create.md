---
title: Create AdGroupFeed 
---

This section describes how to create a AdGroupFeed.



```javascript

// Creating the entity

const ad_group_feed = {
    // Your AdGroupFeed here 
}

const results = await customer.adGroupFeeds.create(ad_group_feed)

console.log(results) // ['customers/1234567890/adGroupFeeds/9765432177']

```