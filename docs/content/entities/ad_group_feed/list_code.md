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
      resource_name: 'customers/3827277046/adGroupFeeds/45808681193~90651045',
      ad_group: 'customers/3827277046/adGroups/45808681193',
      feed: 'customers/3827277046/feeds/90651045',
      matching_function: {
        function_string: 'IN(FEED_ITEM_ID,{70745235845,70745235842,70745235839,70745235836,70745235833})',
        left_operands: [{ requestContextOperand: { contextType: 2 } }],
        operator: 2,
        right_operands: [
          { constantOperand: { longValue: { value: 70745235845 } } },
          { constantOperand: { longValue: { value: 70745235842 } } },
          { constantOperand: { longValue: { value: 70745235839 } } },
          { constantOperand: { longValue: { value: 70745235836 } } },
          { constantOperand: { longValue: { value: 70745235833 } } },
        ],
      },
      placeholder_types: [1],
      status: 2,
    },
    feed: {
      resource_name: 'customers/3827277046/feeds/90651045',
      attributes: [
        { id: { value: 1 }, name: { value: 'SitelinkText' }, type: 4, isPartOfKey: { value: false } },
        { id: { value: 2 }, name: { value: 'SitelinkURL' }, type: 6, isPartOfKey: { value: false } },
        { id: { value: 3 }, name: { value: 'SitelinkFinalURLFingerprint' }, type: 8, isPartOfKey: { value: false } },
        { id: { value: 4 }, name: { value: 'SitelinkSource' }, type: 2, isPartOfKey: { value: false } },
        { id: { value: 5 }, name: { value: 'SitelinkExtractionReuse' }, type: 2, isPartOfKey: { value: false } },
      ],
      id: 90651045,
      name: 'My feed',
      origin: 1,
      status: 2,
    },
    ad_group: {
      resource_name: 'customers/3827277046/adGroups/45808681193',
      campaign: 'customers/3827277046/campaigns/881817006',
      cpc_bid_micros: 2720000,
      cpm_bid_micros: 10000,
      cpv_bid_micros: 0,
      effective_target_cpa_micros: 20000000,
      effective_target_cpa_source: 5,
      explorer_auto_optimizer_setting: { opt_in: false },
      id: 45808681193,
      name: 'My ad group',
      status: 2,
      target_cpa_micros: 0,
      targeting_setting: {
        target_restrictions: [
          { targetingDimension: 3, bidOnly: { value: false } },
          { targetingDimension: 4, bidOnly: { value: false } },
          { targetingDimension: 5, bidOnly: { value: true } },
          { targetingDimension: 6, bidOnly: { value: true } },
          { targetingDimension: 7, bidOnly: { value: false } },
          { targetingDimension: 8, bidOnly: { value: false } },
        ],
      },
      type: 2,
      url_custom_parameters: [],
    },
    campaign: {
      resource_name: 'customers/3827277046/campaigns/881817006',
      ad_serving_optimization_status: 5,
      advertising_channel_type: 2,
      base_campaign: 'customers/3827277046/campaigns/881817006',
      bidding_strategy_type: 6,
      campaign_budget: 'customers/3827277046/campaignBudgets/1159840470',
      end_date: '2037-12-30',
      experiment_type: 2,
      frequency_caps: [],
      geo_target_type_setting: { negative_geo_target_type: 2, positive_geo_target_type: 4 },
      id: 881817006,
      name: 'My campaign',
      network_settings: {
        target_content_network: false,
        target_google_search: true,
        target_partner_search_network: false,
        target_search_network: true,
      },
      payment_mode: 4,
      selective_optimization: { conversion_actions: [] },
      serving_status: 2,
      start_date: '2017-07-12',
      status: 2,
      target_cpa: { target_cpa_micros: 20000000 },
      targeting_setting: { target_restrictions: [{ targetingDimension: 3, bidOnly: { value: false } }] },
      tracking_url_template:
        'https://ad.atdmt.com/s/go;adv=11202207688256;ec=11202207688723;c.a={campaignid};s.a=google;p.a={campaignid};as.a={adgroupid};qpb=1;?bidkw={keyword:defaultkeyword}&dvc={device}&h={lpurl}?utm_source=adwords&utm_medium=PPC&utm_campaign={campaignid}&utm_term={ifsearch:{keyword}}{ifcontent:{placement}}&utm_content={creative}&network={network}&adgroupid={adgroupid}&matchtype={matchtype}&adposition={adposition}&targetid={targetid}&target={target}&device={device}&devicemodel={devicemodel}',
      url_custom_parameters: [],
    },
    customer: {
      resource_name: 'customers/3827277046',
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
      test_account: false,
      time_zone: 'Europe/London',
      tracking_url_template:
        '{lpurl}?utm_source=adwords&utm_medium=PPC&utm_campaign={campaignid}&utm_term={ifsearch:{keyword}}{ifcontent:{placement}}&utm_content={creative}&network={network}&adgroupid={adgroupid}&matchtype={matchtype}&adposition={adposition}&targetid={targetid}&target={target}&device={device}&devicemodel={devicemodel}',
    },
  },
]
```
