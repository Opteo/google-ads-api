---
title: Create CampaignFeed 
---

This section describes how to create a CampaignFeed.



```javascript

// Creating the entity

const campaign_feed = {
    // Your CampaignFeed here 
}

const results = await customer.campaignFeeds.create(campaign_feed)

console.log(results) // ['customers/1234567890/campaignFeeds/9765432177']

```