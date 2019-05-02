---
title: Get AdGroupBidModifier
order: 2.1
type: get_code
entity: AdGroupBidModifier
---

```javascript
// Getting the entity
let result = await customer.adGroupBidModifiers.get('customers/9262111890/adGroupBidModifiers/66537099246~30000')
```

```javascript
// Example result
;({
  resource_name: 'customers/9262111890/adGroupBidModifiers/66537099246~30000',
  ad_group: 'customers/9262111890/adGroups/66537099246',
  base_ad_group: 'customers/9262111890/adGroups/66537099246',
  criterion_id: 30000,
  device: { type: 4 },
})
```
