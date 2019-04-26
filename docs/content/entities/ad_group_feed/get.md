---
title: Get AdGroupFeed
order: 2
type: get
entity: AdGroupFeed
---

### Get AdGroupFeed

The `customer.adGroupFeeds.get()` method returns all fields for one AdGroupFeed, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript
// Getting the entity
let result = await customer.adGroupFeeds.get('customers/3827277046/adGroupFeeds/36337683057~43009393')
```

```javascript
// Example result
;({
  resource_name: 'customers/3827277046/adGroupFeeds/36337683057~43009393',
  ad_group: 'customers/3827277046/adGroups/36337683057',
  feed: 'customers/3827277046/feeds/43009393',
  matching_function: {
    function_string: 'IN(FEED_ITEM_ID,{9779152283,9780600045,9784362487,9784349521})',
    left_operands: [{ requestContextOperand: { contextType: 2 } }],
    operator: 2,
    right_operands: [
      { constantOperand: { longValue: { value: 9779152283 } } },
      { constantOperand: { longValue: { value: 9780600045 } } },
      { constantOperand: { longValue: { value: 9784362487 } } },
      { constantOperand: { longValue: { value: 9784349521 } } },
    ],
  },
  placeholder_types: [2],
  status: 2,
})
```
