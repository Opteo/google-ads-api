---
title: Get Recommendation 
order: 2
type: get
entity: Recommendation 
---

### Get a Recommendation 

The `customer.recommendations.get(resource_name)` method returns the Recommendation identified by a resource_name. 

> Note: This function is heavily rate-limited by Google, so avoid using it in production.


#### Arguments

- ##### resource_name *required*
    The resource_name of that Recommendation


#### Returns

Returns that Recommendation as an object.
