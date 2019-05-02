---
title: Delete CampaignExtensionSetting
order: 6
type: delete
entity: CampaignExtensionSetting
---

### Delete a CampaignExtensionSetting

The `customer.campaignExtensionSettings.delete(resource_name)` sets the `status` field of a CampaignExtensionSetting to `REMOVED`. Those entities and their metrics will continue to exist, but they will be read-only. Removed entities cannot be re-enabled.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that CampaignExtensionSetting

#### Returns

_Nothing_

```javascript
// Deleting the entity

await customer.campaignExtensionSettings.delete('customers/9262111890/campaignExtensionSettings/1483704368~SITELINK')
```
