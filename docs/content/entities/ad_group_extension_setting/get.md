---
title: Get AdGroupExtensionSetting
order: 2
type: get
entity: AdGroupExtensionSetting
---

### Get an AdGroupExtensionSetting

The `customer.adGroupExtensionSettings.get(resource_name)` method returns the AdGroupExtensionSetting identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that AdGroupExtensionSetting

#### Returns

Returns that AdGroupExtensionSetting as an object.

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
