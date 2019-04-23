---
title: Create CampaignLabel
order: 4
type: create
entity: CampaignLabel
---

This section describes how to create a CampaignLabel.

```javascript
// Creating the entity

const campaign_label = {
    // Your CampaignLabel here, without immutable fields such as resource_name
}

const results = await customer.campaignLabels.create(campaign_label)

console.log(results) // ['customers/3827277046/campaignLabels/729914321~898377018']
```
