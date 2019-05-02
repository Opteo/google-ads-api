---
title: Get DomainCategory
order: 2
type: get
entity: DomainCategory
---

### Get a DomainCategory

The `customer.domainCategories.get(resource_name)` method returns the DomainCategory identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that DomainCategory

#### Returns

Returns that DomainCategory as an object.
