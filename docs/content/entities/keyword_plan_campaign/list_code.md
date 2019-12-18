---
type: list_code
entity: KeywordPlanCampaign
title: List KeywordPlanCampaign
order: 3.1
---

```javascript
// Listing all the keywordPlanCampaigns in the account
let result = await customer.keywordPlanCampaigns.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.keywordPlanCampaigns.list({
  constraints: [
    {
      key: 'keyword_plan_campaign.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'keyword_plan_campaign.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    keyword_plan_campaign: {
      cpc_bid_micros: 1000000,
      geo_targets: [{ geo_target_constant: 'geoTargetConstants/1021278' }],
      id: 115088623,
      keyword_plan: 'customers/9262111890/keywordPlans/115133472',
      keyword_plan_network: 2,
      language_constants: ['languageConstants/1000'],
      name: 'My keyword plan campaign',
      resource_name: 'customers/9262111890/keywordPlanCampaigns/115088623',
    },
    keyword_plan: {
      forecast_period: { date_interval: 4 },
      id: 115133472,
      name: 'My keyword plan',
      resource_name: 'customers/9262111890/keywordPlans/115133472',
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
