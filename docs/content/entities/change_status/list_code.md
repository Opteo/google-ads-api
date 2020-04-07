---
type: list_code
entity: ChangeStatus
title: List ChangeStatus
order: 3.1
---

```javascript
// Listing all the changeStatus in the account
let result = await customer.changeStatus.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.changeStatus.list({
  constraints: [
    {
      key: 'change_status.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'change_status.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    change_status: {
      feed: 'customers/9262111890/feeds/82896692',
      feed_item: 'customers/9262111890/feedItems/82896692~51844020102',
      last_change_date_time: '2019-12-15 10:59:40.333135',
      resource_name: 'customers/9262111890/changeStatus/1576407580333135-10-82896692-51844020102',
      resource_status: 3,
      resource_type: 10,
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
      id: 82896692,
      name: 'My feed',
      origin: 3,
      resource_name: 'customers/9262111890/feeds/82896692',
      status: 2,
    },
    feed_item: {
      attribute_values: [
        {
          feed_attribute_id: 1,
          string_value: 'my sitelink text',
          integer_values: [],
          boolean_values: [],
          string_values: [],
          double_values: [],
        },
        {
          feed_attribute_id: 3,
          string_value: 'description here',
          integer_values: [],
          boolean_values: [],
          string_values: [],
          double_values: [],
        },
        {
          feed_attribute_id: 4,
          string_value: 'description here line 2',
          integer_values: [],
          boolean_values: [],
          string_values: [],
          double_values: [],
        },
        {
          feed_attribute_id: 5,
          integer_values: [],
          boolean_values: [],
          string_values: ['https://myurl.com'],
          double_values: [],
        },
      ],
      feed: 'customers/9262111890/feeds/82896692',
      geo_targeting_restriction: 0,
      id: 51844020102,
      policy_infos: [
        {
          placeholder_type_enum: 2,
          feed_mapping_resource_name: 'customers/9262111890/feedMappings/82896692~91300060',
          review_status: 0,
          approval_status: 0,
          policy_topic_entries: [],
          validation_status: 4,
          validation_errors: [],
          quality_approval_status: 0,
          quality_disapproval_reasons: [],
        },
      ],
      resource_name: 'customers/9262111890/feedItems/82896692~51844020102',
      status: 2,
      url_custom_parameters: [],
    },
    ad_group: {
      ad_rotation_mode: 0,
      display_custom_bid_dimension: 0,
      effective_target_cpa_source: 0,
      effective_target_roas_source: 0,
      id: 0,
      labels: [],
      resource_name: '',
      status: 0,
      type: 0,
      url_custom_parameters: [],
    },
    campaign: {
      ad_serving_optimization_status: 0,
      advertising_channel_sub_type: 0,
      advertising_channel_type: 0,
      bidding_strategy_type: 0,
      experiment_type: 0,
      frequency_caps: [],
      id: 0,
      labels: [],
      payment_mode: 0,
      resource_name: '',
      serving_status: 0,
      status: 0,
      url_custom_parameters: [],
      video_brand_safety_suitability: 0,
    },
    customer: {
      auto_tagging_enabled: false,
      call_reporting_setting: {
        call_conversion_action: 'customers/9262111890/conversionActions/179',
        call_conversion_reporting_enabled: true,
      },
      conversion_tracking_setting: { conversion_tracking_id: 797556569 },
      currency_code: 'EUR',
      descriptive_name: 'My customer',
      has_partners_badge: false,
      id: 9262111890,
      manager: false,
      pay_per_conversion_eligibility_failure_reasons: [8, 2],
      remarketing_setting: {
        google_global_site_tag:
          "<!-- Global site tag (gtag.js) - Google Ads: 797556569 -->\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=AW-797556569\"></script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'AW-797556569');\n</script>\n",
      },
      resource_name: 'customers/9262111890',
      test_account: true,
      time_zone: 'Europe/London',
    },
  },
]
```
