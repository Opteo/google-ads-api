---
title: Create CampaignExtensionSetting 
---

This section describes how to create a CampaignExtensionSetting.



```javascript

// Creating the entity

const campaign_extension_setting = {
    // Your CampaignExtensionSetting here 
}

const results = await customer.campaignExtensionSettings.create(campaign_extension_setting)

console.log(results) // ['customers/1234567890/campaignExtensionSettings/9765432177']

```