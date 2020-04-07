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
      attribution_model_settings: { attribution_model: 105, data_driven_model_status: 5 },
      category: 5,
      click_through_lookback_window_days: 7,
      counting_type: 3,
      id: 314732636,
      include_in_conversions_metric: true,
      name: 'My conversion action',
      owner_customer: 'customers/9262111890',
      phone_call_duration_seconds: 60,
      resource_name: 'customers/9262111890/conversionActions/314732636',
      status: 3,
      tag_snippets: [
        {
          type: 3,
          page_format: 2,
          global_site_tag:
            "<!-- Global site tag (gtag.js) - Google Ads: 797556569 -->\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=AW-797556569\"></script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'AW-797556569');\n</script>\n",
          event_snippet:
            "<!-- Event snippet for test-conversion-action-6661770 (created during library test) conversion page\nIn your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button. -->\n<script>\nfunction gtag_report_conversion(url) {\n  var callback = function () {\n    if (typeof(url) != 'undefined') {\n      window.location = url;\n    }\n  };\n  gtag('event', 'conversion', {\n      'send_to': 'AW-797556569/5CprCNzgiZYBENn-pvwC',\n      'value': 5.0,\n      'currency': 'USD',\n      'event_callback': callback\n  });\n  return false;\n}\n</script>\n",
        },
        {
          type: 3,
          page_format: 3,
          global_site_tag:
            '<!-- Global site tag (gtag) - Google Ads: 797556569 -->\n<amp-analytics type="gtag" data-credentials="include">\n<script type="application/json">\n{\n  "vars": {\n    "gtag_id": "AW-797556569",\n    "config": {\n      "AW-797556569": {\n        "groups": "default"\n      }\n    }\n  },\n  "triggers": {\n  }\n}\n</script>\n</amp-analytics>\n',
          event_snippet:
            '"C_yfcHXCUzChg": {\n  "on": "click",\n  "selector": "CSS_SELECTOR",\n  "vars": {\n    "event_name": "conversion",\n    "value": 5.0,\n    "currency": "USD",\n    "send_to": ["AW-797556569/5CprCNzgiZYBENn-pvwC"]\n  }\n}\n',
        },
        {
          type: 2,
          page_format: 2,
          global_site_tag:
            "<!-- Global site tag (gtag.js) - Google Ads: 797556569 -->\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=AW-797556569\"></script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'AW-797556569');\n</script>\n",
          event_snippet:
            "<!-- Event snippet for test-conversion-action-6661770 (created during library test) conversion page -->\n<script>\n  gtag('event', 'conversion', {\n      'send_to': 'AW-797556569/5CprCNzgiZYBENn-pvwC',\n      'value': 5.0,\n      'currency': 'USD'\n  });\n</script>\n",
        },
        {
          type: 2,
          page_format: 3,
          global_site_tag:
            '<!-- Global site tag (gtag) - Google Ads: 797556569 -->\n<amp-analytics type="gtag" data-credentials="include">\n<script type="application/json">\n{\n  "vars": {\n    "gtag_id": "AW-797556569",\n    "config": {\n      "AW-797556569": {\n        "groups": "default"\n      }\n    }\n  },\n  "triggers": {\n  }\n}\n</script>\n</amp-analytics>\n',
          event_snippet:
            '"C_yfcHXCUzChg": {\n  "on": "visible",\n  "vars": {\n    "event_name": "conversion",\n    "value": 5.0,\n    "currency": "USD",\n    "send_to": ["AW-797556569/5CprCNzgiZYBENn-pvwC"]\n  }\n}\n',
        },
      ],
      type: 8,
      value_settings: { always_use_default_value: false, default_currency_code: 'USD', default_value: 5 },
      view_through_lookback_window_days: 1,
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
