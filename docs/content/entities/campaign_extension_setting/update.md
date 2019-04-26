---
title: Update CampaignExtensionSetting
order: 5
type: update
entity: CampaignExtensionSetting
---

### Update CampaignExtensionSetting

This section describes how to update a CampaignExtensionSetting.

```javascript
// Updating the entity

const campaign_extension_setting = {
  resource_name: 'customers/9262111890/campaignExtensionSettings/1483704368~SITELINK', // The resource_name is required
  // ...any other fields that you would like to update
}

const result = await customer.campaignExtensionSettings.update(campaign_extension_setting)
```

```javascript
// Example result
;['customers/9262111890/campaignExtensionSettings/1483704368~SITELINK']
```
