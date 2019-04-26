---
title: Get MobileDeviceConstant
order: 2
type: get
entity: MobileDeviceConstant
---

### Get MobileDeviceConstant

The `customer.mobileDeviceConstants.get()` method returns all fields for one MobileDeviceConstant, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript
// Getting the entity
let result = await customer.mobileDeviceConstants.get('mobileDeviceConstants/600329')
```

```javascript
// Example result
;({
  resource_name: 'mobileDeviceConstants/600329',
  id: 600329,
  manufacturer_name: 'HTC',
  name: 'Hero',
  operating_system_name: 'Android',
  type: 2,
})
```
