---
title: Create CampaignExtensionSetting
order: 4
type: create
entity: CampaignExtensionSetting
---

This section describes how to create a CampaignExtensionSetting.

```javascript
// Creating the entity

const campaign_extension_setting = {
    // Your CampaignExtensionSetting here, without immutable fields such as resource_name
}

const results = await customer.campaignExtensionSettings.create(campaign_extension_setting)

console.log(results) // ['customers/9262111890/campaignExtensionSettings/1483704368~SITELINK']
```
