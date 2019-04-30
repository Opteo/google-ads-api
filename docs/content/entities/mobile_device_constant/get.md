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
let result = await customer.mobileDeviceConstants.get('mobileDeviceConstants/610508')
```

```javascript
// Example result
;({
  resource_name: 'mobileDeviceConstants/610508',
  id: 610508,
  manufacturer_name: 'Microsoft',
  name: 'windows rt tablet',
  operating_system_name: 'Other/Unknown',
  type: 3,
})
```
