---
title: Get GeoTargetConstant
order: 2
type: get
entity: GeoTargetConstant
---

### Get a GeoTargetConstant

The `customer.geoTargetConstants.get(resource_name)` method returns the GeoTargetConstant identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that GeoTargetConstant

#### Returns

Returns that GeoTargetConstant as an object.

```javascript
// Getting the entity
let result = await customer.geoTargetConstants.get('geoTargetConstants/2004')
```

```javascript
// Example result
;({
  resource_name: 'geoTargetConstants/2004',
  canonical_name: 'Afghanistan',
  country_code: 'AF',
  id: 2004,
  name: 'Afghanistan',
  status: 2,
  target_type: 'Country',
})
```
