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
      ad_group_id: 50083308391,
      cpc_bid_point_list: {
        points: [
          {
            cpcBidMicros: { value: 2450000 },
            biddableConversions: { value: 2.2953295707702637 },
            biddableConversionsValue: { value: 0 },
            clicks: { value: 7 },
            costMicros: { value: 12070000 },
            impressions: { value: 74 },
            topSlotImpressions: { value: 48 },
          },
          {
            cpcBidMicros: { value: 3320000 },
            biddableConversions: { value: 2.4626054763793945 },
            biddableConversionsValue: { value: 0 },
            clicks: { value: 7 },
            costMicros: { value: 16420000 },
            impressions: { value: 91 },
            topSlotImpressions: { value: 65 },
          },
          {
            cpcBidMicros: { value: 4160000 },
            biddableConversions: { value: 2.9506590366363525 },
            biddableConversionsValue: { value: 0 },
            clicks: { value: 8 },
            costMicros: { value: 24180000 },
            impressions: { value: 111 },
            topSlotImpressions: { value: 79 },
          },
          {
            cpcBidMicros: { value: 5380000 },
            biddableConversions: { value: 3.000000476837158 },
            biddableConversionsValue: { value: 0 },
            clicks: { value: 8 },
            costMicros: { value: 30050000 },
            impressions: { value: 132 },
            topSlotImpressions: { value: 91 },
          },
          {
            cpcBidMicros: { value: 7130000 },
            biddableConversions: { value: 3.000000476837158 },
            biddableConversionsValue: { value: 0 },
            clicks: { value: 8 },
            costMicros: { value: 35010000 },
            impressions: { value: 148 },
            topSlotImpressions: { value: 108 },
          },
          {
            cpcBidMicros: { value: 11200000 },
            biddableConversions: { value: 3.003927230834961 },
            biddableConversionsValue: { value: 0 },
            clicks: { value: 8 },
            costMicros: { value: 42280000 },
            impressions: { value: 169 },
            topSlotImpressions: { value: 137 },
          },
          {
            cpcBidMicros: { value: 227000000 },
            biddableConversions: { value: 3.3842053413391113 },
            biddableConversionsValue: { value: 0 },
            clicks: { value: 9 },
            costMicros: { value: 180350000 },
            impressions: { value: 180 },
            topSlotImpressions: { value: 170 },
          },
        ],
      },
      end_date: '2019-06-12',
      modification_method: 2,
      resource_name: 'customers/3827277046/adGroupSimulations/50083308391~CPC_BID~UNIFORM~20190606~20190612',
      start_date: '2019-06-06',
      type: 2,
    },
    ad_group: {
      base_ad_group: 'customers/3827277046/adGroups/50083308391',
      campaign: 'customers/3827277046/campaigns/954375723',
      cpc_bid_micros: 6000000,
      cpm_bid_micros: 10000,
      cpv_bid_micros: 0,
      effective_target_cpa_micros: 0,
      explorer_auto_optimizer_setting: { opt_in: false },
      id: 50083308391,
      name: 'My ad group',
      resource_name: 'customers/3827277046/adGroups/50083308391',
      status: 2,
      target_cpa_micros: 0,
      targeting_setting: {
        target_restrictions: [
          { targetingDimension: 3, bidOnly: { value: true } },
          { targetingDimension: 4, bidOnly: { value: false } },
          { targetingDimension: 5, bidOnly: { value: true } },
          { targetingDimension: 6, bidOnly: { value: true } },
          { targetingDimension: 7, bidOnly: { value: false } },
          { targetingDimension: 8, bidOnly: { value: true } },
          { targetingDimension: 9, bidOnly: { value: true } },
        ],
      },
      type: 2,
      url_custom_parameters: [],
    },
    campaign: {
      ad_serving_optimization_status: 5,
      advertising_channel_type: 2,
      base_campaign: 'customers/3827277046/campaigns/954375723',
      bidding_strategy_type: 3,
      campaign_budget: 'customers/3827277046/campaignBudgets/1234759433',
      end_date: '2037-12-30',
      experiment_type: 2,
      frequency_caps: [],
      geo_target_type_setting: { negative_geo_target_type: 2, positive_geo_target_type: 4 },
      id: 954375723,
      manual_cpc: { enhanced_cpc_enabled: true },
      name: 'My campaign',
      network_settings: {
        target_content_network: false,
        target_google_search: true,
        target_partner_search_network: false,
        target_search_network: false,
      },
      payment_mode: 4,
      resource_name: 'customers/3827277046/campaigns/954375723',
      selective_optimization: { conversion_actions: [] },
      serving_status: 2,
      start_date: '2017-10-13',
      status: 2,
      targeting_setting: { target_restrictions: [{ targetingDimension: 3, bidOnly: { value: false } }] },
      url_custom_parameters: [],
    },
    customer: {
      auto_tagging_enabled: true,
      call_reporting_setting: {
        call_conversion_action: 'customers/3827277046/conversionActions/179',
        call_conversion_reporting_enabled: true,
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
      tracking_url_template:
        '{lpurl}?utm_source=adwords&utm_medium=PPC&utm_campaign={campaignid}&utm_term={ifsearch:{keyword}}{ifcontent:{placement}}&utm_content={creative}&network={network}&adgroupid={adgroupid}&matchtype={matchtype}&adposition={adposition}&targetid={targetid}&target={target}&device={device}&devicemodel={devicemodel}',
    },
  },
]
```
