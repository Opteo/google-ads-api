---
type: list_code
entity: ExtensionFeedItem
title: List ExtensionFeedItem
order: 3.1
---

```javascript
// Listing all the extensionFeedItems in the account
let result = await customer.extensionFeedItems.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.extensionFeedItems.list({
  constraints: [
    {
      key: 'extension_feed_item.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'extension_feed_item.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    extension_feed_item: {
      resource_name: 'customers/3827277046/extensionFeedItems/13881705221',
      ad_schedules: [],
      extension_type: 11,
      status: 2,
      structured_snippet_feed_item: {
        header: 'Types',
        values: [
          { value: 'Ad Testing' },
          { value: 'Bid Optimization' },
          { value: 'Account Structuring' },
          { value: 'Search Query Analysis' },
          { value: 'LP Error Detection' },
          { value: 'Ad Extension Management' },
          { value: 'QS Optimization' },
          { value: 'Segment Analysis' },
          { value: 'Performance Monitoring' },
        ],
      },
    },
    ad_group: {
      resource_name: 'customers/3827277046/adGroups/37706041185',
      campaign: 'customers/3827277046/campaigns/729684361',
      cpc_bid_micros: 4770000,
      cpm_bid_micros: 10000,
      cpv_bid_micros: 0,
      effective_target_cpa_micros: 0,
      explorer_auto_optimizer_setting: { opt_in: false },
      id: 37706041185,
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
      resource_name: 'customers/3827277046/campaigns/729684361',
      ad_serving_optimization_status: 4,
      advertising_channel_type: 2,
      base_campaign: 'customers/3827277046/campaigns/729684361',
      bidding_strategy_type: 3,
      campaign_budget: 'customers/3827277046/campaignBudgets/1005523652',
      end_date: '2037-12-30',
      experiment_type: 2,
      frequency_caps: [],
      geo_target_type_setting: { negative_geo_target_type: 2, positive_geo_target_type: 4 },
      id: 729684361,
      manual_cpc: { enhanced_cpc_enabled: false },
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
      start_date: '2017-01-04',
      status: 3,
      targeting_setting: { target_restrictions: [{ targetingDimension: 3, bidOnly: { value: false } }] },
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
