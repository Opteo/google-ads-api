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
        { member_type: 2, parameter: 'ppc' },
        { member_type: 2, parameter: 'google adwords ppc campaign' },
        { member_type: 2, parameter: 'google adwords ppc advertising' },
        { member_type: 2, parameter: 'ppc and google adwords' },
        { member_type: 2, parameter: 'is google adwords ppc' },
        { member_type: 2, parameter: 'google adwords ppc cost' },
        { member_type: 2, parameter: 'ppc google advertising' },
        { member_type: 2, parameter: 'google ads ppc' },
        { member_type: 2, parameter: 'google ad word campaign' },
        { member_type: 2, parameter: 'google ppc marketing' },
        { member_type: 2, parameter: 'google advertising adwords' },
        { member_type: 2, parameter: 'google ppc campaign' },
        { member_type: 2, parameter: 'what is google ppc advertising' },
        { member_type: 2, parameter: 'adwords ppc campaign' },
        { member_type: 2, parameter: 'google ppc agency' },
        { member_type: 2, parameter: 'google adwords agency' },
        { member_type: 2, parameter: 'google ppc' },
        { member_type: 2, parameter: 'google ppc services' },
        { member_type: 2, parameter: 'google ppc cost' },
        { member_type: 2, parameter: 'what is google ppc' },
        { member_type: 2, parameter: 'google ppc courses' },
        { member_type: 2, parameter: 'google ads' },
        { member_type: 2, parameter: 'adwords' },
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
      final_url_suffix: 'gclid={gclid}',
      has_partners_badge: false,
      id: 3827277046,
      manager: false,
      pay_per_conversion_eligibility_failure_reasons: [],
      remarketing_setting: {
        google_global_site_tag:
          "<!-- Global site tag (gtag.js) - Google Ads: 875176189 -->\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=AW-875176189\"></script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'AW-875176189');\n</script>\n",
      },
      resource_name: 'customers/3827277046',
      test_account: false,
      time_zone: 'Europe/London',
      tracking_url_template:
        'https://w.opteo.co/workers/parallel?url={lpurl}&domain_id=123443&campaign_id={campaignid}&adgroup_id={adgroupid}&matchtype={matchtype}&network={network}&device={device}&keyword={keyword}&targetid={targetid}',
    },
  },
]
```
