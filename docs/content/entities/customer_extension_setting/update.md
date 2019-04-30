---
title: Update CustomerExtensionSetting
order: 5
type: update
entity: CustomerExtensionSetting
---

### Update CustomerExtensionSetting

This section describes how to update a CustomerExtensionSetting.

```javascript
// Updating the entity

const customer_extension_setting = {
  resource_name: 'customers/9262111890/customerExtensionSettings/STRUCTURED_SNIPPET', // The resource_name is required
  // ...any other fields that you would like to update
}

const result = await customer.customerExtensionSettings.update(customer_extension_setting)
```

```javascript
// Example result
;['customers/9262111890/customerExtensionSettings/STRUCTURED_SNIPPET']
```
