---
title: Get ConversionAction
order: 2.1
type: get_code
entity: ConversionAction
---

```javascript
// Getting the entity
let result = await customer.conversionActions.get('customers/9262111890/conversionActions/314732636')
```

```javascript
// Example result
;({
  resource_name: 'customers/9262111890/conversionActions/314732636',
  attribution_model_settings: { attribution_model: 105, data_driven_model_status: 5 },
  category: 5,
  click_through_lookback_window_days: 7,
  counting_type: 3,
  id: 314732636,
  include_in_conversions_metric: true,
  name: 'My conversion action',
  owner_customer: 'customers/9262111890',
  phone_call_duration_seconds: 60,
  status: 3,
  tag_snippets: [
    {
      type: 3,
      pageFormat: 2,
      globalSiteTag: {
        value:
          "<!-- Global site tag (gtag.js) - Google Ads: 797556569 -->\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=AW-797556569\"></script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'AW-797556569');\n</script>\n",
      },
      eventSnippet: {
        value:
          "<!-- Event snippet for test-conversion-action-6661770 (created during library test) conversion page\nIn your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button. -->\n<script>\nfunction gtag_report_conversion(url) {\n  var callback = function () {\n    if (typeof(url) != 'undefined') {\n      window.location = url;\n    }\n  };\n  gtag('event', 'conversion', {\n      'send_to': 'AW-797556569/5CprCNzgiZYBENn-pvwC',\n      'value': 5.0,\n      'currency': 'USD',\n      'event_callback': callback\n  });\n  return false;\n}\n</script>\n",
      },
    },
    {
      type: 3,
      pageFormat: 3,
      globalSiteTag: {
        value:
          '<!-- Global site tag (gtag) - Google Ads: 797556569 -->\n<amp-analytics type="gtag" data-credentials="include">\n<script type="application/json">\n{\n  "vars": {\n    "gtag_id": "AW-797556569",\n    "config": {\n      "AW-797556569": {\n        "groups": "default"\n      }\n    }\n  },\n  "triggers": {\n  }\n}\n</script>\n</amp-analytics>\n',
      },
      eventSnippet: {
        value:
          '"C_yfcHXCUzChg": {\n  "on": "click",\n  "selector": "CSS_SELECTOR",\n  "vars": {\n    "event_name": "conversion",\n    "value": 5.0,\n    "currency": "USD",\n    "send_to": ["AW-797556569/5CprCNzgiZYBENn-pvwC"]\n  }\n}\n',
      },
    },
    {
      type: 2,
      pageFormat: 2,
      globalSiteTag: {
        value:
          "<!-- Global site tag (gtag.js) - Google Ads: 797556569 -->\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=AW-797556569\"></script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'AW-797556569');\n</script>\n",
      },
      eventSnippet: {
        value:
          "<!-- Event snippet for test-conversion-action-6661770 (created during library test) conversion page -->\n<script>\n  gtag('event', 'conversion', {\n      'send_to': 'AW-797556569/5CprCNzgiZYBENn-pvwC',\n      'value': 5.0,\n      'currency': 'USD'\n  });\n</script>\n",
      },
    },
    {
      type: 2,
      pageFormat: 3,
      globalSiteTag: {
        value:
          '<!-- Global site tag (gtag) - Google Ads: 797556569 -->\n<amp-analytics type="gtag" data-credentials="include">\n<script type="application/json">\n{\n  "vars": {\n    "gtag_id": "AW-797556569",\n    "config": {\n      "AW-797556569": {\n        "groups": "default"\n      }\n    }\n  },\n  "triggers": {\n  }\n}\n</script>\n</amp-analytics>\n',
      },
      eventSnippet: {
        value:
          '"C_yfcHXCUzChg": {\n  "on": "visible",\n  "vars": {\n    "event_name": "conversion",\n    "value": 5.0,\n    "currency": "USD",\n    "send_to": ["AW-797556569/5CprCNzgiZYBENn-pvwC"]\n  }\n}\n',
      },
    },
  ],
  type: 8,
  value_settings: { always_use_default_value: false, default_currency_code: 'USD', default_value: 5 },
  view_through_lookback_window_days: 1,
})
```
