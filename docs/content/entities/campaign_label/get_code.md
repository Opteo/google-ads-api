---
title: Get CampaignLabel
order: 2.1
type: get_code
entity: CampaignLabel
---

```javascript
// Getting the entity
let result = await customer.campaignLabels.get('customers/3827277046/campaignLabels/881817006~898377018')
```

```javascript
// Example result
;({
  resource_name: 'customers/3827277046/campaignLabels/881817006~898377018',
  campaign: 'customers/3827277046/campaigns/881817006',
  label: 'customers/3827277046/labels/898377018',
})
```
