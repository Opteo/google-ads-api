---
title: Update Campaign
order: 5
type: update
entity: Campaign
---

This section describes how to update a Campaign.

```javascript
// Updating the entity

const campaign = {
    resource_name: 'customers/9262111890/campaigns/1473765780', // The resource_name is required
    // ...any other fields that you would like to update
}

const results = await customer.campaigns.update(campaign)

console.log(results) // ['customers/9262111890/campaigns/1473765780']
```
