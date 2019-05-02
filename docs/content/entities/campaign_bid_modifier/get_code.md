---
title: Get CampaignBidModifier
order: 2.1
type: get_code
entity: CampaignBidModifier
---

```javascript
// Getting the entity
let result = await customer.campaignBidModifiers.get('customers/3827277046/campaignBidModifiers/729684361~8000')
```

```javascript
// Example result
;({
  resource_name: 'customers/3827277046/campaignBidModifiers/729684361~8000',
  campaign: 'customers/3827277046/campaigns/729684361',
  criterion_id: 8000,
})
```
