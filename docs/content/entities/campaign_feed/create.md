---
title: Create CampaignFeed
order: 4
type: create
entity: CampaignFeed
---

### Create CampaignFeed

This section describes how to create a CampaignFeed.

```javascript
// Creating the entity

const campaign_feed = {
  // Your CampaignFeed here, without immutable fields such as resource_name
}

const result = await customer.campaignFeeds.create(campaign_feed)
```

```javascript
// Example result
;['customers/9262111890/campaignFeeds/1483704368~82896692']
```
