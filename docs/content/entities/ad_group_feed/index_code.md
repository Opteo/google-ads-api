---
order: 1.1
type: object_code
entity: AdGroupFeed
title: AdGroupFeed
---

```javascript
// Example AdGroupFeed
const ad_group_feed = {
  ad_group: 'customers/3827277046/adGroups/45808681193',
  feed: 'customers/3827277046/feeds/90651045',
  matching_function: {
    function_string: 'IN(FEED_ITEM_ID,{70745235845,70745235842,70745235839,70745235836,70745235833})',
    left_operands: [{ requestContextOperand: { contextType: 2 } }],
    operator: 2,
    right_operands: [
      { constantOperand: { longValue: 70745235845 } },
      { constantOperand: { longValue: 70745235842 } },
      { constantOperand: { longValue: 70745235839 } },
      { constantOperand: { longValue: 70745235836 } },
      { constantOperand: { longValue: 70745235833 } },
    ],
  },
  placeholder_types: [1],
  resource_name: 'customers/3827277046/adGroupFeeds/45808681193~90651045',
  status: 2,
}
```
