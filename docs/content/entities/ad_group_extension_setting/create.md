---
title: Create AdGroupExtensionSetting 
---

This section describes how to create a AdGroupExtensionSetting.



```javascript

// Creating the entity

const ad_group_extension_setting = {
    // Your AdGroupExtensionSetting here 
}

const results = await customer.adGroupExtensionSettings.create(ad_group_extension_setting)

console.log(results) // ['customers/1234567890/adGroupExtensionSettings/9765432177']

```