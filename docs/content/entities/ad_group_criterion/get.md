---
title: Get AdGroupCriterion
order: 2
type: get
entity: AdGroupCriterion
---

### Get AdGroupCriterion

The `customer.adGroupCriteria.get()` method returns all fields for one AdGroupCriterion, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript
// Getting the entity
let result = await customer.adGroupCriteria.get('customers/9262111890/adGroupCriteria/60170225920~521456008776')
```

```javascript
// Example result
;({
  resource_name: 'customers/9262111890/adGroupCriteria/60170225920~521456008776',
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
  status: 3,
  system_serving_status: 3,
  type: 2,
  url_custom_parameters: [],
})
```
