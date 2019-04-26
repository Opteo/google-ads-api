---
title: Create ExtensionFeedItem
order: 4
type: create
entity: ExtensionFeedItem
---

### Create ExtensionFeedItem

This section describes how to create a ExtensionFeedItem.

```javascript
// Creating the entity

const extension_feed_item = {
  // Your ExtensionFeedItem here, without immutable fields such as resource_name
}

const result = await customer.extensionFeedItems.create(extension_feed_item)
```

```javascript
// Example result
;['customers/3827277046/extensionFeedItems/9779152283']
```
