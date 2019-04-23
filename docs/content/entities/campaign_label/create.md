---
title: Create CampaignLabel 
---

This section describes how to create a CampaignLabel.



```javascript

// Creating the entity

const campaign_label = {
    // Your CampaignLabel here 
}

const results = await customer.campaignLabels.create(campaign_label)

console.log(results) // ['customers/1234567890/campaignLabels/9765432177']

```