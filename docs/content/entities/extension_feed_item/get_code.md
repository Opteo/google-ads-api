---
title: Get ExtensionFeedItem
order: 2.1
type: get_code
entity: ExtensionFeedItem
---

```javascript
// Getting the entity
let result = await customer.extensionFeedItems.get('customers/3827277046/extensionFeedItems/13881705221')
```

```javascript
// Example result
;({
  resource_name: 'customers/3827277046/extensionFeedItems/13881705221',
  ad_schedules: [],
  extension_type: 11,
  status: 2,
  structured_snippet_feed_item: {
    header: 'Types',
    values: [
      { value: 'Ad Testing' },
      { value: 'Bid Optimization' },
      { value: 'Account Structuring' },
      { value: 'Search Query Analysis' },
      { value: 'LP Error Detection' },
      { value: 'Ad Extension Management' },
      { value: 'QS Optimization' },
      { value: 'Segment Analysis' },
      { value: 'Performance Monitoring' },
    ],
  },
})
```
