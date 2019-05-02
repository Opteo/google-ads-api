---
title: Get CarrierConstant
order: 2
type: get
entity: CarrierConstant
---

### Get a CarrierConstant

The `customer.carrierConstants.get(resource_name)` method returns the CarrierConstant identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that CarrierConstant

#### Returns

Returns that CarrierConstant as an object.

```javascript
// Getting the entity
let result = await customer.carrierConstants.get('carrierConstants/70720')
```

```javascript
// Example result
;({
  resource_name: 'carrierConstants/70720',
  country_code: 'TW',
  id: 70720,
  name: 'Long Distance & Mobile Business Group',
})
```
