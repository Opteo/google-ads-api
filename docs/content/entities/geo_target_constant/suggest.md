---
title: Get GeoTargetConstants Suggestions
order: 4
type: suggest
entity: GeoTargetConstant 
---

### Get GeoTargetConstant Suggestions 

The `customer.geoTargetConstants.suggest()` method returns geo target constant suggestion. 



#### Arguments

- ##### locale *optional*
    If possible, returned geo targets are translated using this locale. If not, en is used by default. This is also used as a hint for returned geo targets.
- ##### country_code *optional*
    Returned geo targets are restricted to this country code.
- ##### location_names *optional, array/object*
    The location names to search by. At most 25 names can be set.
- ##### geo_targets *optional, array/object*
    The geo target constant resource names to filter by.


#### Returns

Returns an array of objects.
Each object has `locale`, `reach`, `search_term`, `geo_target_constant` and `geo_target_constant_parents[]` properties.