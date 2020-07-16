---
title: Get GeoTargetConstants Suggestions
order: 4.1
type: suggest_code
entity: GeoTargetConstant
---

```javascript
// Get geo target constant suggestions
let result = await customer.geoTargetConstants.suggest({
      locale: "en",
      country_code: "GB",
      location_names: { names: ["London"] }
    })
```

```javascript
// Example result
;[
  {
    "locale": "en",
    "reach": 32000000,
    "search_term": "London",
    "geo_target_constant": {
      "resource_name": "geoTargetConstants/1006886",
      "id": 1006886,
      "name": "London",
      "country_code": "GB",
      "target_type": "City",
      "status": 2,
      "canonical_name": "London,England,United Kingdom"
    },
    "geo_target_constant_parents_list": [
      {
        "resource_name": "geoTargetConstants/20339",
        "id": 20339,
        "name": "England",
        "country_code": "GB",
        "target_type": "Province",
        "status": 2
      },
      {
        "resource_name": "geoTargetConstants/2826",
        "id": 2826,
        "name": "United Kingdom",
        "country_code": "GB",
        "target_type": "Country",
        "status": 2
      }
    ]
  }
]
```
