---
title: Get CampaignFeed
order: 2.1
type: get_code
entity: CampaignFeed
---

```javascript
// Getting the entity
let result = await customer.campaignFeeds.get('customers/9262111890/campaignFeeds/1483704368~82896692')
```

```javascript
// Example result
;({
  campaign: 'customers/9262111890/campaigns/1483704368',
  feed: 'customers/9262111890/feeds/82896692',
  matching_function: {
    function_string: 'IN(FEED_ITEM_ID,{51842193961,51842200495,51844020102,51844028388})',
    left_operands: [{ requestContextOperand: { contextType: 2 } }],
    operator: 2,
    right_operands: [
      { constantOperand: { longValue: 51842193961 } },
      { constantOperand: { longValue: 51842200495 } },
      { constantOperand: { longValue: 51844020102 } },
      { constantOperand: { longValue: 51844028388 } },
    ],
  },
  placeholder_types: [2],
  resource_name: 'customers/9262111890/campaignFeeds/1483704368~82896692',
  status: 2,
})
```
