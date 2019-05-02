---
title: Create CampaignFeed
order: 4.1
type: create_code
entity: CampaignFeed
---

```javascript
// Creating the entity

const campaign_feed = {
  // Your CampaignFeed here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.campaignFeeds.create(campaign_feed)

// Passing in an array of entities to create, validating only
const result = await customer.campaignFeeds.create([campaign_feed, other_campaign_feed], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/9262111890/campaignFeeds/1483704368~82896692'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
