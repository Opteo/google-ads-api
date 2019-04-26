---
order: 1
type: object
entity: CampaignFeed
title: CampaignFeed
---

## CampaignFeed

### The CampaignFeed object

This section describes the CampaignFeed entity.

```javascript
// Example CampaignFeed
const campaign_feed = {
  resource_name: 'customers/9262111890/campaignFeeds/1483704368~77425432',
  campaign: 'customers/9262111890/campaigns/1483704368',
  feed: 'customers/9262111890/feeds/77425432',
  matching_function: {
    function_string: 'IN(FEED_ITEM_ID,{51842673272,51842611747,51842613103,51844472313})',
    left_operands: [{ requestContextOperand: { contextType: 2 } }],
    operator: 2,
    right_operands: [
      { constantOperand: { longValue: { value: 51842673272 } } },
      { constantOperand: { longValue: { value: 51842611747 } } },
      { constantOperand: { longValue: { value: 51842613103 } } },
      { constantOperand: { longValue: { value: 51844472313 } } },
    ],
  },
  placeholder_types: [7],
  status: 2,
}
```
