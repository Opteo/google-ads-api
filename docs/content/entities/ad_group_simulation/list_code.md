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
      ad_group_id: 74343279514,
      cpc_bid_point_list: {
        points: [
          {
            cpcBidMicros: 850000,
            biddableConversions: 0.6467771530151367,
            biddableConversionsValue: 631.013916015625,
            clicks: 1,
            costMicros: 650000,
            impressions: 33,
            topSlotImpressions: 20,
          },
          {
            cpcBidMicros: 1180000,
            biddableConversions: 1.145405888557434,
            biddableConversionsValue: 1117.4901123046875,
            clicks: 4,
            costMicros: 3610000,
            impressions: 41,
            topSlotImpressions: 30,
          },
          {
            cpcBidMicros: 1750000,
            biddableConversions: 1.145405888557434,
            biddableConversionsValue: 1117.4901123046875,
            clicks: 4,
            costMicros: 4110000,
            impressions: 47,
            topSlotImpressions: 43,
          },
          {
            cpcBidMicros: 3850000,
            biddableConversions: 1.1888701915740967,
            biddableConversionsValue: 1159.8951416015625,
            clicks: 4,
            costMicros: 4970000,
            impressions: 57,
            topSlotImpressions: 52,
          },
          {
            cpcBidMicros: 8530000,
            biddableConversions: 1.3281930685043335,
            biddableConversionsValue: 1295.8223876953125,
            clicks: 5,
            costMicros: 27150000,
            impressions: 66,
            topSlotImpressions: 61,
          },
          {
            cpcBidMicros: 11400000,
            biddableConversions: 1.3300000429153442,
            biddableConversionsValue: 1297.5853271484375,
            clicks: 5,
            costMicros: 29080000,
            impressions: 78,
            topSlotImpressions: 64,
          },
        ],
      },
      end_date: '2019-07-04',
      modification_method: 2,
      resource_name: 'customers/3827277046/adGroupSimulations/74343279514~CPC_BID~UNIFORM~20190628~20190704',
      start_date: '2019-06-28',
      type: 2,
    },
    ad_group: {
      base_ad_group: 'customers/3827277046/adGroups/74343279514',
      campaign: 'customers/3827277046/campaigns/2015922402',
      cpc_bid_micros: 200000000,
      cpm_bid_micros: 10000000,
      cpv_bid_micros: 0,
      effective_target_cpa_micros: 0,
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
          { targetingDimension: 3, bidOnly: true },
          { targetingDimension: 4, bidOnly: false },
          { targetingDimension: 5, bidOnly: true },
          { targetingDimension: 6, bidOnly: true },
          { targetingDimension: 7, bidOnly: false },
          { targetingDimension: 8, bidOnly: true },
          { targetingDimension: 9, bidOnly: true },
        ],
      },
      type: 2,
      url_custom_parameters: [],
    },
    campaign: {
      ad_serving_optimization_status: 2,
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
      selective_optimization: { conversion_actions: [] },
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
