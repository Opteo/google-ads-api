---
title: Update AdGroupExtensionSetting
order: 5
type: update
entity: AdGroupExtensionSetting
---

### Update AdGroupExtensionSetting

This section describes how to update a AdGroupExtensionSetting.

```javascript
// Updating the entity

const ad_group_extension_setting = {
  resource_name: 'customers/3827277046/adGroupExtensionSettings/36337683057~SITELINK', // The resource_name is required
  // ...any other fields that you would like to update
}

const result = await customer.adGroupExtensionSettings.update(ad_group_extension_setting)
```

```javascript
// Example result
;['customers/3827277046/adGroupExtensionSettings/36337683057~SITELINK']
```
