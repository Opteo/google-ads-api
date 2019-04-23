---
title: Create AdGroupExtensionSetting
order: 4
type: create
entity: AdGroupExtensionSetting
---

This section describes how to create a AdGroupExtensionSetting.

```javascript
// Creating the entity

const ad_group_extension_setting = {
    // Your AdGroupExtensionSetting here, without immutable fields such as resource_name
}

const results = await customer.adGroupExtensionSettings.create(ad_group_extension_setting)

console.log(results) // ['customers/3827277046/adGroupExtensionSettings/36337683057~SITELINK']
```
