---
title: Get CustomerExtensionSetting
order: 2.1
type: get_code
entity: CustomerExtensionSetting
---

```javascript
// Getting the entity
let result = await customer.customerExtensionSettings.get(
  'customers/9262111890/customerExtensionSettings/STRUCTURED_SNIPPET'
)
```

```javascript
// Example result
;({
  device: 0,
  extension_feed_items: ['customers/9262111890/extensionFeedItems/51842375274'],
  extension_type: 11,
  resource_name: 'customers/9262111890/customerExtensionSettings/STRUCTURED_SNIPPET',
})
```
