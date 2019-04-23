---
title: Create CampaignCriterion 
---

This section describes how to create a CampaignCriterion.



```javascript

// Creating the entity

const campaign_criterion = {
    // Your CampaignCriterion here 
}

const results = await customer.campaignCriteria.create(campaign_criterion)

console.log(results) // ['customers/1234567890/campaignCriteria/9765432177']

```