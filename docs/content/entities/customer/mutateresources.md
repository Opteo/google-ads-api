---
title: Mutate Resources
order: 5
type: mutateresources
entity: Customer 
---

### Mutate several of different resource types in one call

The `customer.mutateResources(resources_array)` takes an array of operations, where each operation is mutation to a resource, performs all of these mutations in sequence. By default, a call to `customer.mutateResources()` is atomic -- either all operations succeed or everything is rolled back.

#### Arguments

- ##### operations *required, array* 
    An array of operations. Each operation looks just like a resource with a few extra keys. They are of the form:
    - ##### \_resource: *string, required* 
        The resource type of this operation, such as `Campaign` or `AdGroupAd`. All mutable core resources are valid. This string is in TitleCase format.
    - ##### \_operation: *string, optional* 
        The mutation type of this operation. Can be `create`, `update`, or `delete`. Defaults to `create`.
    - ##### resource_name *string* 
        The resource_name of the resource you are operating on. Required for `update` and `delete`operations, optional for `create` operations. When creating a resource, if you need to reference this resource in a future operation, use a negative integer as an ID, such as `-1`. 
    - ##### (other_fields)
        Any other fields valid for this resource, such as `name`.
- ##### options *optional*
    Object of the form `{ validate_only, partial_failure }`:
    - ##### validate_only *optional, boolean* 
        When `true`, only checks whether the operation is valid. Makes no changes to your google ads account. Defaults to `false`.
    - ##### partial_failure *optional, boolean*
        When `false`, a single failure in the array of operations will cause the whole sequence to be rolled back. When `true`, the system will attempt to perform the next operations. Defaults to `false`.


#### Returns

- ##### results
    An array of the `resource_names` created.
- ##### partial_failure_error
    If `partial_failure` was set to `true`, an array of errors.
- ##### request
    The request object sent to google's gRPC services. Useful for debugging.
