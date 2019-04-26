---
title: Get AdGroupBidModifier
order: 2
type: get
entity: AdGroupBidModifier
---

### Get AdGroupBidModifier

The `customer.adGroupBidModifiers.get()` method returns all fields for one AdGroupBidModifier, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript
// Getting the entity
let result = await customer.adGroupBidModifiers.get('customers/9262111890/adGroupBidModifiers/54493284610~30000')
```

```javascript
// Example result
;({
  resource_name: 'customers/9262111890/adGroupBidModifiers/54493284610~30000',
  ad_group: 'customers/9262111890/adGroups/54493284610',
  base_ad_group: 'customers/9262111890/adGroups/54493284610',
  criterion_id: 30000,
  device: { type: 4 },
})
```
