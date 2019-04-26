---
type: list
entity: GeoTargetConstant
title: List GeoTargetConstant
order: 3
---

### List all GeoTargetConstant

This `customer.geoTargetConstants.list()` method works just like `get`, except that it returns all of the entities in the account. It isn't rate limited, but it can be very slow, so use it sparingly.

```javascript
// Listing all the geoTargetConstants in the account
let result = await customer.geoTargetConstants.list()

// Listing with constraints and a limited number of results
let result = await customer.geoTargetConstants.list({
  constraints: [
    {
      key: 'geo_target_constant.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
})
```

```javascript
// Example result
;[
  {
    geo_target_constant: {
      resource_name: 'geoTargetConstants/2004',
      canonical_name: 'Afghanistan',
      country_code: 'AF',
      id: 2004,
      name: 'Afghanistan',
      status: 2,
      target_type: 'Country',
    },
  },
]
```
