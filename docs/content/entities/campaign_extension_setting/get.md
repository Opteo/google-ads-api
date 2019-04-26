---
title: Get CampaignExtensionSetting
order: 2
type: get
entity: CampaignExtensionSetting
---

### Get CampaignExtensionSetting

The `customer.campaignExtensionSettings.get()` method returns all fields for one CampaignExtensionSetting, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript
// Getting the entity
let result = await customer.campaignExtensionSettings.get(
  'customers/9262111890/campaignExtensionSettings/1483704368~SITELINK'
)
```

```javascript
// Example result
;({
  resource_name: 'customers/9262111890/campaignExtensionSettings/1483704368~SITELINK',
  campaign: 'customers/9262111890/campaigns/1483704368',
  extension_feed_items: [
    { value: 'customers/9262111890/extensionFeedItems/51842193961' },
    { value: 'customers/9262111890/extensionFeedItems/51842200495' },
    { value: 'customers/9262111890/extensionFeedItems/51844020102' },
    { value: 'customers/9262111890/extensionFeedItems/51844028388' },
  ],
  extension_type: 10,
})
```
