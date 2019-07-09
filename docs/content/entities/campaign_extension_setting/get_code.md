---
title: Get CampaignExtensionSetting
order: 2.1
type: get_code
entity: CampaignExtensionSetting
---

```javascript
// Getting the entity
let result = await customer.campaignExtensionSettings.get(
  'customers/9262111890/campaignExtensionSettings/1483704368~SITELINK'
)
```

```javascript
// Example result
;({
  campaign: 'customers/9262111890/campaigns/1483704368',
  extension_feed_items: [
    'customers/9262111890/extensionFeedItems/51842193961',
    'customers/9262111890/extensionFeedItems/51842200495',
    'customers/9262111890/extensionFeedItems/51844020102',
    'customers/9262111890/extensionFeedItems/51844028388',
  ],
  extension_type: 10,
  resource_name: 'customers/9262111890/campaignExtensionSettings/1483704368~SITELINK',
})
```
