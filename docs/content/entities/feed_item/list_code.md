---
type: list_code
entity: FeedItem
title: List FeedItem
order: 3.1
---

```javascript
// Listing all the feedItems in the account
let result = await customer.feedItems.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.feedItems.list({
  constraints: [
    {
      key: 'feed_item.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'feed_item.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    feed_item: {
      attribute_values: [
        {
          feed_attribute_id: 1,
          string_value: 'AdWords Knowledge Base',
          integer_values: [],
          boolean_values: [],
          string_values: [],
          double_values: [],
        },
        {
          feed_attribute_id: 3,
          string_value: 'Adwords Guides, Case Studies',
          integer_values: [],
          boolean_values: [],
          string_values: [],
          double_values: [],
        },
        {
          feed_attribute_id: 4,
          string_value: 'Chrome Extensions and more!',
          integer_values: [],
          boolean_values: [],
          string_values: [],
          double_values: [],
        },
        {
          feed_attribute_id: 5,
          integer_values: [],
          boolean_values: [],
          string_values: ['https://opteo.com/docs'],
          double_values: [],
        },
      ],
      feed: 'customers/3827277046/feeds/43009393',
      geo_targeting_restriction: 0,
      id: 9779152283,
      policy_infos: [
        {
          placeholder_type_enum: 2,
          feed_mapping_resource_name: 'customers/3827277046/feedMappings/43009393~46066123',
          review_status: 3,
          approval_status: 2,
          policy_topic_entries: [{ topic: 'DESTINATION_MISMATCH', type: 2, evidences: [], constraints: [] }],
          validation_status: 4,
          validation_errors: [],
          quality_approval_status: 0,
          quality_disapproval_reasons: [],
        },
      ],
      resource_name: 'customers/3827277046/feedItems/43009393~9779152283',
      status: 3,
      url_custom_parameters: [],
    },
    ad_group_ad: {
      ad: {
        added_by_google_ads: false,
        device_preference: 0,
        display_url: '',
        expanded_text_ad: {
          description: 'Top Rated AdWords PPC Tool. Designed For Agencies. Try It Free!',
          headline_part1: 'Top Rated Google Ad Tool',
          headline_part2: 'Lift PPC Results In 30 Seconds',
          path1: 'google-ad',
          path2: 'tool',
        },
        final_app_urls: [],
        final_mobile_urls: [],
        final_urls: ['http://lp3.opteo.com/lp/google-ad-tool'],
        id: 170067910717,
        resource_name: 'customers/3827277046/ads/170067910717',
        system_managed_resource_source: 0,
        type: 3,
        url_collections: [],
        url_custom_parameters: [],
      },
      ad_group: 'customers/3827277046/adGroups/36337682617',
      ad_strength: 0,
      policy_summary: {
        approval_status: 3,
        policy_topic_entries: [
          {
            topic: 'TRADEMARKS_IN_AD_TEXT',
            type: 4,
            evidences: [{ text_list: { texts: ['Google'] } }],
            constraints: [
              {
                country_constraint_list: {
                  total_targeted_countries: 23,
                  countries: [
                    { country_criterion: 'geoTargetConstants/2528' },
                    { country_criterion: 'geoTargetConstants/2040' },
                    { country_criterion: 'geoTargetConstants/2710' },
                    { country_criterion: 'geoTargetConstants/2702' },
                    { country_criterion: 'geoTargetConstants/2246' },
                    { country_criterion: 'geoTargetConstants/2380' },
                    { country_criterion: 'geoTargetConstants/2056' },
                    { country_criterion: 'geoTargetConstants/2344' },
                    { country_criterion: 'geoTargetConstants/2250' },
                    { country_criterion: 'geoTargetConstants/2442' },
                    { country_criterion: 'geoTargetConstants/2752' },
                    { country_criterion: 'geoTargetConstants/2724' },
                    { country_criterion: 'geoTargetConstants/2756' },
                    { country_criterion: 'geoTargetConstants/2276' },
                    { country_criterion: 'geoTargetConstants/2348' },
                    { country_criterion: 'geoTargetConstants/2578' },
                    { country_criterion: 'geoTargetConstants/2203' },
                  ],
                },
              },
            ],
          },
        ],
        review_status: 3,
      },
      resource_name: 'customers/3827277046/adGroupAds/36337682617~170067910717',
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
      base_ad_group: 'customers/3827277046/adGroups/36337682617',
      campaign: 'customers/3827277046/campaigns/729468367',
      cpc_bid_micros: 5000000,
      cpm_bid_micros: 10000,
      cpv_bid_micros: 0,
      display_custom_bid_dimension: 0,
      effective_target_cpa_micros: 0,
      effective_target_cpa_source: 0,
      effective_target_roas_source: 0,
      explorer_auto_optimizer_setting: { opt_in: false },
      id: 36337682617,
      labels: [],
      name: 'My ad group',
      resource_name: 'customers/3827277046/adGroups/36337682617',
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
        ],
      },
      type: 2,
      url_custom_parameters: [],
    },
    campaign: {
      ad_serving_optimization_status: 4,
      advertising_channel_sub_type: 0,
      advertising_channel_type: 2,
      base_campaign: 'customers/3827277046/campaigns/729468367',
      bidding_strategy_type: 3,
      campaign_budget: 'customers/3827277046/campaignBudgets/1005586771',
      end_date: '2037-12-30',
      experiment_type: 2,
      frequency_caps: [],
      geo_target_type_setting: { negative_geo_target_type: 4, positive_geo_target_type: 7 },
      id: 729468367,
      labels: [],
      manual_cpc: { enhanced_cpc_enabled: true },
      name: 'My campaign',
      network_settings: {
        target_content_network: false,
        target_google_search: true,
        target_partner_search_network: false,
        target_search_network: true,
      },
      payment_mode: 4,
      resource_name: 'customers/3827277046/campaigns/729468367',
      serving_status: 2,
      start_date: '2017-01-04',
      status: 4,
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
