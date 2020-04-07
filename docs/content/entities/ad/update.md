---
title: Update Ad 
order: 5
type: update
entity: Ad 
manual_mode: true
---

### Update an Ad 


The `customer.ads.update(ad)` method changes the attributes of an existing ad in an account. It also supports an array as its first agument for batch operations. Updating an ad using this method will not reset its metrics.


#### Arguments

- ##### entity *required*
    The Ad object or array of objects. These must have a resource_name field set to identify the entity. Any other fields that you set will be updated.
- ##### options *optional*
    Object of the form `{ validate_only, partial_failure }`:
    - ##### validate_only *optional, boolean*
        When `true`, only checks whether the operation is valid. Makes no changes to your google ads account. Defaults to `false`.
    - ##### partial_failure *optional, boolean*
        Only useful when passing in an array of entities. When `false`, a single failure in the array of entities to update will cause the whole operation to be rolled back. When `true`, the system will still update the non-failed entities. Defaults to `false`.


#### Returns

- ##### results
    An array of the `resource_names` updated.
- ##### partial_failure_error
    If `partial_failure` was set to `true`, an array of errors.
- ##### request
    The request object sent to google's gRPC services. Useful for debugging.
