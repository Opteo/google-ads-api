---
title: Delete KeywordPlanCampaign
order: 6
type: delete
entity: KeywordPlanCampaign
---

### Delete a KeywordPlanCampaign

The `customer.keywordPlanCampaigns.delete(resource_name)` sets the `status` field of a KeywordPlanCampaign to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that KeywordPlanCampaign

#### Returns

_Nothing_

```javascript
// Deleting the entity

await customer.keywordPlanCampaigns.delete('customers/3827277046/keywordPlanCampaigns/4773388')
```
