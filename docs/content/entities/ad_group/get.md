---
title: Get AdGroup
order: 2
type: get
entity: AdGroup
---

### Get AdGroup

The `customer.adGroups.get()` method returns all fields for one AdGroup, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript
// Getting the entity
let result = await customer.adGroups.get('customers/9262111890/adGroups/54493284610')
```

```javascript
// Example result
;({
  resource_name: 'customers/9262111890/adGroups/54493284610',
  campaign: 'customers/9262111890/campaigns/1485014801',
  cpc_bid_micros: 10000,
  cpm_bid_micros: 10000,
  cpv_bid_micros: 0,
  effective_target_cpa_micros: 0,
  id: 54493284610,
  name: 'My ad group',
  status: 4,
  target_cpa_micros: 0,
  targeting_setting: {
    target_restrictions: [
      { targetingDimension: 5, bidOnly: { value: true } },
      { targetingDimension: 6, bidOnly: { value: true } },
      { targetingDimension: 8, bidOnly: { value: true } },
      { targetingDimension: 9, bidOnly: { value: true } },
    ],
  },
  type: 2,
  url_custom_parameters: [],
})
```
