---
type: list_code
entity: AdGroupSimulation
title: List AdGroupSimulation
order: 3.1
---

```javascript
// Listing all the adGroupSimulations in the account
let result = await customer.adGroupSimulations.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.adGroupSimulations.list({
  constraints: [
    {
      key: 'ad_group_simulation.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'ad_group_simulation.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    ad_group_simulation: {
      ad_group_id: 98147776220,
      end_date: '2020-03-25',
      modification_method: 2,
      resource_name: 'customers/3827277046/adGroupSimulations/98147776220~TARGET_CPA~UNIFORM~20200319~20200325',
      start_date: '2020-03-19',
      target_cpa_point_list: {
        points: [
          {
            target_cpa_micros: 660000,
            biddable_conversions: 0,
            biddable_conversions_value: 0,
            clicks: 132,
            cost_micros: 33300000,
            impressions: 28134,
            top_slot_impressions: 0,
          },
          {
            target_cpa_micros: 990000,
            biddable_conversions: 0,
            biddable_conversions_value: 0,
            clicks: 152,
            cost_micros: 46400000,
            impressions: 37350,
            top_slot_impressions: 0,
          },
          {
            target_cpa_micros: 1320000,
            biddable_conversions: 0,
            biddable_conversions_value: 0,
            clicks: 168,
            cost_micros: 58700000,
            impressions: 45667,
            top_slot_impressions: 0,
          },
          {
            target_cpa_micros: 1650000,
            biddable_conversions: 0,
            biddable_conversions_value: 0,
            clicks: 182,
            cost_micros: 70500000,
            impressions: 53373,
            top_slot_impressions: 0,
          },
          {
            target_cpa_micros: 1980000,
            biddable_conversions: 0,
            biddable_conversions_value: 0,
            clicks: 194,
            cost_micros: 81900000,
            impressions: 60626,
            top_slot_impressions: 0,
          },
          {
            target_cpa_micros: 2310000,
            biddable_conversions: 0,
            biddable_conversions_value: 0,
            clicks: 205,
            cost_micros: 92900000,
            impressions: 67522,
            top_slot_impressions: 0,
          },
          {
            target_cpa_micros: 2640000,
            biddable_conversions: 0,
            biddable_conversions_value: 0,
            clicks: 215,
            cost_micros: 104000000,
            impressions: 74126,
            top_slot_impressions: 0,
          },
        ],
      },
      type: 4,
    },
    ad_group: {
      ad_rotation_mode: 3,
      base_ad_group: 'customers/3827277046/adGroups/98147776220',
      campaign: 'customers/3827277046/campaigns/9531537070',
      cpc_bid_micros: 1000000,
      cpm_bid_micros: 10000,
      cpv_bid_micros: 0,
      display_custom_bid_dimension: 0,
      effective_target_cpa_micros: 1320000,
      effective_target_cpa_source: 6,
      effective_target_roas_source: 0,
      explorer_auto_optimizer_setting: { opt_in: false },
      id: 98147776220,
      labels: [],
      name: 'My ad group',
      resource_name: 'customers/3827277046/adGroups/98147776220',
      status: 2,
      target_cpa_micros: 1320000,
      target_cpm_micros: 10000,
      targeting_setting: {
        target_restrictions: [
          { targeting_dimension: 3, bid_only: false },
          { targeting_dimension: 4, bid_only: false },
          { targeting_dimension: 7, bid_only: false },
        ],
      },
      type: 3,
      url_custom_parameters: [],
    },
    campaign: {
      ad_serving_optimization_status: 5,
      advertising_channel_sub_type: 0,
      advertising_channel_type: 3,
      base_campaign: 'customers/3827277046/campaigns/9531537070',
      bidding_strategy_type: 6,
      campaign_budget: 'customers/3827277046/campaignBudgets/6842094840',
      end_date: '2037-12-30',
      experiment_type: 2,
      frequency_caps: [{ key: { level: 4, event_type: 2, time_unit: 2, time_length: 1 }, cap: 1 }],
      geo_target_type_setting: { negative_geo_target_type: 4, positive_geo_target_type: 5 },
      id: 9531537070,
      labels: [],
      name: 'My campaign',
      network_settings: {
        target_content_network: true,
        target_google_search: false,
        target_partner_search_network: false,
        target_search_network: false,
      },
      payment_mode: 4,
      resource_name: 'customers/3827277046/campaigns/9531537070',
      serving_status: 2,
      start_date: '2020-02-28',
      status: 2,
      target_cpa: { target_cpa_micros: 2080000 },
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
