---
title: Update ExtensionFeedItem
order: 5
type: update
entity: ExtensionFeedItem
---

### Update ExtensionFeedItem

This section describes how to update a ExtensionFeedItem.

```javascript
// Updating the entity

const extension_feed_item = {
  resource_name: 'customers/3827277046/extensionFeedItems/9779152283', // The resource_name is required
  // ...any other fields that you would like to update
}

const result = await customer.extensionFeedItems.update(extension_feed_item)
```

```javascript
// Example result
;['customers/3827277046/extensionFeedItems/9779152283']
```
