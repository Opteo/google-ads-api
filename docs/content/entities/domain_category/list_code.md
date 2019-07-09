---
type: list_code
entity: DomainCategory
title: List DomainCategory
order: 3.1
---

```javascript
// Listing all the domainCategories in the account
let result = await customer.domainCategories.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.domainCategories.list({
  constraints: [
    {
      key: 'domain_category.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'domain_category.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    domain_category: {
      campaign: 'customers/3827277046/campaigns/1398201241',
      category: 'landing pages from your standard ad groups',
      category_rank: 0,
      coverage_fraction: 4.166666666666667,
      domain: 'opteo.com',
      has_children: false,
      language_code: 'en',
      recommended_cpc_bid_micros: 41404277,
      resource_name:
        'customers/3827277046/domainCategories/1398201241~bGFuZGluZyBwYWdlcyBmcm9tIHlvdXIgc3RhbmRhcmQgYWQgZ3JvdXBz~en',
    },
    campaign: {
      ad_serving_optimization_status: 5,
      advertising_channel_type: 2,
      base_campaign: 'customers/3827277046/campaigns/1398201241',
      bidding_strategy: 'customers/3827277046/biddingStrategies/2053936084',
      bidding_strategy_type: 8,
      campaign_budget: 'customers/3827277046/campaignBudgets/1453179506',
      dynamic_search_ads_setting: {
        domain_name: 'opteo.com',
        feeds: [],
        language_code: 'en',
        use_supplied_urls_only: false,
      },
      end_date: '2037-12-30',
      experiment_type: 2,
      frequency_caps: [],
      geo_target_type_setting: { negative_geo_target_type: 4, positive_geo_target_type: 5 },
      id: 1398201241,
      labels: [
        'customers/3827277046/labels/3889728216',
        'customers/3827277046/labels/3889728468',
        'customers/3827277046/labels/3889728474',
      ],
      name: 'My campaign',
      network_settings: {
        target_content_network: false,
        target_google_search: true,
        target_partner_search_network: false,
        target_search_network: false,
      },
      payment_mode: 4,
      resource_name: 'customers/3827277046/campaigns/1398201241',
      selective_optimization: { conversion_actions: [] },
      serving_status: 2,
      start_date: '2018-05-10',
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
