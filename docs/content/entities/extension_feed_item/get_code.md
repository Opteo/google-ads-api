---
title: Get ExtensionFeedItem
order: 2.1
type: get_code
entity: ExtensionFeedItem
---

```javascript
// Getting the entity
let result = await customer.extensionFeedItems.get('customers/3827277046/extensionFeedItems/9779152283')
```

```javascript
// Example result
;({
  resource_name: 'customers/3827277046/extensionFeedItems/9779152283',
  extension_type: 10,
  sitelink_feed_item: {
    final_mobile_urls: [],
    final_urls: [{ value: 'https://opteo.com/docs' }],
    line_1: 'Adwords Guides, Case Studies',
    line_2: 'Chrome Extensions and more!',
    link_text: 'AdWords Knowledge Base',
  },
  status: 2,
})
```
