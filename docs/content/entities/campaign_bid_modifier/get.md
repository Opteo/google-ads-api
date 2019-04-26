---
title: Get CampaignBidModifier
order: 2
type: get
entity: CampaignBidModifier
---

### Get CampaignBidModifier

The `customer.campaignBidModifiers.get()` method returns all fields for one CampaignBidModifier, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

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
