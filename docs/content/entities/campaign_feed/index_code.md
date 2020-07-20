---
order: 1.1
type: object_code
entity: CampaignFeed
title: CampaignFeed
---

```javascript
// Example CampaignFeed
const campaign_feed = {
  campaign: 'customers/9262111890/campaigns/1483704368',
  feed: 'customers/9262111890/feeds/82896692',
  matching_function: {
    function_string: 'IN(FEED_ITEM_ID,{51842193961,51842200495,51844020102,51844028388})',
    left_operands: [{ request_context_operand: { context_type: 2 } }],
    operator: 2,
    right_operands: [
      { constant_operand: { long_value: 51842193961 } },
      { constant_operand: { long_value: 51842200495 } },
      { constant_operand: { long_value: 51844020102 } },
      { constant_operand: { long_value: 51844028388 } },
    ],
  },
  placeholder_types: [],
  resource_name: 'customers/9262111890/campaignFeeds/1483704368~82896692',
  status: 2,
}
```
