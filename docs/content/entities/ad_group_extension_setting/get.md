---
title: Get AdGroupExtensionSetting
order: 2
type: get
entity: AdGroupExtensionSetting
---

The `customer.adGroupExtensionSettings.get()` method returns all fields for one AdGroupExtensionSetting, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript
// Getting the entity
let result = await customer.adGroupExtensionSettings.get(
    'customers/3827277046/adGroupExtensionSettings/36337683057~SITELINK'
)

// Here's what the result might look like
result ===
    {
        resource_name: 'customers/3827277046/adGroupExtensionSettings/36337683057~SITELINK',
        ad_group: 'customers/3827277046/adGroups/36337683057',
        extension_feed_items: [
            { value: 'customers/3827277046/extensionFeedItems/9779152283' },
            { value: 'customers/3827277046/extensionFeedItems/9780600045' },
            { value: 'customers/3827277046/extensionFeedItems/9784349521' },
            { value: 'customers/3827277046/extensionFeedItems/9784362487' },
        ],
        extension_type: 10,
    }
```
