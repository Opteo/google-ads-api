---
title: Get UserInterest
order: 2
type: get
entity: UserInterest
---

### Get a UserInterest

The `customer.userInterests.get(resource_name)` method returns the UserInterest identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that UserInterest

#### Returns

Returns that UserInterest as an object.
