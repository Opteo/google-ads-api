---
title: Update ExtensionFeedItem
order: 5.1
type: update_code
entity: ExtensionFeedItem
---

```javascript
// Updating the entity

const extension_feed_item = {
  resource_name: 'customers/3827277046/extensionFeedItems/9779152283', // The resource_name is required
  // ...any other fields that you would like to update
}

// Passing in a single entity to update
const result = await customer.extensionFeedItems.update(extension_feed_item)

// Passing in an array of entities to update, validating only
const result = await customer.extensionFeedItems.update([extension_feed_item, other_extension_feed_item], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/3827277046/extensionFeedItems/9779152283'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
