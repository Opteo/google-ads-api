---
title: Create ExtensionFeedItem 
---

This section describes how to create a ExtensionFeedItem.



```javascript

// Creating the entity

const extension_feed_item = {
    // Your ExtensionFeedItem here 
}

const results = await customer.extensionFeedItems.create(extension_feed_item)

console.log(results) // ['customers/1234567890/extensionFeedItems/9765432177']

```