---
type: list_code
entity: AdGroupLabel
title: List AdGroupLabel
order: 3.1
---

```javascript
// Listing all the adGroupLabels in the account
let result = await customer.adGroupLabels.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.adGroupLabels.list({
  constraints: [
    {
      key: 'ad_group_label.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'ad_group_label.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    ad_group_label: {
      resource_name: 'customers/3827277046/adGroupLabels/42877626370~3345231412',
      ad_group: 'customers/3827277046/adGroups/42877626370',
      label: 'customers/3827277046/labels/3345231412',
    },
    label: {
      resource_name: 'customers/3827277046/labels/3345231412',
      id: 3345231412,
      name: 'My label',
      status: 2,
      text_label: {
        background_color: '#E993EB',
        description: 'Adgroups where Chloe will write new ads that kick butt.',
      },
    },
    ad_group: {
      resource_name: 'customers/3827277046/adGroups/42877626370',
      campaign: 'customers/3827277046/campaigns/954453048',
      cpc_bid_micros: 6000000,
      cpm_bid_micros: 10000,
      cpv_bid_micros: 0,
      effective_target_cpa_micros: 0,
      explorer_auto_optimizer_setting: { opt_in: false },
      id: 42877626370,
      name: 'My ad group',
      status: 2,
      target_cpa_micros: 0,
      targeting_setting: {
        target_restrictions: [
          { targetingDimension: 3, bidOnly: { value: true } },
          { targetingDimension: 4, bidOnly: { value: false } },
          { targetingDimension: 5, bidOnly: { value: true } },
          { targetingDimension: 6, bidOnly: { value: true } },
          { targetingDimension: 7, bidOnly: { value: false } },
          { targetingDimension: 8, bidOnly: { value: true } },
          { targetingDimension: 9, bidOnly: { value: true } },
        ],
      },
      type: 2,
      url_custom_parameters: [],
    },
    campaign: {
      resource_name: 'customers/3827277046/campaigns/954453048',
      ad_serving_optimization_status: 5,
      advertising_channel_type: 2,
      bidding_strategy_type: 3,
      campaign_budget: 'customers/3827277046/campaignBudgets/1234847999',
      end_date: '2037-12-30',
      frequency_caps: [],
      geo_target_type_setting: { negative_geo_target_type: 2, positive_geo_target_type: 4 },
      id: 954453048,
      manual_cpc: { enhanced_cpc_enabled: true },
      name: 'My campaign',
      network_settings: {
        target_content_network: false,
        target_google_search: true,
        target_partner_search_network: false,
        target_search_network: false,
      },
      payment_mode: 4,
      selective_optimization: { conversion_actions: [] },
      serving_status: 2,
      start_date: '2017-10-13',
      status: 2,
      targeting_setting: { target_restrictions: [{ targetingDimension: 3, bidOnly: { value: false } }] },
      url_custom_parameters: [],
    },
    customer: {
      resource_name: 'customers/3827277046',
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
      remarketing_setting: {
        google_global_site_tag:
          "<!-- Global site tag (gtag.js) - Google Ads: 875176189 -->\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=AW-875176189\"></script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'AW-875176189');\n</script>\n",
      },
      test_account: false,
      time_zone: 'Europe/London',
      tracking_url_template:
        '{lpurl}?utm_source=adwords&utm_medium=PPC&utm_campaign={campaignid}&utm_term={ifsearch:{keyword}}{ifcontent:{placement}}&utm_content={creative}&network={network}&adgroupid={adgroupid}&matchtype={matchtype}&adposition={adposition}&targetid={targetid}&target={target}&device={device}&devicemodel={devicemodel}',
    },
  },
]
```
