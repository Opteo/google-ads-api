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
      ad_group_id: 77057369032,
      cpc_bid_point_list: {
        points: [
          {
            cpc_bid_micros: 2750000,
            biddable_conversions: 0,
            biddable_conversions_value: 0,
            clicks: 2,
            cost_micros: 1680000,
            impressions: 116,
            top_slot_impressions: 94,
          },
          {
            cpc_bid_micros: 3000000,
            biddable_conversions: 0,
            biddable_conversions_value: 0,
            clicks: 2,
            cost_micros: 5740000,
            impressions: 144,
            top_slot_impressions: 113,
          },
          {
            cpc_bid_micros: 3110000,
            biddable_conversions: 0,
            biddable_conversions_value: 0,
            clicks: 3,
            cost_micros: 10800000,
            impressions: 168,
            top_slot_impressions: 131,
          },
          {
            cpc_bid_micros: 4070000,
            biddable_conversions: 0,
            biddable_conversions_value: 0,
            clicks: 3,
            cost_micros: 15350000,
            impressions: 192,
            top_slot_impressions: 154,
          },
          {
            cpc_bid_micros: 5030000,
            biddable_conversions: 0,
            biddable_conversions_value: 0,
            clicks: 4,
            cost_micros: 22940000,
            impressions: 212,
            top_slot_impressions: 182,
          },
          {
            cpc_bid_micros: 6310000,
            biddable_conversions: 0,
            biddable_conversions_value: 0,
            clicks: 5,
            cost_micros: 38520000,
            impressions: 232,
            top_slot_impressions: 208,
          },
          {
            cpc_bid_micros: 9060000,
            biddable_conversions: 0,
            biddable_conversions_value: 0,
            clicks: 5,
            cost_micros: 50360000,
            impressions: 237,
            top_slot_impressions: 220,
          },
        ],
      },
      criterion_id: 391658604416,
      end_date: '2020-07-17',
      modification_method: 2,
      resource_name:
        'customers/3827277046/adGroupCriterionSimulations/77057369032~391658604416~CPC_BID~UNIFORM~20200711~20200717',
      start_date: '2020-07-11',
      type: 2,
    },
    ad_group_criterion: {
      ad_group: 'customers/3827277046/adGroups/77057369032',
      approval_status: 2,
      criterion_id: 391658604416,
      disapproval_reasons: [],
      effective_cpc_bid_micros: 6310000,
      effective_cpc_bid_source: 6,
      effective_cpm_bid_micros: 10000000,
      effective_cpm_bid_source: 6,
      effective_cpv_bid_source: 0,
      effective_percent_cpc_bid_source: 0,
      final_mobile_urls: [],
      final_urls: [],
      keyword: { match_type: 4, text: '+google +ads +optimization' },
      negative: false,
      position_estimates: {
        estimated_add_clicks_at_first_position_cpc: -3,
        estimated_add_cost_at_first_position_cpc: -34860000,
        first_page_cpc_micros: 1470000,
        first_position_cpc_micros: 1470000,
        top_of_page_cpc_micros: 1470000,
      },
      quality_info: {
        creative_quality_score: 4,
        post_click_quality_score: 3,
        quality_score: 5,
        search_predicted_ctr: 2,
      },
      resource_name: 'customers/3827277046/adGroupCriteria/77057369032~391658604416',
      status: 2,
      system_serving_status: 2,
      type: 2,
      url_custom_parameters: [],
    },
    ad_group: {
      ad_rotation_mode: 0,
      base_ad_group: 'customers/3827277046/adGroups/77057369032',
      campaign: 'customers/3827277046/campaigns/2081620945',
      cpc_bid_micros: 6310000,
      cpm_bid_micros: 10000000,
      cpv_bid_micros: 0,
      display_custom_bid_dimension: 0,
      effective_target_cpa_micros: 12000000,
      effective_target_cpa_source: 6,
      effective_target_roas_source: 0,
      explorer_auto_optimizer_setting: { opt_in: false },
      id: 77057369032,
      labels: [],
      name: 'My ad group',
      resource_name: 'customers/3827277046/adGroups/77057369032',
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
      bidding_strategy_type: 3,
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
      manual_cpc: { enhanced_cpc_enabled: true },
      name: 'My campaign',
      network_settings: {
        target_content_network: false,
        target_google_search: true,
        target_partner_search_network: false,
        target_search_network: false,
      },
      optimization_score: 0.7376711477461586,
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
