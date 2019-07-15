---
title: Get Ad 
order: 2
type: get
entity: Ad 
manual_mode: true
---

### Get an Ad 

The `customer.ads.get(resource_name)` method returns the Ad identified by a resource_name. 

> Note: This function is heavily rate-limited by Google, so avoid using it in production.


#### Arguments

- ##### resource_name *required*
    The resource_name of that Ad


#### Returns

Returns that Ad as an object.
