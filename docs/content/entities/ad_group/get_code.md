---
title: Get AdGroup
order: 2.1
type: get_code
entity: AdGroup
---

```javascript
// Getting the entity
let result = await customer.adGroups.get('customers/9262111890/adGroups/60937781178')
```

```javascript
// Example result
;({
  base_ad_group: 'customers/9262111890/adGroups/60937781178',
  campaign: 'customers/9262111890/campaigns/1485014801',
  cpc_bid_micros: 1000000,
  cpm_bid_micros: 10000,
  cpv_bid_micros: 0,
  effective_target_cpa_micros: 0,
  id: 60937781178,
  labels: [],
  name: 'My ad group',
  resource_name: 'customers/9262111890/adGroups/60937781178',
  status: 4,
  target_cpa_micros: 0,
  targeting_setting: {
    target_restrictions: [
      { targetingDimension: 5, bidOnly: true },
      { targetingDimension: 6, bidOnly: true },
      { targetingDimension: 8, bidOnly: true },
      { targetingDimension: 9, bidOnly: true },
    ],
  },
  type: 2,
  url_custom_parameters: [],
})
```
