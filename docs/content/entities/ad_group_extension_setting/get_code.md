---
title: Get AdGroupExtensionSetting
order: 2.1
type: get_code
entity: AdGroupExtensionSetting
---

```javascript
// Getting the entity
let result = await customer.adGroupExtensionSettings.get(
  'customers/3827277046/adGroupExtensionSettings/36337683057~SITELINK'
)
```

```javascript
// Example result
;({
  resource_name: 'customers/3827277046/adGroupExtensionSettings/36337683057~SITELINK',
  ad_group: 'customers/3827277046/adGroups/36337683057',
  extension_feed_items: [
    { value: 'customers/3827277046/extensionFeedItems/9779152283' },
    { value: 'customers/3827277046/extensionFeedItems/9780600045' },
    { value: 'customers/3827277046/extensionFeedItems/9784349521' },
    { value: 'customers/3827277046/extensionFeedItems/9784362487' },
  ],
  extension_type: 10,
})
```
