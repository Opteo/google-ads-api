---
title: Get CampaignBidModifier
order: 2
type: get
entity: CampaignBidModifier
---

### Get a CampaignBidModifier

The `customer.campaignBidModifiers.get(resource_name)` method returns the CampaignBidModifier identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that CampaignBidModifier

#### Returns

Returns that CampaignBidModifier as an object.

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
