---
type: list_code
entity: Video
title: List Video
order: 3.1
---

```javascript
// Listing all the videos in the account
let result = await customer.videos.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.videos.list({
  constraints: [
    {
      key: 'video.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'video.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    video: {
      channel_id: 'UCOSYb4yvogm0SAI8rX8kGWQ',
      duration_millis: 40356,
      id: 'V_jS8nLLpZI',
      resource_name: 'customers/3827277046/videos/Vl9qUzhuTExwWkk',
      title: 'Opteo',
    },
    ad_group_ad: {
      ad: {
        added_by_google_ads: false,
        display_url: 'opteo.com',
        final_app_urls: [],
        final_mobile_urls: [],
        final_urls: ['https://opteo.com'],
        id: 293690144869,
        name: 'Animation',
        resource_name: 'customers/3827277046/ads/293690144869',
        type: 12,
        url_collections: [],
        url_custom_parameters: [],
      },
      ad_group: 'customers/3827277046/adGroups/55719719421',
      resource_name: 'customers/3827277046/adGroupAds/55719719421~293690144869',
      status: 2,
    },
    ad_group: {
      base_ad_group: 'customers/3827277046/adGroups/55719719421',
      campaign: 'customers/3827277046/campaigns/1546686126',
      cpc_bid_micros: 0,
      cpm_bid_micros: 10000,
      cpv_bid_micros: 100000,
      effective_target_cpa_micros: 0,
      explorer_auto_optimizer_setting: { opt_in: false },
      id: 55719719421,
      labels: [],
      name: 'My ad group',
      resource_name: 'customers/3827277046/adGroups/55719719421',
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
      type: 9,
      url_custom_parameters: [],
    },
    campaign: {
      ad_serving_optimization_status: 2,
      advertising_channel_type: 6,
      base_campaign: 'customers/3827277046/campaigns/1546686126',
      bidding_strategy_type: 13,
      campaign_budget: 'customers/3827277046/campaignBudgets/1601905358',
      end_date: '2037-12-30',
      experiment_type: 2,
      frequency_caps: [{ key: { level: 4, eventType: 2, timeUnit: 2, timeLength: 1 }, cap: 1 }],
      geo_target_type_setting: { negative_geo_target_type: 5, positive_geo_target_type: 7 },
      id: 1546686126,
      labels: ['customers/3827277046/labels/3353203258'],
      name: 'My campaign',
      network_settings: {
        target_content_network: false,
        target_google_search: false,
        target_partner_search_network: false,
        target_search_network: false,
      },
      payment_mode: 4,
      resource_name: 'customers/3827277046/campaigns/1546686126',
      selective_optimization: { conversion_actions: [] },
      serving_status: 2,
      start_date: '2018-09-07',
      status: 2,
      url_custom_parameters: [],
      video_brand_safety_suitability: 3,
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
