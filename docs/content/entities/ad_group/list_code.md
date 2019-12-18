---
type: list_code
entity: AdGroup
title: List AdGroup
order: 3.1
---

```javascript
// Listing all the adGroups in the account
let result = await customer.adGroups.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.adGroups.list({
  constraints: [
    {
      key: 'ad_group.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'ad_group.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    ad_group: {
      ad_rotation_mode: 0,
      base_ad_group: 'customers/9262111890/adGroups/60937781178',
      campaign: 'customers/9262111890/campaigns/1485014801',
      cpc_bid_micros: 1000000,
      cpm_bid_micros: 10000,
      cpv_bid_micros: 0,
      display_custom_bid_dimension: 0,
      effective_target_cpa_micros: 0,
      effective_target_cpa_source: 0,
      effective_target_roas_source: 0,
      id: 60937781178,
      labels: [],
      name: 'My ad group',
      resource_name: 'customers/9262111890/adGroups/60937781178',
      status: 4,
      target_cpa_micros: 0,
      targeting_setting: {
        target_restrictions: [
          { targeting_dimension: 5, bid_only: true },
          { targeting_dimension: 6, bid_only: true },
          { targeting_dimension: 8, bid_only: true },
          { targeting_dimension: 9, bid_only: true },
        ],
      },
      type: 2,
      url_custom_parameters: [],
    },
    campaign: {
      ad_serving_optimization_status: 2,
      advertising_channel_sub_type: 0,
      advertising_channel_type: 2,
      base_campaign: 'customers/9262111890/campaigns/1485014801',
      bidding_strategy_type: 9,
      campaign_budget: 'customers/9262111890/campaignBudgets/1548344372',
      end_date: '2037-12-30',
      experiment_type: 2,
      frequency_caps: [],
      geo_target_type_setting: { negative_geo_target_type: 4, positive_geo_target_type: 5 },
      id: 1485014801,
      labels: [],
      name: 'My campaign',
      network_settings: {
        target_content_network: true,
        target_google_search: true,
        target_partner_search_network: false,
        target_search_network: true,
      },
      payment_mode: 4,
      resource_name: 'customers/9262111890/campaigns/1485014801',
      serving_status: 2,
      start_date: '2018-07-24',
      status: 2,
      target_spend: { cpc_bid_ceiling_micros: 1000000 },
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
