---
title: Get GeoTargetConstant
order: 2
type: get
entity: GeoTargetConstant
---

The `customer.geoTargetConstants.get()` method returns all fields for one GeoTargetConstant, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript
// Getting the entity
let result = await customer.geoTargetConstants.get('geoTargetConstants/2004')

// Here's what the result might look like
result ===
    {
        resource_name: 'geoTargetConstants/2004',
        canonical_name: 'Afghanistan',
        country_code: 'AF',
        id: 2004,
        name: 'Afghanistan',
        status: 2,
        target_type: 'Country',
    }
```
