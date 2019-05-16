---
title: Update AdGroupExtensionSetting
order: 5.1
type: update_code
entity: AdGroupExtensionSetting
---

```javascript
// Updating the entity

const ad_group_extension_setting = {
  resource_name: 'customers/3827277046/adGroupExtensionSettings/36337683057~SITELINK', // The resource_name is required
  // ...any other fields that you would like to update
}

// Passing in a single entity to update
const result = await customer.adGroupExtensionSettings.update(ad_group_extension_setting)

// Passing in an array of entities to update, validating only
const result = await customer.adGroupExtensionSettings.update(
  [ad_group_extension_setting, other_ad_group_extension_setting],
  {
    validate_only: true,
  }
)
```

```javascript

// Example result
{
	results : ['customers/3827277046/adGroupExtensionSettings/36337683057~SITELINK'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
