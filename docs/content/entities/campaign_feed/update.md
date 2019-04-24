---
title: Update CampaignFeed
order: 5
type: update
entity: CampaignFeed
---

This section describes how to update a CampaignFeed.

```javascript
// Updating the entity

const campaign_feed = {
    resource_name: 'customers/9262111890/campaignFeeds/1483704368~77425432', // The resource_name is required
    // ...any other fields that you would like to update
}

const results = await customer.campaignFeeds.update(campaign_feed)

console.log(results) // ['customers/9262111890/campaignFeeds/1483704368~77425432']
```
