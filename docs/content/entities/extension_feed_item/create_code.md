---
title: Create ExtensionFeedItem
order: 4.1
type: create_code
entity: ExtensionFeedItem
---

```javascript
// Creating the entity

const extension_feed_item = {
  // Your ExtensionFeedItem here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.extensionFeedItems.create(extension_feed_item)

// Passing in an array of entities to create, validating only
const result = await customer.extensionFeedItems.create([extension_feed_item, other_extension_feed_item], {
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
