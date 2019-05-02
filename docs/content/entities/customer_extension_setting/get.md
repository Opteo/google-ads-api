---
title: Get CustomerExtensionSetting
order: 2
type: get
entity: CustomerExtensionSetting
---

### Get a CustomerExtensionSetting

The `customer.customerExtensionSettings.get(resource_name)` method returns the CustomerExtensionSetting identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that CustomerExtensionSetting

#### Returns

Returns that CustomerExtensionSetting as an object.

```javascript
// Getting the entity
let result = await customer.customerExtensionSettings.get(
  'customers/9262111890/customerExtensionSettings/STRUCTURED_SNIPPET'
)
```

```javascript
// Example result
;({
  resource_name: 'customers/9262111890/customerExtensionSettings/STRUCTURED_SNIPPET',
  extension_feed_items: [{ value: 'customers/9262111890/extensionFeedItems/51842375274' }],
  extension_type: 11,
})
```
