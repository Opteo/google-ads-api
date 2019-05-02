---
title: Get AdGroup
order: 2.1
type: get_code
entity: AdGroup
---

```javascript
// Getting the entity
let result = await customer.adGroups.get('customers/9262111890/adGroups/66537099246')
```

```javascript
// Example result
;({
  resource_name: 'customers/9262111890/adGroups/66537099246',
  campaign: 'customers/9262111890/campaigns/1485014801',
  cpc_bid_micros: 1000000,
  cpm_bid_micros: 10000,
  cpv_bid_micros: 0,
  effective_target_cpa_micros: 0,
  id: 66537099246,
  name: 'My ad group',
  status: 2,
  target_cpa_micros: 0,
  target_cpm_micros: 10000,
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
