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
        device_preference: 0,
        display_url: 'opteo.com',
        final_app_urls: [],
        final_mobile_urls: [],
        final_urls: ['https://opteo.com'],
        id: 376678647998,
        name: 'Animation',
        resource_name: 'customers/3827277046/ads/376678647998',
        system_managed_resource_source: 0,
        type: 29,
        url_collections: [],
        url_custom_parameters: [],
        video_ad: {
          in_stream: { companion_banner: 'customers/3827277046/mediaFiles/4570107325' },
          media_file: 'customers/3827277046/mediaFiles/4565915444',
        },
      },
      ad_group: 'customers/3827277046/adGroups/55719719421',
      ad_strength: 0,
      policy_summary: { approval_status: 4, policy_topic_entries: [], review_status: 3 },
      resource_name: 'customers/3827277046/adGroupAds/55719719421~376678647998',
      status: 2,
    },
    ad_group: {
      ad_rotation_mode: 0,
      base_ad_group: 'customers/3827277046/adGroups/55719719421',
      campaign: 'customers/3827277046/campaigns/1546686126',
      cpc_bid_micros: 0,
      cpm_bid_micros: 10000,
      cpv_bid_micros: 100000,
      display_custom_bid_dimension: 0,
      effective_target_cpa_micros: 0,
      effective_target_cpa_source: 0,
      effective_target_roas_source: 0,
      explorer_auto_optimizer_setting: { opt_in: false },
      id: 55719719421,
      labels: [],
      name: 'My ad group',
      resource_name: 'customers/3827277046/adGroups/55719719421',
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
      type: 9,
      url_custom_parameters: [],
    },
    campaign: {
      ad_serving_optimization_status: 2,
      advertising_channel_sub_type: 0,
      advertising_channel_type: 6,
      base_campaign: 'customers/3827277046/campaigns/1546686126',
      bidding_strategy_type: 13,
      campaign_budget: 'customers/3827277046/campaignBudgets/1601905358',
      end_date: '2037-12-30',
      experiment_type: 2,
      frequency_caps: [{ key: { level: 4, event_type: 2, time_unit: 2, time_length: 1 }, cap: 1 }],
      geo_target_type_setting: { negative_geo_target_type: 5, positive_geo_target_type: 7 },
      id: 1546686126,
      labels: ['customers/3827277046/labels/3353203258'],
      manual_cpv: {},
      name: 'My campaign',
      network_settings: {
        target_content_network: false,
        target_google_search: false,
        target_partner_search_network: false,
        target_search_network: false,
      },
      payment_mode: 4,
      resource_name: 'customers/3827277046/campaigns/1546686126',
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
      final_url_suffix:
        'wickedsource=google&wickedid={creative}&wtm_term={ifsearch:{keyword}}{ifcontent:{placement}}&wtm_campaign={campaignid}&wtm_content={adgroupid}&wickedplacement={placement}&wickedkeyword={keyword}&gclid={gclid}',
      has_partners_badge: false,
      id: 3827277046,
      manager: false,
      optimization_score: 0.8214771414132993,
      pay_per_conversion_eligibility_failure_reasons: [],
      remarketing_setting: {
        google_global_site_tag:
          "<!-- Global site tag (gtag.js) - Google Ads: 875176189 -->\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=AW-875176189\"></script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'AW-875176189');\n</script>\n",
      },
      resource_name: 'customers/3827277046',
      test_account: false,
      time_zone: 'Europe/London',
      tracking_url_template:
        'https://w.opteo.co/workers/ct?url={lpurl}&domain_id=123443&campaign_id={campaignid}&adgroup_id={adgroupid}&matchtype={matchtype}&network={network}&device={device}&keyword={keyword}&targetid={targetid}',
    },
  },
]
```
