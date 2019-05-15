---
title: Get Customer
order: 2.1
type: get_code
entity: Customer
---

```javascript
// Getting the entity
let result = await customer.customers.get('customers/1234567890/customers/123123123')
```

```javascript
// Example result
;({
    resource_name: 'customers/9262111890',
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
    remarketing_setting: {
        google_global_site_tag:
            "<!-- Global site tag (gtag.js) - Google Ads: 797556569 -->\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=AW-797556569\"></script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'AW-797556569');\n</script>\n",
    },
    test_account: true,
    time_zone: 'Europe/London',
})
```
