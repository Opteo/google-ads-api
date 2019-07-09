---
title: Get CampaignBidModifier
order: 2.1
type: get_code
entity: CampaignBidModifier
---

```javascript
// Getting the entity
let result = await customer.campaignBidModifiers.get('customers/3827277046/campaignBidModifiers/2015922405~8000')
```

```javascript
// Example result
;({
  campaign: 'customers/3827277046/campaigns/2015922405',
  criterion_id: 8000,
  resource_name: 'customers/3827277046/campaignBidModifiers/2015922405~8000',
})
```
