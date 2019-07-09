---
type: list_code
entity: Label
title: List Label
order: 3.1
---

```javascript
// Listing all the labels in the account
let result = await customer.labels.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.labels.list({
  constraints: [
    {
      key: 'label.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'label.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    label: {
      id: 3345231412,
      name: 'My label',
      resource_name: 'customers/3827277046/labels/3345231412',
      status: 2,
      text_label: {
        background_color: '#e993eb',
        description: 'Adgroups where Chloe will write new ads that kick butt.',
      },
    },
    customer: {
      auto_tagging_enabled: true,
      call_reporting_setting: {
        call_conversion_action: 'customers/3827277046/conversionActions/179',
        call_conversion_reporting_enabled: true,
        call_reporting_enabled: true,
      },
      conversion_tracking_setting: { conversion_tracking_id: 875176189 },
      currency_code: 'GBP',
      descriptive_name: 'My customer',
      has_partners_badge: false,
      id: 3827277046,
      manager: false,
      pay_per_conversion_eligibility_failure_reasons: [5],
      remarketing_setting: {
        google_global_site_tag:
          "<!-- Global site tag (gtag.js) - Google Ads: 875176189 -->\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=AW-875176189\"></script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'AW-875176189');\n</script>\n",
      },
      resource_name: 'customers/3827277046',
      test_account: false,
      time_zone: 'Europe/London',
    },
  },
]
```
