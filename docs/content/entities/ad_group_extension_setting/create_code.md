---
title: Create AdGroupExtensionSetting
order: 4.1
type: create_code
entity: AdGroupExtensionSetting
---

```javascript
// Creating the entity

const ad_group_extension_setting = {
  // Your AdGroupExtensionSetting here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.adGroupExtensionSettings.create(ad_group_extension_setting)

// Passing in an array of entities to create, validating only
const result = await customer.adGroupExtensionSettings.create(
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
