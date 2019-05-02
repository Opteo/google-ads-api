---
title: Get AdGroupBidModifier
order: 2
type: get
entity: AdGroupBidModifier
---

### Get an AdGroupBidModifier

The `customer.adGroupBidModifiers.get(resource_name)` method returns the AdGroupBidModifier identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that AdGroupBidModifier

#### Returns

Returns that AdGroupBidModifier as an object.

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
