---
title: Get ExtensionFeedItem
order: 2.1
type: get_code
entity: ExtensionFeedItem
---

```javascript
// Getting the entity
let result = await customer.extensionFeedItems.get('customers/3827277046/extensionFeedItems/13882206517')
```

```javascript
// Example result
;({
  ad_schedules: [],
  call_feed_item: {
    call_conversion_action: 'customers/3827277046/conversionActions/179',
    call_conversion_reporting_state: 4,
    call_conversion_tracking_disabled: false,
    call_tracking_enabled: true,
    country_code: 'GB',
    phone_number: '02035751125',
  },
  extension_type: 4,
  resource_name: 'customers/3827277046/extensionFeedItems/13882206517',
  status: 2,
})
```
