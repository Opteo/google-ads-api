---
type: list_code
entity: CustomInterest
title: List CustomInterest
order: 3.1
---

```javascript
// Listing all the customInterests in the account
let result = await customer.customInterests.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.customInterests.list({
  constraints: [
    {
      key: 'custom_interest.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'custom_interest.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    custom_interest: {
      description: '',
      id: 13338354,
      members: [
        { memberType: 2, parameter: 'ppc' },
        { memberType: 2, parameter: 'google adwords ppc campaign' },
        { memberType: 2, parameter: 'google adwords ppc advertising' },
        { memberType: 2, parameter: 'ppc and google adwords' },
        { memberType: 2, parameter: 'is google adwords ppc' },
        { memberType: 2, parameter: 'google adwords ppc cost' },
        { memberType: 2, parameter: 'ppc google advertising' },
        { memberType: 2, parameter: 'google ads ppc' },
        { memberType: 2, parameter: 'google ad word campaign' },
        { memberType: 2, parameter: 'google ppc marketing' },
        { memberType: 2, parameter: 'google advertising adwords' },
        { memberType: 2, parameter: 'google ppc campaign' },
        { memberType: 2, parameter: 'what is google ppc advertising' },
        { memberType: 2, parameter: 'adwords ppc campaign' },
        { memberType: 2, parameter: 'google ppc agency' },
        { memberType: 2, parameter: 'google adwords agency' },
        { memberType: 2, parameter: 'google ppc' },
        { memberType: 2, parameter: 'google ppc services' },
        { memberType: 2, parameter: 'google ppc cost' },
        { memberType: 2, parameter: 'what is google ppc' },
        { memberType: 2, parameter: 'google ppc courses' },
        { memberType: 2, parameter: 'google ads' },
        { memberType: 2, parameter: 'adwords' },
      ],
      name: 'My custom interest',
      resource_name: 'customers/3827277046/customInterests/13338354',
      status: 2,
      type: 3,
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
