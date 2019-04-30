---
title: Get CampaignFeed
order: 2
type: get
entity: CampaignFeed
---

### Get CampaignFeed

The `customer.campaignFeeds.get()` method returns all fields for one CampaignFeed, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript
// Getting the entity
let result = await customer.campaignFeeds.get('customers/9262111890/campaignFeeds/1483704368~82896692')
```

```javascript
// Example result
;({
  resource_name: 'customers/9262111890/campaignFeeds/1483704368~82896692',
  campaign: 'customers/9262111890/campaigns/1483704368',
  feed: 'customers/9262111890/feeds/82896692',
  matching_function: {
    function_string: 'IN(FEED_ITEM_ID,{51842193961,51842200495,51844020102,51844028388})',
    left_operands: [{ requestContextOperand: { contextType: 2 } }],
    operator: 2,
    right_operands: [
      { constantOperand: { longValue: { value: 51842193961 } } },
      { constantOperand: { longValue: { value: 51842200495 } } },
      { constantOperand: { longValue: { value: 51844020102 } } },
      { constantOperand: { longValue: { value: 51844028388 } } },
    ],
  },
  placeholder_types: [2],
  status: 2,
})
```
