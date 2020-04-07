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
  ad_rotation_mode: 0,
  base_ad_group: 'customers/9262111890/adGroups/60937781178',
  campaign: 'customers/9262111890/campaigns/1485014801',
  cpc_bid_micros: 1000000,
  cpm_bid_micros: 10000,
  cpv_bid_micros: 0,
  display_custom_bid_dimension: 0,
  effective_target_cpa_micros: 0,
  effective_target_cpa_source: 0,
  effective_target_roas_source: 0,
  id: 60937781178,
  labels: [],
  name: 'My ad group',
  resource_name: 'customers/9262111890/adGroups/60937781178',
  status: 4,
  target_cpa_micros: 0,
  targeting_setting: {
    target_restrictions: [
      { targeting_dimension: 5, bid_only: true },
      { targeting_dimension: 6, bid_only: true },
      { targeting_dimension: 8, bid_only: true },
      { targeting_dimension: 9, bid_only: true },
    ],
  },
  type: 2,
  url_custom_parameters: [],
})
```
