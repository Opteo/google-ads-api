---
type: list_code
entity: AdGroupAdLabel
title: List AdGroupAdLabel
order: 3.1
---

```javascript
// Listing all the adGroupAdLabels in the account
let result = await customer.adGroupAdLabels.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.adGroupAdLabels.list({
  constraints: [
    {
      key: 'ad_group_ad_label.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'ad_group_ad_label.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    ad_group_ad_label: {
      ad_group_ad: 'customers/3827277046/adGroupAds/37706041345~204347238383',
      label: 'customers/3827277046/labels/1285360183',
      resource_name: 'customers/3827277046/adGroupAdLabels/37706041345~204347238383~1285360183',
    },
    ad_group_ad: {
      ad: {
        added_by_google_ads: false,
        display_url: '',
        expanded_text_ad: {
          description: 'State Of The Art AdWords PPC Tool. Designed For Agencies. Try It Free!',
          headline_part1: 'Top Ad Words Tool',
          headline_part2: 'Modern Way To Manage Accounts',
          path1: 'ppc',
          path2: 'tool',
        },
        final_app_urls: [],
        final_mobile_urls: [],
        final_urls: ['http://opteo.co/lp/ad-words-software'],
        id: 204347238383,
        resource_name: 'customers/3827277046/ads/204347238383',
        type: 3,
        url_collections: [],
        url_custom_parameters: [],
      },
      ad_group: 'customers/3827277046/adGroups/37706041345',
      resource_name: 'customers/3827277046/adGroupAds/37706041345~204347238383',
      status: 4,
    },
    label: {
      id: 1285360183,
      name: 'My label',
      resource_name: 'customers/3827277046/labels/1285360183',
      status: 2,
      text_label: { background_color: '#336666', description: '' },
    },
    ad_group: {
      base_ad_group: 'customers/3827277046/adGroups/37706041345',
      campaign: 'customers/3827277046/campaigns/729684361',
      cpc_bid_micros: 4770000,
      cpm_bid_micros: 10000,
      cpv_bid_micros: 0,
      effective_target_cpa_micros: 0,
      explorer_auto_optimizer_setting: { opt_in: false },
      id: 37706041345,
      labels: [],
      name: 'My ad group',
      resource_name: 'customers/3827277046/adGroups/37706041345',
      status: 2,
      target_cpa_micros: 0,
      targeting_setting: {
        target_restrictions: [
          { targetingDimension: 3, bidOnly: false },
          { targetingDimension: 4, bidOnly: false },
          { targetingDimension: 5, bidOnly: true },
          { targetingDimension: 6, bidOnly: false },
          { targetingDimension: 7, bidOnly: false },
          { targetingDimension: 8, bidOnly: false },
        ],
      },
      type: 2,
      url_custom_parameters: [],
    },
    campaign: {
      ad_serving_optimization_status: 4,
      advertising_channel_type: 2,
      base_campaign: 'customers/3827277046/campaigns/729684361',
      bidding_strategy_type: 3,
      campaign_budget: 'customers/3827277046/campaignBudgets/1005523652',
      end_date: '2037-12-30',
      experiment_type: 2,
      frequency_caps: [],
      geo_target_type_setting: { negative_geo_target_type: 4, positive_geo_target_type: 7 },
      id: 729684361,
      labels: [],
      manual_cpc: { enhanced_cpc_enabled: false },
      name: 'My campaign',
      network_settings: {
        target_content_network: false,
        target_google_search: true,
        target_partner_search_network: false,
        target_search_network: true,
      },
      payment_mode: 4,
      resource_name: 'customers/3827277046/campaigns/729684361',
      selective_optimization: { conversion_actions: [] },
      serving_status: 2,
      start_date: '2017-01-04',
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
