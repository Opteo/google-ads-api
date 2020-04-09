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
      ad_group: 'customers/3827277046/adGroups/77057364872',
      campaign: 'customers/3827277046/campaigns/2081620945',
      campaign_budget: 'customers/3827277046/campaignBudgets/6449346159',
      dismissed: false,
      impact: {
        base_metrics: { clicks: 1, cost_micros: 7730000, impressions: 2 },
        potential_metrics: { clicks: 1, conversions: 0.3, cost_micros: 7730000, impressions: 15 },
      },
      keyword_recommendation: { keyword: { match_type: 3, text: 'google adwords performance report' } },
      resource_name:
        'customers/3827277046/recommendations/MTk5MDY3NzIzLTE2My0xNTg1NzI5MTA1MDAwLSsyMDgxNjIwOTQ1LTc3MDU3MzY0ODcyLTEyMjQ0NDA0MTU3NDEyNjU0MDg',
      type: 3,
    },
    campaign_budget: {
      amount_micros: 200000000,
      delivery_method: 2,
      explicitly_shared: false,
      has_recommended_budget: false,
      id: 6449346159,
      name: 'My campaign budget',
      period: 2,
      reference_count: 1,
      resource_name: 'customers/3827277046/campaignBudgets/6449346159',
      status: 2,
      type: 2,
    },
    ad_group: {
      ad_rotation_mode: 0,
      base_ad_group: 'customers/3827277046/adGroups/77057364872',
      campaign: 'customers/3827277046/campaigns/2081620945',
      cpc_bid_micros: 6310000,
      cpm_bid_micros: 10000000,
      cpv_bid_micros: 0,
      display_custom_bid_dimension: 0,
      effective_target_cpa_micros: 12000000,
      effective_target_cpa_source: 6,
      effective_target_roas_source: 0,
      explorer_auto_optimizer_setting: { opt_in: false },
      id: 77057364872,
      labels: [],
      name: 'My ad group',
      resource_name: 'customers/3827277046/adGroups/77057364872',
      status: 2,
      target_cpa_micros: 12000000,
      target_cpm_micros: 10000,
      targeting_setting: {
        target_restrictions: [
          { targeting_dimension: 3, bid_only: true },
          { targeting_dimension: 4, bid_only: false },
          { targeting_dimension: 5, bid_only: true },
          { targeting_dimension: 6, bid_only: true },
          { targeting_dimension: 7, bid_only: false },
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
      base_campaign: 'customers/3827277046/campaigns/2081620945',
      bidding_strategy: 'customers/3827277046/biddingStrategies/2087814126',
      bidding_strategy_type: 6,
      campaign_budget: 'customers/3827277046/campaignBudgets/6449346159',
      end_date: '2037-12-30',
      experiment_type: 2,
      frequency_caps: [],
      geo_target_type_setting: { negative_geo_target_type: 5, positive_geo_target_type: 7 },
      id: 2081620945,
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
      resource_name: 'customers/3827277046/campaigns/2081620945',
      serving_status: 2,
      start_date: '2019-07-30',
      status: 2,
      targeting_setting: { target_restrictions: [{ targeting_dimension: 3, bid_only: true }] },
      url_custom_parameters: [],
      video_brand_safety_suitability: 0,
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
        'https://w.opteo.co/workers/parallel?url={lpurl}&domain_id=123443&campaign_id={campaignid}&adgroup_id={adgroupid}&matchtype={matchtype}&network={network}&device={device}&keyword={keyword}&targetid={targetid}',
    },
  },
]
```
