---
title: Create CustomerManagerLink
order: 4
type: create
entity: CustomerManagerLink
---

### Create a CustomerManagerLink

The `customer.customerManagerLinks.create(customer_manager_link)` method makes a new CustomerManagerLink in an account. It also supports an array as its first agument for batch operations.

#### Arguments

- **`entity`** (_required_): The CustomerManagerLink object or array of objects.
- **`options`** (_optional_): Object of the form `{ validate_only, partial_failure }`:
  - **`validate_only`** (_optional, boolean_): When `true`, only checks whether the operation is valid. Makes no changes to your google ads account. Defaults to `false`.
  - **`partial_failure`** (_optional, boolean_): Only useful when passing in an array of entities. When `false`, a single failure in the array of entities to create will cause the whole operation to be rolled back. When `true`, the system will still create the non-failed entities. Defaults to `false`.

#### Returns

- **`results`**: An array of the `resource_names` created.
- **`partial_failure_error`**: If `partial_failure` was set to `true`, an array of errors.
- **`request`**: The request object that we sent to google's gRPC services. Useful for debugging.

```javascript
// Creating the entity

const customer_manager_link = {
  // Your CustomerManagerLink here, without immutable fields such as resource_name
}

// Passing in a single entity to create
const result = await customer.customerManagerLinks.create(customer_manager_link)

// Passing in an array of entities to create, validating only
const result = await customer.customerManagerLinks.create([customer_manager_link, other_customer_manager_link], {
  validate_only: true,
})
```

```javascript

// Example result
{
	results : ['customers/9262111890/customerManagerLinks/6141549892~121665495'],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
