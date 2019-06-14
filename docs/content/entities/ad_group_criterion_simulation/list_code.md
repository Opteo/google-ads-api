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
      ad_group_id: 74343275914,
      cpc_bid_point_list: {
        points: [
          {
            cpcBidMicros: { value: 9470000 },
            biddableConversions: { value: 3.6276609897613525 },
            biddableConversionsValue: { value: 0 },
            clicks: { value: 10 },
            costMicros: { value: 57360000 },
            impressions: { value: 586 },
            topSlotImpressions: { value: 373 },
          },
          {
            cpcBidMicros: { value: 11100000 },
            biddableConversions: { value: 3.8657989501953125 },
            biddableConversionsValue: { value: 0 },
            clicks: { value: 11 },
            costMicros: { value: 62450000 },
            impressions: { value: 703 },
            topSlotImpressions: { value: 490 },
          },
          {
            cpcBidMicros: { value: 13100000 },
            biddableConversions: { value: 4.129766464233398 },
            biddableConversionsValue: { value: 0 },
            clicks: { value: 12 },
            costMicros: { value: 77920000 },
            impressions: { value: 831 },
            topSlotImpressions: { value: 592 },
          },
          {
            cpcBidMicros: { value: 15900000 },
            biddableConversions: { value: 4.698602676391602 },
            biddableConversionsValue: { value: 0 },
            clicks: { value: 14 },
            costMicros: { value: 114690000 },
            impressions: { value: 949 },
            topSlotImpressions: { value: 704 },
          },
          {
            cpcBidMicros: { value: 19600000 },
            biddableConversions: { value: 4.783834934234619 },
            biddableConversionsValue: { value: 0 },
            clicks: { value: 14 },
            costMicros: { value: 152010000 },
            impressions: { value: 1090 },
            topSlotImpressions: { value: 794 },
          },
          {
            cpcBidMicros: { value: 26930000 },
            biddableConversions: { value: 5.037846088409424 },
            biddableConversionsValue: { value: 0 },
            clicks: { value: 15 },
            costMicros: { value: 219200000 },
            impressions: { value: 1168 },
            topSlotImpressions: { value: 946 },
          },
          {
            cpcBidMicros: { value: 270000000 },
            biddableConversions: { value: 5.839343070983887 },
            biddableConversionsValue: { value: 0 },
            clicks: { value: 17 },
            costMicros: { value: 949300000 },
            impressions: { value: 1199 },
            topSlotImpressions: { value: 1125 },
          },
        ],
      },
      criterion_id: 19062466732,
      end_date: '2019-06-12',
      modification_method: 2,
      resource_name:
        'customers/3827277046/adGroupCriterionSimulations/74343275914~19062466732~CPC_BID~UNIFORM~20190606~20190612',
      start_date: '2019-06-06',
      type: 2,
    },
    ad_group_criterion: {
      ad_group: 'customers/3827277046/adGroups/74343275914',
      approval_status: 2,
      criterion_id: 19062466732,
      effective_cpc_bid_micros: 22280000,
      effective_cpc_bid_source: 6,
      effective_cpm_bid_micros: 10000000,
      effective_cpm_bid_source: 6,
      final_mobile_urls: [],
      final_urls: [],
      keyword: { match_type: 4, text: '+adwords +tool' },
      negative: false,
      position_estimates: {
        estimated_add_clicks_at_first_position_cpc: -1,
        estimated_add_cost_at_first_position_cpc: -101330000,
        first_page_cpc_micros: 3960000,
        first_position_cpc_micros: 16500000,
        top_of_page_cpc_micros: 9410000,
      },
      quality_info: {
        creative_quality_score: 4,
        post_click_quality_score: 2,
        quality_score: 3,
        search_predicted_ctr: 2,
      },
      resource_name: 'customers/3827277046/adGroupCriteria/74343275914~19062466732',
      status: 2,
      system_serving_status: 2,
      type: 2,
      url_custom_parameters: [],
    },
    ad_group: {
      base_ad_group: 'customers/3827277046/adGroups/74343275914',
      campaign: 'customers/3827277046/campaigns/2015922405',
      cpc_bid_micros: 22280000,
      cpm_bid_micros: 10000000,
      cpv_bid_micros: 0,
      effective_target_cpa_micros: 0,
      explorer_auto_optimizer_setting: { opt_in: false },
      id: 74343275914,
      name: 'My ad group',
      resource_name: 'customers/3827277046/adGroups/74343275914',
      status: 2,
      target_cpa_micros: 0,
      target_cpm_micros: 10000,
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
      ad_serving_optimization_status: 2,
      advertising_channel_type: 2,
      base_campaign: 'customers/3827277046/campaigns/2015922405',
      bidding_strategy: 'customers/3827277046/biddingStrategies/2040520512',
      bidding_strategy_type: 9,
      campaign_budget: 'customers/3827277046/campaignBudgets/2079279762',
      end_date: '2037-12-30',
      experiment_type: 2,
      frequency_caps: [],
      geo_target_type_setting: { negative_geo_target_type: 3, positive_geo_target_type: 4 },
      id: 2015922405,
      name: 'My campaign',
      network_settings: {
        target_content_network: false,
        target_google_search: true,
        target_partner_search_network: false,
        target_search_network: false,
      },
      payment_mode: 4,
      resource_name: 'customers/3827277046/campaigns/2015922405',
      selective_optimization: { conversion_actions: [] },
      serving_status: 2,
      start_date: '2019-06-06',
      status: 2,
      targeting_setting: { target_restrictions: [{ targetingDimension: 3, bidOnly: { value: true } }] },
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
