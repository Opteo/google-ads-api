---
title: Create Campaign
order: 4
type: create
entity: Campaign
---

This section describes how to create a Campaign.

```javascript
// Creating the entity

const campaign = {
    // Your Campaign here, without immutable fields such as resource_name
}

const results = await customer.campaigns.create(campaign)

console.log(results) // ['customers/9262111890/campaigns/1473765780']
```
