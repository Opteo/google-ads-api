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
      ad_group: 'customers/3827277046/adGroups/77057363272',
      campaign: 'customers/3827277046/campaigns/2081620948',
      campaign_budget: 'customers/3827277046/campaignBudgets/6449346162',
      dismissed: false,
      impact: {
        base_metrics: { clicks: 2, cost_micros: 20460000, impressions: 12 },
        potential_metrics: { clicks: 4, conversions: 0.05, cost_micros: 36006832, impressions: 110 },
      },
      keyword_recommendation: {
        keyword: { match_type: 2, text: 'google adwords management' },
        recommended_cpc_bid_micros: 9600000,
      },
      resource_name:
        'customers/3827277046/recommendations/MTk5MDY3NzIzLTE2My0xNTk1MTg1NjIwMDAwLSsyMDgxNjIwOTQ4LTc3MDU3MzYzMjcyLTIyNzkzMTg2Nzk5NTk5NTgxOTU',
      type: 3,
    },
    campaign_budget: {
      amount_micros: 290000000,
      delivery_method: 2,
      explicitly_shared: false,
      has_recommended_budget: false,
      id: 6449346162,
      name: 'My campaign budget',
      period: 2,
      reference_count: 1,
      resource_name: 'customers/3827277046/campaignBudgets/6449346162',
      status: 2,
      type: 2,
    },
    ad_group: {
      ad_rotation_mode: 0,
      base_ad_group: 'customers/3827277046/adGroups/77057363272',
      campaign: 'customers/3827277046/campaigns/2081620948',
      cpc_bid_micros: 9600000,
      cpm_bid_micros: 10000000,
      cpv_bid_micros: 0,
      display_custom_bid_dimension: 0,
      effective_target_cpa_micros: 12000000,
      effective_target_cpa_source: 6,
      effective_target_roas_source: 0,
      explorer_auto_optimizer_setting: { opt_in: false },
      id: 77057363272,
      labels: [],
      name: 'My ad group',
      resource_name: 'customers/3827277046/adGroups/77057363272',
      status: 2,
      target_cpa_micros: 12000000,
      target_cpm_micros: 10000000,
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
      base_campaign: 'customers/3827277046/campaigns/2081620948',
      bidding_strategy_type: 3,
      campaign_budget: 'customers/3827277046/campaignBudgets/6449346162',
      end_date: '2037-12-30',
      experiment_type: 2,
      frequency_caps: [],
      geo_target_type_setting: { negative_geo_target_type: 5, positive_geo_target_type: 7 },
      id: 2081620948,
      labels: [
        'customers/3827277046/labels/3889728216',
        'customers/3827277046/labels/3889728468',
        'customers/3827277046/labels/3889728480',
      ],
      manual_cpc: { enhanced_cpc_enabled: true },
      name: 'My campaign',
      network_settings: {
        target_content_network: false,
        target_google_search: true,
        target_partner_search_network: false,
        target_search_network: false,
      },
      optimization_score: 0.8309262174345264,
      payment_mode: 4,
      resource_name: 'customers/3827277046/campaigns/2081620948',
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
