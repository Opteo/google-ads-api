---
title: Get AdGroupBidModifier
order: 2.1
type: get_code
entity: AdGroupBidModifier
---

```javascript
// Getting the entity
let result = await customer.adGroupBidModifiers.get('customers/9262111890/adGroupBidModifiers/57176985017~30000')
```

```javascript
// Example result
;({
  ad_group: 'customers/9262111890/adGroups/57176985017',
  base_ad_group: 'customers/9262111890/adGroups/57176985017',
  bid_modifier_source: 0,
  criterion_id: 30000,
  device: { type: 4 },
  resource_name: 'customers/9262111890/adGroupBidModifiers/57176985017~30000',
})
```
