---
type: list_code
entity: CampaignCriterion
title: List CampaignCriterion
order: 3.1
---

```javascript
// Listing all the campaignCriteria in the account
let result = await customer.campaignCriteria.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.campaignCriteria.list({
  constraints: [
    {
      key: 'campaign_criterion.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'campaign_criterion.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    campaign_criterion: {
      campaign: 'customers/9262111890/campaigns/1483704368',
      criterion_id: 1000,
      language: { language_constant: 'languageConstants/1000' },
      negative: false,
      resource_name: 'customers/9262111890/campaignCriteria/1483704368~1000',
      status: 2,
      type: 20,
    },
    language_constant: {
      code: 'en',
      id: 1000,
      name: 'My language constant',
      resource_name: 'languageConstants/1000',
      targetable: true,
    },
    campaign: {
      ad_serving_optimization_status: 2,
      advertising_channel_sub_type: 0,
      advertising_channel_type: 2,
      base_campaign: 'customers/9262111890/campaigns/1483704368',
      bidding_strategy_type: 9,
      campaign_budget: 'customers/9262111890/campaignBudgets/1547508174',
      end_date: '2037-12-30',
      experiment_type: 2,
      frequency_caps: [],
      geo_target_type_setting: { negative_geo_target_type: 4, positive_geo_target_type: 5 },
      id: 1483704368,
      labels: [],
      name: 'My campaign',
      network_settings: {
        target_content_network: false,
        target_google_search: true,
        target_partner_search_network: false,
        target_search_network: true,
      },
      payment_mode: 4,
      resource_name: 'customers/9262111890/campaigns/1483704368',
      serving_status: 2,
      start_date: '2018-07-23',
      status: 2,
      target_spend: { cpc_bid_ceiling_micros: 12000000 },
      url_custom_parameters: [],
      video_brand_safety_suitability: 0,
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
