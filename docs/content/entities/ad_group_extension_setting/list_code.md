---
type: list_code
entity: AdGroupExtensionSetting
title: List AdGroupExtensionSetting
order: 3.1
---

```javascript
// Listing all the adGroupExtensionSettings in the account
let result = await customer.adGroupExtensionSettings.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.adGroupExtensionSettings.list({
  constraints: [
    {
      key: 'ad_group_extension_setting.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'ad_group_extension_setting.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    ad_group_extension_setting: {
      ad_group: 'customers/3827277046/adGroups/69639056828',
      extension_feed_items: [
        'customers/3827277046/extensionFeedItems/48199744867',
        'customers/3827277046/extensionFeedItems/48199839565',
        'customers/3827277046/extensionFeedItems/48200356726',
        'customers/3827277046/extensionFeedItems/48200575108',
        'customers/3827277046/extensionFeedItems/48200618792',
      ],
      extension_type: 10,
      resource_name: 'customers/3827277046/adGroupExtensionSettings/69639056828~SITELINK',
    },
    ad_group: {
      base_ad_group: 'customers/3827277046/adGroups/69639056828',
      campaign: 'customers/3827277046/campaigns/954460701',
      cpc_bid_micros: 4500000,
      cpm_bid_micros: 10000,
      cpv_bid_micros: 0,
      effective_target_cpa_micros: 0,
      explorer_auto_optimizer_setting: { opt_in: false },
      id: 69639056828,
      labels: ['customers/3827277046/labels/3345231412'],
      name: 'My ad group',
      resource_name: 'customers/3827277046/adGroups/69639056828',
      status: 2,
      target_cpa_micros: 0,
      targeting_setting: {
        target_restrictions: [
          { targetingDimension: 3, bidOnly: false },
          { targetingDimension: 4, bidOnly: false },
          { targetingDimension: 5, bidOnly: false },
          { targetingDimension: 6, bidOnly: false },
          { targetingDimension: 7, bidOnly: false },
          { targetingDimension: 8, bidOnly: false },
          { targetingDimension: 9, bidOnly: false },
        ],
      },
      type: 2,
      url_custom_parameters: [],
    },
    campaign: {
      ad_serving_optimization_status: 5,
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
      selective_optimization: { conversion_actions: [] },
      serving_status: 2,
      start_date: '2017-10-13',
      status: 3,
      targeting_setting: { target_restrictions: [{ targetingDimension: 3, bidOnly: false }] },
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
