---
title: Get AdGroupExtensionSetting
order: 2.1
type: get_code
entity: AdGroupExtensionSetting
---

```javascript
// Getting the entity
let result = await customer.adGroupExtensionSettings.get(
  'customers/3827277046/adGroupExtensionSettings/69639056828~SITELINK'
)
```

```javascript
// Example result
;({
  ad_group: 'customers/3827277046/adGroups/69639056828',
  extension_feed_items: [
    { value: 'customers/3827277046/extensionFeedItems/48199744867' },
    { value: 'customers/3827277046/extensionFeedItems/48199839565' },
    { value: 'customers/3827277046/extensionFeedItems/48200356726' },
    { value: 'customers/3827277046/extensionFeedItems/48200575108' },
    { value: 'customers/3827277046/extensionFeedItems/48200618792' },
  ],
  extension_type: 10,
  resource_name: 'customers/3827277046/adGroupExtensionSettings/69639056828~SITELINK',
})
```
