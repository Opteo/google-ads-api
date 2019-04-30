---
title: Get CustomerExtensionSetting
order: 2
type: get
entity: CustomerExtensionSetting
---

### Get CustomerExtensionSetting

The `customer.customerExtensionSettings.get()` method returns all fields for one CustomerExtensionSetting, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

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
