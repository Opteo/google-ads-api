---
type: list_code
entity: SharedSet
title: List SharedSet
order: 3.1
---

```javascript
// Listing all the sharedSets in the account
let result = await customer.sharedSets.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.sharedSets.list({
  constraints: [
    {
      key: 'shared_set.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'shared_set.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    shared_set: {
      id: 1802068178,
      member_count: 0,
      name: 'My shared set',
      reference_count: 0,
      resource_name: 'customers/9262111890/sharedSets/1802068178',
      status: 3,
      type: 2,
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
      pay_per_conversion_eligibility_failure_reasons: [8, 2],
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
