---
type: list_code
entity: AdGroupAd
title: List AdGroupAd
order: 3.1
---

```javascript
// Listing all the adGroupAds in the account
let result = await customer.adGroupAds.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.adGroupAds.list({
  constraints: [
    {
      key: 'ad_group_ad.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'ad_group_ad.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    ad_group_ad: {
      ad: {
        added_by_google_ads: false,
        display_url: '',
        expanded_text_ad: {
          description: 'my description here2',
          headline_part1: 'headline part 1 here2',
          headline_part2: 'headline part 2 here2',
          path1: 'path one here2',
          path2: 'path two here2',
        },
        final_app_urls: [],
        final_mobile_urls: [],
        final_urls: ['http://hello.com'],
        id: 284706472002,
        resource_name: 'customers/9262111890/ads/284706472002',
        type: 3,
        url_collections: [],
        url_custom_parameters: [],
      },
      ad_group: 'customers/9262111890/adGroups/56328868446',
      resource_name: 'customers/9262111890/adGroupAds/56328868446~284706472002',
      status: 2,
    },
    ad_group: {
      base_ad_group: 'customers/9262111890/adGroups/56328868446',
      campaign: 'customers/9262111890/campaigns/1485014801',
      cpc_bid_micros: 1000000,
      cpm_bid_micros: 10000,
      cpv_bid_micros: 0,
      effective_target_cpa_micros: 0,
      id: 56328868446,
      labels: [],
      name: 'My ad group',
      resource_name: 'customers/9262111890/adGroups/56328868446',
      status: 2,
      target_cpa_micros: 0,
      type: 2,
      url_custom_parameters: [],
    },
    campaign: {
      ad_serving_optimization_status: 2,
      advertising_channel_type: 2,
      base_campaign: 'customers/9262111890/campaigns/1485014801',
      bidding_strategy_type: 9,
      campaign_budget: 'customers/9262111890/campaignBudgets/1548344372',
      end_date: '2037-12-30',
      experiment_type: 2,
      frequency_caps: [],
      geo_target_type_setting: { negative_geo_target_type: 4, positive_geo_target_type: 5 },
      id: 1485014801,
      labels: [],
      name: 'My campaign',
      network_settings: {
        target_content_network: true,
        target_google_search: true,
        target_partner_search_network: false,
        target_search_network: true,
      },
      payment_mode: 4,
      resource_name: 'customers/9262111890/campaigns/1485014801',
      selective_optimization: { conversion_actions: [] },
      serving_status: 2,
      start_date: '2018-07-24',
      status: 2,
      target_spend: { cpc_bid_ceiling_micros: 1000000 },
      url_custom_parameters: [],
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
