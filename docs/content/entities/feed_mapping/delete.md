---
title: Delete FeedMapping
order: 6
type: delete
entity: FeedMapping
---

### Delete a FeedMapping

The `customer.feedMappings.delete(resource_name)` sets the `status` field of a FeedMapping to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that FeedMapping

#### Returns

_Nothing_

```javascript
// Deleting the entity

await customer.feedMappings.delete('customers/9262111890/feedMappings/82896692~91300060')
```
