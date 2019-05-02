---
type: list_code
entity: ConversionAction
title: List ConversionAction
order: 3.1
---

```javascript
// Listing all the conversionActions in the account
let result = await customer.conversionActions.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.conversionActions.list({
  constraints: [
    {
      key: 'conversion_action.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'conversion_action.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    conversion_action: {
      resource_name: 'customers/3827277046/conversionActions/238277646',
      app_id: 'com.coinbase.android',
      attribution_model_settings: { attribution_model: 101, data_driven_model_status: 5 },
      category: 7,
      click_through_lookback_window_days: 30,
      counting_type: 2,
      id: 238277646,
      include_in_conversions_metric: true,
      name: 'My conversion action',
      owner_customer: 'customers/3827277046',
      phone_call_duration_seconds: 60,
      status: 3,
      tag_snippets: [],
      type: 4,
      value_settings: { always_use_default_value: true, default_currency_code: 'GBP', default_value: 1 },
      view_through_lookback_window_days: 1,
    },
    customer: {
      resource_name: 'customers/3827277046',
      auto_tagging_enabled: true,
      call_reporting_setting: {
        call_conversion_action: 'customers/3827277046/conversionActions/179',
        call_conversion_reporting_enabled: true,
      },
      conversion_tracking_setting: { conversion_tracking_id: 875176189 },
      currency_code: 'GBP',
      descriptive_name: 'My customer',
      has_partners_badge: false,
      id: 3827277046,
      manager: false,
      remarketing_setting: {
        google_global_site_tag:
          "<!-- Global site tag (gtag.js) - Google Ads: 875176189 -->\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=AW-875176189\"></script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'AW-875176189');\n</script>\n",
      },
      test_account: false,
      time_zone: 'Europe/London',
      tracking_url_template:
        '{lpurl}?utm_source=adwords&utm_medium=PPC&utm_campaign={campaignid}&utm_term={ifsearch:{keyword}}{ifcontent:{placement}}&utm_content={creative}&network={network}&adgroupid={adgroupid}&matchtype={matchtype}&adposition={adposition}&targetid={targetid}&target={target}&device={device}&devicemodel={devicemodel}',
    },
  },
]
```
