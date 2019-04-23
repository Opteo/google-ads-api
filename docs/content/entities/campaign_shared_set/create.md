---
title: Create CampaignSharedSet 
---

This section describes how to create a CampaignSharedSet.



```javascript

// Creating the entity

const campaign_shared_set = {
    // Your CampaignSharedSet here 
}

const results = await customer.campaignSharedSets.create(campaign_shared_set)

console.log(results) // ['customers/1234567890/campaignSharedSets/9765432177']

```