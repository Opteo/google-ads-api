---
title: Get AdGroupCriterion
order: 2.1
type: get_code
entity: AdGroupCriterion
---

```javascript
// Getting the entity
let result = await customer.adGroupCriteria.get('customers/9262111890/adGroupCriteria/60170225920~521456008776')
```

```javascript
// Example result
;({
  ad_group: 'customers/9262111890/adGroups/60170225920',
  approval_status: 4,
  criterion_id: 521456008776,
  effective_cpc_bid_micros: 1000000,
  effective_cpc_bid_source: 6,
  effective_cpm_bid_micros: 10000,
  effective_cpm_bid_source: 6,
  final_mobile_urls: [],
  final_urls: [],
  keyword: { match_type: 4, text: 'test-keyword-478619' },
  negative: false,
  resource_name: 'customers/9262111890/adGroupCriteria/60170225920~521456008776',
  status: 3,
  system_serving_status: 3,
  type: 2,
  url_custom_parameters: [],
})
```
