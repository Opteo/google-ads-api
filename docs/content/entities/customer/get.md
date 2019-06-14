---
title: Get Customer 
order: 2
type: get
entity: Customer 
---

### Get a Customer 

The `customer.get(resource_name)` method returns the Customer identified by a resource_name. 

> Note: This function is heavily rate-limited by Google, so avoid using it in production.


#### Arguments

- ##### id *required*
    The ID (aka CID) of that customer, without dashes, such as `1231231234`.


#### Returns

Returns that Customer as an object.
