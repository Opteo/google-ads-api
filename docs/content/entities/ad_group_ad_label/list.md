---
type: list
entity: AdGroupAdLabel
title: List AdGroupAdLabel
order: 3
---

### List every instance of AdGroupAdLabel

The `customer.adGroupAdLabels.list()` returns all of the entities in the account, including `REMOVED` entities. It also returns all other resources that can be selected with each instance of AdGroupAdLabel.

This method was designed for convenience and discovery. Internally, it uses the `customer.report()` method with all `attributes` fields included. For production code, we recommend using `customer.report()` with only the fields you need.

#### Arguments

- **`options`** (_optional_): Object of the form `{ limit, order_by, constraints }`:
  - **`limit`** (_optional, number_): Number of rows to return. Equivalent to the limit in `customer.report()`. Defaults to no limit.
  - **`order_by`** (_optional, string_): The field to sort the returned rows by. Equivalent to the order_by in `customer.report()`. By default, no sorting is applied.
  - **`constraints`** (_optional, array/object_): A constraints array or object. See the `customer.report()` documentation for details. By default, all entities are returned.

#### Returns

Returns an array of objects.
Each object has a `ad_group_ad_label` property. Any other resources that can be selected with `ad_group_ad_label` will also be added as properities.

```javascript
// Listing all the adGroupAdLabels in the account
let result = await customer.adGroupAdLabels.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.adGroupAdLabels.list({
  constraints: [
    {
      key: 'ad_group_ad_label.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'ad_group_ad_label.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    ad_group_ad_label: {
      resource_name: 'customers/3827277046/adGroupAdLabels/37706041185~191743801329~1091971976',
      ad_group_ad: 'customers/3827277046/adGroupAds/37706041185~191743801329',
      label: 'customers/3827277046/labels/1091971976',
    },
    ad_group_ad: {
      resource_name: 'customers/3827277046/adGroupAds/37706041185~191743801329',
      ad: {
        added_by_google_ads: false,
        display_url: '',
        expanded_text_ad: {
          description: 'State Of The Art AdWords PPC Tool. Designed For Agencies. Try It Free!',
          headline_part_1: 'Top Ad Words Tool',
          headline_part_2: 'Manage AdWords The Smart Way',
          path_1: 'ppc',
          path_2: 'tool',
        },
        final_mobile_urls: [],
        final_urls: [{ value: 'http://opteo.co/lp/ad-words-software' }],
        id: 191743801329,
        type: 3,
        url_collections: [],
        url_custom_parameters: [],
      },
      ad_group: 'customers/3827277046/adGroups/37706041185',
      status: 3,
    },
    label: {
      resource_name: 'customers/3827277046/labels/1091971976',
      id: 1091971976,
      name: 'My label',
      status: 2,
      text_label: { background_color: '#FF9900', description: '' },
    },
    ad_group: {
      resource_name: 'customers/3827277046/adGroups/37706041185',
      campaign: 'customers/3827277046/campaigns/729684361',
      cpc_bid_micros: 4770000,
      cpm_bid_micros: 10000,
      cpv_bid_micros: 0,
      effective_target_cpa_micros: 0,
      explorer_auto_optimizer_setting: { opt_in: false },
      id: 37706041185,
      name: 'My ad group',
      status: 2,
      target_cpa_micros: 0,
      targeting_setting: {
        target_restrictions: [
          { targetingDimension: 3, bidOnly: { value: false } },
          { targetingDimension: 4, bidOnly: { value: false } },
          { targetingDimension: 5, bidOnly: { value: true } },
          { targetingDimension: 6, bidOnly: { value: true } },
          { targetingDimension: 7, bidOnly: { value: false } },
          { targetingDimension: 8, bidOnly: { value: false } },
        ],
      },
      type: 2,
      url_custom_parameters: [],
    },
    campaign: {
      resource_name: 'customers/3827277046/campaigns/729684361',
      ad_serving_optimization_status: 4,
      advertising_channel_type: 2,
      bidding_strategy_type: 3,
      campaign_budget: 'customers/3827277046/campaignBudgets/1005523652',
      end_date: '2037-12-30',
      frequency_caps: [],
      geo_target_type_setting: { negative_geo_target_type: 2, positive_geo_target_type: 4 },
      id: 729684361,
      manual_cpc: { enhanced_cpc_enabled: false },
      name: 'My campaign',
      network_settings: {
        target_content_network: false,
        target_google_search: true,
        target_partner_search_network: false,
        target_search_network: true,
      },
      payment_mode: 4,
      selective_optimization: { conversion_actions: [] },
      serving_status: 2,
      start_date: '2017-01-04',
      status: 3,
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
