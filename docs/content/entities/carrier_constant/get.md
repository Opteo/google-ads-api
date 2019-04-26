---
title: Get CarrierConstant
order: 2
type: get
entity: CarrierConstant
---

### Get CarrierConstant

The `customer.carrierConstants.get()` method returns all fields for one CarrierConstant, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript
// Getting the entity
let result = await customer.carrierConstants.get('carrierConstants/70000')
```

```javascript
// Example result
;({ resource_name: 'carrierConstants/70000', country_code: 'JP', id: 70000, name: 'NTT DoCoMo' })
```
