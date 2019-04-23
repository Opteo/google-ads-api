---
title: Create CustomerExtensionSetting 
---

This section describes how to create a CustomerExtensionSetting.



```javascript

// Creating the entity

const customer_extension_setting = {
    // Your CustomerExtensionSetting here 
}

const results = await customer.customerExtensionSettings.create(customer_extension_setting)

console.log(results) // ['customers/1234567890/customerExtensionSettings/9765432177']

```