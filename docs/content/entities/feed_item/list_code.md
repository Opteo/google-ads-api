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
          feedAttributeId: 1,
          stringValue: 'AdWords Knowledge Base',
          integerValues: [],
          booleanValues: [],
          stringValues: [],
          doubleValues: [],
        },
        {
          feedAttributeId: 3,
          stringValue: 'Adwords Guides, Case Studies',
          integerValues: [],
          booleanValues: [],
          stringValues: [],
          doubleValues: [],
        },
        {
          feedAttributeId: 4,
          stringValue: 'Chrome Extensions and more!',
          integerValues: [],
          booleanValues: [],
          stringValues: [],
          doubleValues: [],
        },
        {
          feedAttributeId: 5,
          integerValues: [],
          booleanValues: [],
          stringValues: ['https://opteo.com/docs'],
          doubleValues: [],
        },
      ],
      feed: 'customers/3827277046/feeds/43009393',
      id: 9779152283,
      policy_infos: [
        {
          placeholderTypeEnum: 2,
          feedMappingResourceName: 'customers/3827277046/feedMappings/43009393~46066123',
          reviewStatus: 3,
          approvalStatus: 2,
          policyTopicEntries: [{ topic: 'DESTINATION_MISMATCH', type: 2, evidences: [], constraints: [] }],
          validationStatus: 4,
          validationErrors: [],
          qualityApprovalStatus: 0,
          qualityDisapprovalReasons: [],
        },
      ],
      resource_name: 'customers/3827277046/feedItems/43009393~9779152283',
      status: 3,
      url_custom_parameters: [],
    },
    ad_group_ad: {
      ad: {
        added_by_google_ads: false,
        display_url: '',
        expanded_text_ad: {
          description: 'Get simple "recommended actions" to maximize your clients\' Adwords performance.',
          headline_part1: 'Adwords tool for agencies',
          headline_part2: 'Manage all clients in 1 place.',
          path1: 'adwords',
          path2: 'tool',
        },
        final_app_urls: [],
        final_mobile_urls: [],
        final_urls: ['http://opteo.co/lp/adwords-tool'],
        id: 172997271757,
        resource_name: 'customers/3827277046/ads/172997271757',
        type: 3,
        url_collections: [],
        url_custom_parameters: [],
      },
      ad_group: 'customers/3827277046/adGroups/37706041185',
      resource_name: 'customers/3827277046/adGroupAds/37706041185~172997271757',
      status: 4,
    },
    feed: {
      attributes: [
        { id: 1, name: 'SitelinkName', type: 4, isPartOfKey: false },
        { id: 2, name: 'SitelinkUrl', type: 6, isPartOfKey: false },
        { id: 3, name: 'SitelinkDescription1', type: 4, isPartOfKey: false },
        { id: 4, name: 'SitelinkDescription2', type: 4, isPartOfKey: false },
        { id: 5, name: 'SitelinkFinalUrls', type: 12, isPartOfKey: false },
        { id: 6, name: 'SitelinkFinalMobileUrls', type: 12, isPartOfKey: false },
        { id: 7, name: 'SitelinkTrackingUrl', type: 6, isPartOfKey: false },
        { id: 8, name: 'SitelinkFinalUrlSuffix', type: 4, isPartOfKey: false },
      ],
      id: 43009393,
      name: 'My feed',
      origin: 3,
      resource_name: 'customers/3827277046/feeds/43009393',
      status: 2,
    },
    ad_group: {
      base_ad_group: 'customers/3827277046/adGroups/37706041185',
      campaign: 'customers/3827277046/campaigns/729684361',
      cpc_bid_micros: 4770000,
      cpm_bid_micros: 10000,
      cpv_bid_micros: 0,
      effective_target_cpa_micros: 0,
      explorer_auto_optimizer_setting: { opt_in: false },
      id: 37706041185,
      labels: [],
      name: 'My ad group',
      resource_name: 'customers/3827277046/adGroups/37706041185',
      status: 2,
      target_cpa_micros: 0,
      targeting_setting: {
        target_restrictions: [
          { targetingDimension: 3, bidOnly: false },
          { targetingDimension: 4, bidOnly: false },
          { targetingDimension: 5, bidOnly: true },
          { targetingDimension: 6, bidOnly: true },
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
