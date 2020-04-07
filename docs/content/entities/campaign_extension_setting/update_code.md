---
title: Update CampaignExtensionSetting
order: 5.1
type: update_code
entity: CampaignExtensionSetting
---

```javascript
// Updating the entity

const campaign_extension_setting = {
  resource_name: 'customers/9262111890/campaignExtensionSettings/1483704368~SITELINK', // The resource_name is required
  // ...any other fields that you would like to update
}

// Passing in a single entity to update
const result = await customer.campaignExtensionSettings.update(campaign_extension_setting)

// Passing in an array of entities to update, validating only
const result = await customer.campaignExtensionSettings.update(
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
