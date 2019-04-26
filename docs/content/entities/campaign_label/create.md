---
title: Create CampaignLabel
order: 4
type: create
entity: CampaignLabel
---

### Create CampaignLabel

This section describes how to create a CampaignLabel.

```javascript
// Creating the entity

const campaign_label = {
  // Your CampaignLabel here, without immutable fields such as resource_name
}

const result = await customer.campaignLabels.create(campaign_label)
```

```javascript
// Example result
;['customers/3827277046/campaignLabels/729914321~898377018']
```
