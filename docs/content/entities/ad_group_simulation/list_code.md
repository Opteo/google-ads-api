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
      ad_group_id: 77057363752,
      cpc_bid_point_list: {
        points: [
          {
            cpc_bid_micros: 1820000,
            biddable_conversions: 0,
            biddable_conversions_value: 0,
            clicks: 7,
            cost_micros: 10540000,
            impressions: 151,
            top_slot_impressions: 103,
          },
          {
            cpc_bid_micros: 1910000,
            biddable_conversions: 0,
            biddable_conversions_value: 0,
            clicks: 9,
            cost_micros: 16740000,
            impressions: 187,
            top_slot_impressions: 138,
          },
          {
            cpc_bid_micros: 3830000,
            biddable_conversions: 0,
            biddable_conversions_value: 0,
            clicks: 13,
            cost_micros: 32520000,
            impressions: 218,
            top_slot_impressions: 170,
          },
          {
            cpc_bid_micros: 4610000,
            biddable_conversions: 0,
            biddable_conversions_value: 0,
            clicks: 16,
            cost_micros: 53450000,
            impressions: 250,
            top_slot_impressions: 200,
          },
          {
            cpc_bid_micros: 5500000,
            biddable_conversions: 0,
            biddable_conversions_value: 0,
            clicks: 17,
            cost_micros: 66370000,
            impressions: 280,
            top_slot_impressions: 233,
          },
          {
            cpc_bid_micros: 9600000,
            biddable_conversions: 0,
            biddable_conversions_value: 0,
            clicks: 19,
            cost_micros: 127600000,
            impressions: 299,
            top_slot_impressions: 276,
          },
          {
            cpc_bid_micros: 11750000,
            biddable_conversions: 0,
            biddable_conversions_value: 0,
            clicks: 20,
            cost_micros: 153720000,
            impressions: 304,
            top_slot_impressions: 281,
          },
        ],
      },
      end_date: '2020-07-17',
      modification_method: 2,
      resource_name: 'customers/3827277046/adGroupSimulations/77057363752~CPC_BID~UNIFORM~20200711~20200717',
      start_date: '2020-07-11',
      type: 2,
    },
    ad_group: {
      ad_rotation_mode: 0,
      base_ad_group: 'customers/3827277046/adGroups/77057363752',
      campaign: 'customers/3827277046/campaigns/2081620948',
      cpc_bid_micros: 9600000,
      cpm_bid_micros: 10000000,
      cpv_bid_micros: 0,
      display_custom_bid_dimension: 0,
      effective_target_cpa_micros: 12000000,
      effective_target_cpa_source: 6,
      effective_target_roas_source: 0,
      explorer_auto_optimizer_setting: { opt_in: false },
      id: 77057363752,
      labels: [],
      name: 'My ad group',
      resource_name: 'customers/3827277046/adGroups/77057363752',
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
