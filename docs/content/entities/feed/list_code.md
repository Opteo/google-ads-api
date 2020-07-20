---
type: list_code
entity: Feed
title: List Feed
order: 3.1
---

```javascript
// Listing all the feeds in the account
let result = await customer.feeds.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.feeds.list({
  constraints: [
    {
      key: 'feed.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'feed.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    feed: {
      attributes: [
        { id: 1, name: 'SitelinkName', type: 4, is_part_of_key: false },
        { id: 2, name: 'SitelinkUrl', type: 6, is_part_of_key: false },
        { id: 3, name: 'SitelinkDescription1', type: 4, is_part_of_key: false },
        { id: 4, name: 'SitelinkDescription2', type: 4, is_part_of_key: false },
        { id: 5, name: 'SitelinkFinalUrls', type: 12, is_part_of_key: false },
        { id: 6, name: 'SitelinkFinalMobileUrls', type: 12, is_part_of_key: false },
        { id: 7, name: 'SitelinkTrackingUrl', type: 6, is_part_of_key: false },
        { id: 8, name: 'SitelinkFinalUrlSuffix', type: 4, is_part_of_key: false },
      ],
      id: 82896692,
      name: 'My feed',
      origin: 3,
      resource_name: 'customers/9262111890/feeds/82896692',
      status: 2,
    },
    customer: {
      auto_tagging_enabled: false,
      call_reporting_setting: {
        call_conversion_action: 'customers/9262111890/conversionActions/179',
        call_conversion_reporting_enabled: true,
      },
      conversion_tracking_setting: { conversion_tracking_id: 797556569 },
      currency_code: 'EUR',
      descriptive_name: 'My customer',
      has_partners_badge: false,
      id: 9262111890,
      manager: false,
      pay_per_conversion_eligibility_failure_reasons: [],
      remarketing_setting: {
        google_global_site_tag:
          "<!-- Global site tag (gtag.js) - Google Ads: 797556569 -->\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=AW-797556569\"></script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'AW-797556569');\n</script>\n",
      },
      resource_name: 'customers/9262111890',
      test_account: true,
      time_zone: 'Europe/London',
    },
  },
]
```
