---
title: Delete AdGroupBidModifier
order: 6
type: delete
entity: AdGroupBidModifier
---

### Delete an AdGroupBidModifier

The `customer.adGroupBidModifiers.delete(resource_name)` sets the `status` field of an AdGroupBidModifier to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that AdGroupBidModifier

#### Returns

_Nothing_

```javascript
// Deleting the entity

await customer.adGroupBidModifiers.delete('customers/9262111890/adGroupBidModifiers/66537099246~30000')
```
