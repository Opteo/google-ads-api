---
title: Create KeywordPlanCampaign 
---

This section describes how to create a KeywordPlanCampaign.



```javascript

// Creating the entity

const keyword_plan_campaign = {
    // Your KeywordPlanCampaign here 
}

const results = await customer.keywordPlanCampaigns.create(keyword_plan_campaign)

console.log(results) // ['customers/1234567890/keywordPlanCampaigns/9765432177']

```