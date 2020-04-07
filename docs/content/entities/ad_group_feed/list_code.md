---
type: list_code
entity: AdGroupFeed
title: List AdGroupFeed
order: 3.1
---

```javascript
// Listing all the adGroupFeeds in the account
let result = await customer.adGroupFeeds.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.adGroupFeeds.list({
  constraints: [
    {
      key: 'ad_group_feed.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'ad_group_feed.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    ad_group_feed: {
      ad_group: 'customers/3827277046/adGroups/69639056828',
      feed: 'customers/3827277046/feeds/43009393',
      matching_function: {
        function_string: 'IN(FEED_ITEM_ID,{48200575108,48199744867,48200356726,48199839565,48200618792})',
        left_operands: [{ request_context_operand: { context_type: 2 } }],
        operator: 2,
        right_operands: [
          { constant_operand: { long_value: 48200575108 } },
          { constant_operand: { long_value: 48199744867 } },
          { constant_operand: { long_value: 48200356726 } },
          { constant_operand: { long_value: 48199839565 } },
          { constant_operand: { long_value: 48200618792 } },
        ],
      },
      placeholder_types: [2],
      resource_name: 'customers/3827277046/adGroupFeeds/69639056828~43009393',
      status: 2,
    },
    feed: {
      attributes: [
        { id: 1, name: 'SitelinkName', type: 4, is_part_of_key: false },
        { id: 2, name: 'SitelinkUrl', type: 6, is_part_of_key: false },
        { id: 3, name: 'SitelinkDescription1', type: 4, is_part_of_key: false },
        { id: 4, name: 'SitelinkDescription2', type: 4, is_part_of_key: false },
        { id: 5, name: 'SitelinkFinalUrls', type: 12, is_part_of_key: false },
        { id: 6, name: 'SitelinkFinalMobileUrls', type: 12, is_part_of_key: false },
        { id: 7, name: 'SitelinkTrackingUrl', type: 6, is_part_of_key: false },
        { id: 8, name: 'SitelinkFinalUrlSuffix', type: 4, is_part_of_key: false },
      ],
      id: 43009393,
      name: 'My feed',
      origin: 3,
      resource_name: 'customers/3827277046/feeds/43009393',
      status: 2,
    },
    ad_group: {
      ad_rotation_mode: 0,
      base_ad_group: 'customers/3827277046/adGroups/69639056828',
      campaign: 'customers/3827277046/campaigns/954460701',
      cpc_bid_micros: 4500000,
      cpm_bid_micros: 10000,
      cpv_bid_micros: 0,
      display_custom_bid_dimension: 0,
      effective_target_cpa_micros: 0,
      effective_target_cpa_source: 0,
      effective_target_roas_source: 0,
      explorer_auto_optimizer_setting: { opt_in: false },
      id: 69639056828,
      labels: ['customers/3827277046/labels/3345231412'],
      name: 'My ad group',
      resource_name: 'customers/3827277046/adGroups/69639056828',
      status: 2,
      target_cpa_micros: 0,
      targeting_setting: {
        target_restrictions: [
          { targeting_dimension: 3, bid_only: false },
          { targeting_dimension: 4, bid_only: false },
          { targeting_dimension: 5, bid_only: false },
          { targeting_dimension: 6, bid_only: false },
          { targeting_dimension: 7, bid_only: false },
          { targeting_dimension: 8, bid_only: false },
          { targeting_dimension: 9, bid_only: false },
        ],
      },
      type: 2,
      url_custom_parameters: [],
    },
    campaign: {
      ad_serving_optimization_status: 5,
      advertising_channel_sub_type: 0,
      advertising_channel_type: 2,
      base_campaign: 'customers/3827277046/campaigns/954460701',
      bidding_strategy_type: 9,
      campaign_budget: 'customers/3827277046/campaignBudgets/1234926420',
      end_date: '2037-12-30',
      experiment_type: 2,
      frequency_caps: [],
      geo_target_type_setting: { negative_geo_target_type: 4, positive_geo_target_type: 7 },
      id: 954460701,
      labels: ['customers/3827277046/labels/3889728471'],
      name: 'My campaign',
      network_settings: {
        target_content_network: false,
        target_google_search: true,
        target_partner_search_network: false,
        target_search_network: false,
      },
      payment_mode: 4,
      resource_name: 'customers/3827277046/campaigns/954460701',
      serving_status: 2,
      start_date: '2017-10-13',
      status: 3,
      targeting_setting: { target_restrictions: [{ targeting_dimension: 3, bid_only: false }] },
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
