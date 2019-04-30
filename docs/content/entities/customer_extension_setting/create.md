---
title: Create CustomerExtensionSetting
order: 4
type: create
entity: CustomerExtensionSetting
---

### Create CustomerExtensionSetting

This section describes how to create a CustomerExtensionSetting.

```javascript
// Creating the entity

const customer_extension_setting = {
  // Your CustomerExtensionSetting here, without immutable fields such as resource_name
}

const result = await customer.customerExtensionSettings.create(customer_extension_setting)
```

```javascript
// Example result
;['customers/9262111890/customerExtensionSettings/STRUCTURED_SNIPPET']
```
