---
title: Create Campaign 
---

This section describes how to create a Campaign.



```javascript

// Creating the entity

const campaign = {
    // Your Campaign here 
}

const results = await customer.campaigns.create(campaign)

console.log(results) // ['customers/1234567890/campaigns/9765432177']

```