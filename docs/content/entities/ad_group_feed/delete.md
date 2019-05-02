---
title: Delete AdGroupFeed
order: 6
type: delete
entity: AdGroupFeed
---

### Delete an AdGroupFeed

The `customer.adGroupFeeds.delete(resource_name)` sets the `status` field of an AdGroupFeed to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that AdGroupFeed

#### Returns

_Nothing_

```javascript
// Deleting the entity

await customer.adGroupFeeds.delete('customers/3827277046/adGroupFeeds/36337683057~43009393')
```
