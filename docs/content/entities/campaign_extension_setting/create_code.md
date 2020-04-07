---
title: Create CampaignExtensionSetting
order: 4.1
type: create_code
entity: CampaignExtensionSetting
---

```javascript
// Creating the entity

const campaign_extension_setting = {
  // Your CampaignExtensionSetting here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.campaignExtensionSettings.create(campaign_extension_setting)

// Passing in an array of entities to create, validating only
const result = await customer.campaignExtensionSettings.create(
  [campaign_extension_setting, other_campaign_extension_setting],
  {
    validate_only: true,
  }
)
```

```javascript

// Example result
{
	results : ['customers/9262111890/campaignExtensionSettings/1483704368~SITELINK'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
