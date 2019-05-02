---
title: Get ExtensionFeedItem
order: 2
type: get
entity: ExtensionFeedItem
---

### Get a ExtensionFeedItem

The `customer.extensionFeedItems.get(resource_name)` method returns the ExtensionFeedItem identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that ExtensionFeedItem

#### Returns

Returns that ExtensionFeedItem as an object.

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
