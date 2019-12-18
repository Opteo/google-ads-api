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
      ad_schedules: [],
      call_feed_item: {
        call_conversion_action: 'customers/3827277046/conversionActions/179',
        call_conversion_reporting_state: 4,
        call_conversion_tracking_disabled: false,
        call_tracking_enabled: true,
        country_code: 'GB',
        phone_number: '02035751125',
      },
      device: 0,
      extension_type: 4,
      resource_name: 'customers/3827277046/extensionFeedItems/13882206517',
      status: 2,
    },
    ad_group: {
      ad_rotation_mode: 0,
      base_ad_group: 'customers/3827277046/adGroups/37706041345',
      campaign: 'customers/3827277046/campaigns/729684361',
      cpc_bid_micros: 4770000,
      cpm_bid_micros: 10000,
      cpv_bid_micros: 0,
      display_custom_bid_dimension: 0,
      effective_target_cpa_micros: 0,
      effective_target_cpa_source: 0,
      effective_target_roas_source: 0,
      explorer_auto_optimizer_setting: { opt_in: false },
      id: 37706041345,
      labels: [],
      name: 'My ad group',
      resource_name: 'customers/3827277046/adGroups/37706041345',
      status: 2,
      target_cpa_micros: 0,
      targeting_setting: {
        target_restrictions: [
          { targeting_dimension: 3, bid_only: false },
          { targeting_dimension: 4, bid_only: false },
          { targeting_dimension: 5, bid_only: true },
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
      serving_status: 2,
      start_date: '2017-01-04',
      status: 4,
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
