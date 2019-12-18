---
type: list_code
entity: CampaignCriterionSimulation
title: List CampaignCriterionSimulation
order: 3.1
---

```javascript
// Listing all the campaignCriterionSimulations in the account
let result = await customer.campaignCriterionSimulations.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.campaignCriterionSimulations.list({
  constraints: [
    {
      key: 'campaign_criterion_simulation.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'campaign_criterion_simulation.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    campaign_criterion_simulation: {
      bid_modifier_point_list: {
        points: [
          {
            bid_modifier: 0.1,
            biddable_conversions: 0.6309400796890259,
            biddable_conversions_value: 3.6684248447418213,
            clicks: 4,
            cost_micros: 1570000,
            impressions: 25,
            top_slot_impressions: 22,
            parent_biddable_conversions: 0.6309400796890259,
            parent_biddable_conversions_value: 3.668425079584553,
            parent_clicks: 45,
            parent_cost_micros: 180750000,
            parent_impressions: 274,
            parent_top_slot_impressions: 269,
            parent_required_budget_micros: 48920000,
          },
          {
            bid_modifier: 1,
            biddable_conversions: 1.9999998807907104,
            biddable_conversions_value: 8.110611915588379,
            clicks: 10,
            cost_micros: 49900000,
            impressions: 36,
            top_slot_impressions: 36,
            parent_biddable_conversions: 1.9999998807907104,
            parent_biddable_conversions_value: 8.11061215043111,
            parent_clicks: 51,
            parent_cost_micros: 229080000,
            parent_impressions: 285,
            parent_top_slot_impressions: 283,
            parent_required_budget_micros: 50570000,
          },
          {
            bid_modifier: 3.22,
            biddable_conversions: 2.920870304107666,
            biddable_conversions_value: 8.110611915588379,
            clicks: 11,
            cost_micros: 112310000,
            impressions: 36,
            top_slot_impressions: 36,
            parent_biddable_conversions: 2.920870304107666,
            parent_biddable_conversions_value: 8.11061215043111,
            parent_clicks: 52,
            parent_cost_micros: 291490000,
            parent_impressions: 285,
            parent_top_slot_impressions: 283,
            parent_required_budget_micros: 100850000,
          },
        ],
      },
      campaign_id: 2015922402,
      criterion_id: 30001,
      end_date: '2019-12-16',
      modification_method: 2,
      resource_name:
        'customers/3827277046/campaignCriterionSimulations/2015922402~30001~BID_MODIFIER~UNIFORM~20191210~20191216',
      start_date: '2019-12-10',
      type: 5,
    },
    campaign_criterion: {
      campaign: 'customers/3827277046/campaigns/2015922402',
      criterion_id: 30001,
      device: { type: 2 },
      negative: false,
      resource_name: 'customers/3827277046/campaignCriteria/2015922402~30001',
      status: 2,
      type: 6,
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
