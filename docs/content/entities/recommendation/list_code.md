---
type: list_code
entity: Recommendation
title: List Recommendation
order: 3.1
---

```javascript
// Listing all the recommendations in the account
let result = await customer.recommendations.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.recommendations.list({
  constraints: [
    {
      key: 'recommendation.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'recommendation.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    recommendation: {
      campaign: 'customers/3827277046/campaigns/2015922405',
      campaign_budget: 'customers/3827277046/campaignBudgets/2079279762',
      dismissed: true,
      resource_name: 'customers/3827277046/recommendations/MTk5MDY3NzIzLTExNS0xNTYyNTQwMjkyOTMzLSsyMDE1OTIyNDA1',
      type: 8,
    },
    campaign_budget: {
      amount_micros: 200000000,
      delivery_method: 2,
      explicitly_shared: false,
      has_recommended_budget: true,
      id: 2079279762,
      name: 'My campaign budget',
      period: 2,
      recommended_budget_amount_micros: 590000000,
      recommended_budget_estimated_change_weekly_clicks: 27,
      recommended_budget_estimated_change_weekly_cost_micros: 1079755974,
      reference_count: 1,
      resource_name: 'customers/3827277046/campaignBudgets/2079279762',
      status: 2,
      type: 2,
    },
    ad_group: {
      campaign: 'customers/3827277046/campaigns/2015922405',
      id: 0,
      labels: [],
      resource_name: '',
      url_custom_parameters: [],
    },
    campaign: {
      ad_serving_optimization_status: 2,
      advertising_channel_type: 2,
      base_campaign: 'customers/3827277046/campaigns/2015922405',
      bidding_strategy: 'customers/3827277046/biddingStrategies/2059414914',
      bidding_strategy_type: 8,
      campaign_budget: 'customers/3827277046/campaignBudgets/2079279762',
      end_date: '2037-12-30',
      experiment_type: 2,
      frequency_caps: [],
      geo_target_type_setting: { negative_geo_target_type: 5, positive_geo_target_type: 7 },
      id: 2015922405,
      labels: [
        'customers/3827277046/labels/3889728216',
        'customers/3827277046/labels/3889728468',
        'customers/3827277046/labels/3889728480',
      ],
      name: 'My campaign',
      network_settings: {
        target_content_network: false,
        target_google_search: true,
        target_partner_search_network: false,
        target_search_network: false,
      },
      payment_mode: 4,
      resource_name: 'customers/3827277046/campaigns/2015922405',
      selective_optimization: {
        conversion_actions: [
          'customers/3827277046/conversionActions/229107485',
          'customers/3827277046/conversionActions/229185834',
          'customers/3827277046/conversionActions/293167358',
          'customers/3827277046/conversionActions/342113731',
          'customers/3827277046/conversionActions/342113884',
          'customers/3827277046/conversionActions/342113890',
          'customers/3827277046/conversionActions/342113896',
        ],
      },
      serving_status: 2,
      start_date: '2019-06-06',
      status: 2,
      targeting_setting: { target_restrictions: [{ targetingDimension: 3, bidOnly: true }] },
      url_custom_parameters: [],
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
      has_partners_badge: false,
      id: 3827277046,
      manager: false,
      pay_per_conversion_eligibility_failure_reasons: [5],
      remarketing_setting: {
        google_global_site_tag:
          "<!-- Global site tag (gtag.js) - Google Ads: 875176189 -->\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=AW-875176189\"></script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'AW-875176189');\n</script>\n",
      },
      resource_name: 'customers/3827277046',
      test_account: false,
      time_zone: 'Europe/London',
    },
  },
]
```
