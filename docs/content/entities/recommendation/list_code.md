---
type: list_code
entity: Recommendation
title: List Recommendation
order: 3.1
---

```javascript
// Listing all the recommendations in the account
let result = await customer.recommendations.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.recommendations.list({
  constraints: [
    {
      key: 'recommendation.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'recommendation.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    recommendation: {
      ad_group: 'customers/3827277046/adGroups/51034419287',
      campaign: 'customers/3827277046/campaigns/954460701',
      campaign_budget: 'customers/3827277046/campaignBudgets/1234926420',
      dismissed: false,
      resource_name:
        'customers/3827277046/recommendations/MTk5MDY3NzIzLTE2My0xNTU5MDYwMjA2MDAwLSs5NTQ0NjA3MDEtNTEwMzQ0MTkyODctMTU1ODk1OTI3NTQzMjA5ODY4NzE',
      type: 3,
    },
    campaign_budget: {
      amount_micros: 100000000,
      delivery_method: 3,
      explicitly_shared: false,
      has_recommended_budget: false,
      id: 1234926420,
      name: 'My campaign budget',
      period: 2,
      reference_count: 1,
      resource_name: 'customers/3827277046/campaignBudgets/1234926420',
      status: 2,
      type: 2,
    },
    ad_group: {
      campaign: 'customers/3827277046/campaigns/954460701',
      cpc_bid_micros: 4500000,
      cpm_bid_micros: 10000,
      cpv_bid_micros: 0,
      effective_target_cpa_micros: 0,
      explorer_auto_optimizer_setting: { opt_in: false },
      id: 51034419287,
      name: 'My ad group',
      resource_name: 'customers/3827277046/adGroups/51034419287',
      status: 2,
      target_cpa_micros: 0,
      targeting_setting: {
        target_restrictions: [
          { targetingDimension: 3, bidOnly: { value: false } },
          { targetingDimension: 4, bidOnly: { value: false } },
          { targetingDimension: 5, bidOnly: { value: false } },
          { targetingDimension: 6, bidOnly: { value: false } },
          { targetingDimension: 7, bidOnly: { value: false } },
          { targetingDimension: 8, bidOnly: { value: false } },
          { targetingDimension: 9, bidOnly: { value: false } },
        ],
      },
      type: 2,
      url_custom_parameters: [],
    },
    campaign: {
      ad_serving_optimization_status: 5,
      advertising_channel_type: 2,
      base_campaign: 'customers/3827277046/campaigns/954460701',
      bidding_strategy_type: 3,
      campaign_budget: 'customers/3827277046/campaignBudgets/1234926420',
      end_date: '2037-12-30',
      experiment_type: 2,
      frequency_caps: [],
      geo_target_type_setting: { negative_geo_target_type: 2, positive_geo_target_type: 4 },
      id: 954460701,
      manual_cpc: { enhanced_cpc_enabled: true },
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
      status: 2,
      targeting_setting: { target_restrictions: [{ targetingDimension: 3, bidOnly: { value: false } }] },
      url_custom_parameters: [],
    },
    customer: {
      auto_tagging_enabled: true,
      call_reporting_setting: {
        call_conversion_action: 'customers/3827277046/conversionActions/179',
        call_conversion_reporting_enabled: true,
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
      tracking_url_template:
        '{lpurl}?utm_source=adwords&utm_medium=PPC&utm_campaign={campaignid}&utm_term={ifsearch:{keyword}}{ifcontent:{placement}}&utm_content={creative}&network={network}&adgroupid={adgroupid}&matchtype={matchtype}&adposition={adposition}&targetid={targetid}&target={target}&device={device}&devicemodel={devicemodel}',
    },
  },
]
```
