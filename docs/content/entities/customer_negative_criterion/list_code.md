---
type: list_code
entity: CustomerNegativeCriterion
title: List CustomerNegativeCriterion
order: 3.1
---

```javascript
// Listing all the customerNegativeCriteria in the account
let result = await customer.customerNegativeCriteria.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.customerNegativeCriteria.list({
  constraints: [
    {
      key: 'customer_negative_criterion.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'customer_negative_criterion.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    customer_negative_criterion: {
      content_label: { type: 17 },
      id: 116505648784,
      resource_name: 'customers/3827277046/customerNegativeCriteria/116505648784',
      type: 22,
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
