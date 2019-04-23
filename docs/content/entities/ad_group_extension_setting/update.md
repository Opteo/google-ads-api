---
title: Update AdGroupExtensionSetting
order: 5
type: update
entity: AdGroupExtensionSetting
---

This section describes how to update a AdGroupExtensionSetting.

```javascript
// Updating the entity

const ad_group_extension_setting = {
    resource_name: 'customers/3827277046/adGroupExtensionSettings/36337683057~SITELINK', // The resource_name is required
    // ...any other fields that you would like to update
}

const results = await customer.adGroupExtensionSettings.update(ad_group_extension_setting)

console.log(results) // ['customers/3827277046/adGroupExtensionSettings/36337683057~SITELINK']
```
