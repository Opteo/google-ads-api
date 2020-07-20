---
order: 1.1
type: object_code
entity: AdGroupFeed
title: AdGroupFeed
---

```javascript
// Example AdGroupFeed
const ad_group_feed = {
  ad_group: 'customers/3827277046/adGroups/69639056828',
  feed: 'customers/3827277046/feeds/43009393',
  matching_function: {
    function_string: 'IN(FEED_ITEM_ID,{48200575108,48199744867,48200356726,48199839565,48200618792})',
    left_operands: [{ request_context_operand: { context_type: 2 } }],
    operator: 2,
    right_operands: [
      { constant_operand: { long_value: 48200575108 } },
      { constant_operand: { long_value: 48199744867 } },
      { constant_operand: { long_value: 48200356726 } },
      { constant_operand: { long_value: 48199839565 } },
      { constant_operand: { long_value: 48200618792 } },
    ],
  },
  placeholder_types: [],
  resource_name: 'customers/3827277046/adGroupFeeds/69639056828~43009393',
  status: 2,
}
```
