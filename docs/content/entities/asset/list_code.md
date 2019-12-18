---
type: list_code
entity: Asset
title: List Asset
order: 3.1
---

```javascript
// Listing all the assets in the account
let result = await customer.assets.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.assets.list({
  constraints: [
    {
      key: 'asset.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'asset.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    asset: {
      id: 225386305,
      image_asset: {
        file_size: 472254,
        full_size: {
          height_pixels: 628,
          url: 'https://tpc.googlesyndication.com/simgad/11290736009894828590',
          width_pixels: 1200,
        },
        mime_type: 4,
      },
      name: '',
      resource_name: 'customers/3827277046/assets/225386305',
      type: 4,
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
        'https://w.opteo.co/workers/parallel?url={lpurl}&domain_id=123443&campaign_id={campaignid}&adgroup_id={adgroupid}&matchtype={matchtype}&network={network}&device={device}',
    },
  },
]
```
