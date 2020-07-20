---
type: list_code
entity: MediaFile
title: List MediaFile
order: 3.1
---

```javascript
// Listing all the mediaFiles in the account
let result = await customer.mediaFiles.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.mediaFiles.list({
  constraints: [
    {
      key: 'media_file.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'media_file.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    media_file: {
      file_size: 5159,
      id: 44067075104,
      mime_type: 2,
      name: '',
      resource_name: 'customers/3827277046/mediaFiles/44067075104',
      source_url:
        'https://lh3.googleusercontent.com/D3DAe038umSn2ap4q_Ll7HPSTNj5szBbJNOoXeblYkmlZHCGg1JiIq45WIr_CEGM9FXoH1vb9Hi1gF7CLw',
      type: 2,
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
      final_url_suffix:
        'wickedsource=google&wickedid={creative}&wtm_term={ifsearch:{keyword}}{ifcontent:{placement}}&wtm_campaign={campaignid}&wtm_content={adgroupid}&wickedplacement={placement}&wickedkeyword={keyword}&gclid={gclid}',
      has_partners_badge: false,
      id: 3827277046,
      manager: false,
      optimization_score: 0.8214771414132993,
      pay_per_conversion_eligibility_failure_reasons: [],
      remarketing_setting: {
        google_global_site_tag:
          "<!-- Global site tag (gtag.js) - Google Ads: 875176189 -->\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=AW-875176189\"></script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'AW-875176189');\n</script>\n",
      },
      resource_name: 'customers/3827277046',
      test_account: false,
      time_zone: 'Europe/London',
      tracking_url_template:
        'https://w.opteo.co/workers/ct?url={lpurl}&domain_id=123443&campaign_id={campaignid}&adgroup_id={adgroupid}&matchtype={matchtype}&network={network}&device={device}&keyword={keyword}&targetid={targetid}',
    },
  },
]
```
