---
title: Get CampaignLabel
order: 2.1
type: get_code
entity: CampaignLabel
---

```javascript
// Getting the entity
let result = await customer.campaignLabels.get('customers/3827277046/campaignLabels/2015922405~3889728468')
```

```javascript
// Example result
;({
  campaign: 'customers/3827277046/campaigns/2015922405',
  label: 'customers/3827277046/labels/3889728468',
  resource_name: 'customers/3827277046/campaignLabels/2015922405~3889728468',
})
```
