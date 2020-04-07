---
type: list_code
entity: AdGroupCriterionSimulation
title: List AdGroupCriterionSimulation
order: 3.1
---

```javascript
// Listing all the adGroupCriterionSimulations in the account
let result = await customer.adGroupCriterionSimulations.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.adGroupCriterionSimulations.list({
  constraints: [
    {
      key: 'ad_group_criterion_simulation.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'ad_group_criterion_simulation.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    ad_group_criterion_simulation: {
      ad_group_id: 74343279514,
      cpc_bid_point_list: {
        points: [
          {
            cpc_bid_micros: 1300000,
            biddable_conversions: 0,
            biddable_conversions_value: 0,
            clicks: 4,
            cost_micros: 2990000,
            impressions: 24,
            top_slot_impressions: 21,
          },
          {
            cpc_bid_micros: 1540000,
            biddable_conversions: 0,
            biddable_conversions_value: 0,
            clicks: 5,
            cost_micros: 4430000,
            impressions: 29,
            top_slot_impressions: 26,
          },
          {
            cpc_bid_micros: 1770000,
            biddable_conversions: 0,
            biddable_conversions_value: 0,
            clicks: 5,
            cost_micros: 4640000,
            impressions: 35,
            top_slot_impressions: 30,
          },
          {
            cpc_bid_micros: 3990000,
            biddable_conversions: 0,
            biddable_conversions_value: 0,
            clicks: 10,
            cost_micros: 22530000,
            impressions: 47,
            top_slot_impressions: 43,
          },
          {
            cpc_bid_micros: 6400000,
            biddable_conversions: 0,
            biddable_conversions_value: 0,
            clicks: 11,
            cost_micros: 43680000,
            impressions: 52,
            top_slot_impressions: 49,
          },
        ],
      },
      criterion_id: 310015189818,
      end_date: '2019-12-16',
      modification_method: 2,
      resource_name:
        'customers/3827277046/adGroupCriterionSimulations/74343279514~310015189818~CPC_BID~UNIFORM~20191210~20191216',
      start_date: '2019-12-10',
      type: 2,
    },
    ad_group_criterion: {
      ad_group: 'customers/3827277046/adGroups/74343279514',
      approval_status: 2,
      cpc_bid_micros: 5450000,
      criterion_id: 310015189818,
      effective_cpc_bid_micros: 5450000,
      effective_cpc_bid_source: 7,
      effective_cpm_bid_micros: 10000000,
      effective_cpm_bid_source: 6,
      effective_cpv_bid_source: 0,
      effective_percent_cpc_bid_source: 0,
      final_mobile_urls: [],
      final_urls: [],
      keyword: { match_type: 3, text: 'opteo' },
      negative: false,
      position_estimates: {
        estimated_add_clicks_at_first_position_cpc: -5,
        estimated_add_cost_at_first_position_cpc: -18700000,
        first_page_cpc_micros: 490000,
        first_position_cpc_micros: 1480000,
        top_of_page_cpc_micros: 490000,
      },
      quality_info: {
        creative_quality_score: 4,
        post_click_quality_score: 4,
        quality_score: 7,
        search_predicted_ctr: 2,
      },
      resource_name: 'customers/3827277046/adGroupCriteria/74343279514~310015189818',
      status: 2,
      system_serving_status: 2,
      type: 2,
      url_custom_parameters: [],
    },
    ad_group: {
      ad_rotation_mode: 0,
      base_ad_group: 'customers/3827277046/adGroups/74343279514',
      campaign: 'customers/3827277046/campaigns/2015922402',
      cpc_bid_micros: 200000000,
      cpm_bid_micros: 10000000,
      cpv_bid_micros: 0,
      display_custom_bid_dimension: 0,
      effective_target_cpa_micros: 0,
      effective_target_cpa_source: 0,
      effective_target_roas_source: 0,
      explorer_auto_optimizer_setting: { opt_in: false },
      id: 74343279514,
      labels: [],
      name: 'My ad group',
      resource_name: 'customers/3827277046/adGroups/74343279514',
      status: 2,
      target_cpa_micros: 0,
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
      base_campaign: 'customers/3827277046/campaigns/2015922402',
      bidding_strategy: 'customers/3827277046/biddingStrategies/2039955526',
      bidding_strategy_type: 15,
      campaign_budget: 'customers/3827277046/campaignBudgets/2079279759',
      end_date: '2037-12-30',
      experiment_type: 2,
      frequency_caps: [],
      geo_target_type_setting: { negative_geo_target_type: 5, positive_geo_target_type: 7 },
      id: 2015922402,
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
      resource_name: 'customers/3827277046/campaigns/2015922402',
      serving_status: 2,
      start_date: '2019-06-06',
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
        'https://w.opteo.co/workers/parallel?url={lpurl}&domain_id=123443&campaign_id={campaignid}&adgroup_id={adgroupid}&matchtype={matchtype}&network={network}&device={device}',
    },
  },
]
```
