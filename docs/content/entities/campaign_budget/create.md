---
title: Create CampaignBudget 
---

This section describes how to create a CampaignBudget.



```javascript

// Creating the entity

const campaign_budget = {
    // Your CampaignBudget here 
}

const results = await customer.campaignBudgets.create(campaign_budget)

console.log(results) // ['customers/1234567890/campaignBudgets/9765432177']

```