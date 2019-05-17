---
type: list_code
entity: GeoTargetConstant
title: List GeoTargetConstant
order: 3.1
---

```javascript
// Listing all the geoTargetConstants in the account
let result = await customer.geoTargetConstants.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.geoTargetConstants.list({
  constraints: [
    {
      key: 'geo_target_constant.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'geo_target_constant.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    geo_target_constant: {
      resource_name: 'geoTargetConstants/2239',
      canonical_name: 'South Georgia and the South Sandwich Islands',
      country_code: 'GS',
      id: 2239,
      name: 'South Georgia and the South Sandwich Islands',
      status: 2,
      target_type: 'Country',
    },
  },
]
```
