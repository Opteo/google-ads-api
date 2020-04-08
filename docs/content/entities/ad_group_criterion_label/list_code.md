---
type: list_code
entity: AdGroupCriterionLabel
title: List AdGroupCriterionLabel
order: 3.1
---

```javascript
// Listing all the adGroupCriterionLabels in the account
let result = await customer.adGroupCriterionLabels.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.adGroupCriterionLabels.list({
  constraints: [
    {
      key: 'ad_group_criterion_label.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'ad_group_criterion_label.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    ad_group_criterion_label: {
      ad_group_criterion: 'customers/3827277046/adGroupCriteria/45808681353~331634074542',
      label: 'customers/3827277046/labels/3866969030',
      resource_name: 'customers/3827277046/adGroupCriterionLabels/45808681353~331634074542~3866969030',
    },
    ad_group_criterion: {
      ad_group: 'customers/3827277046/adGroups/45808681353',
      approval_status: 2,
      cpc_bid_micros: 2880000,
      criterion_id: 331634074542,
      effective_cpc_bid_micros: 2880000,
      effective_cpc_bid_source: 7,
      effective_cpm_bid_micros: 10000,
      effective_cpm_bid_source: 6,
      effective_cpv_bid_source: 0,
      effective_percent_cpc_bid_source: 0,
      final_mobile_urls: [],
      final_urls: [],
      keyword: { match_type: 2, text: 'opteo adwords' },
      negative: false,
      resource_name: 'customers/3827277046/adGroupCriteria/45808681353~331634074542',
      status: 3,
      system_serving_status: 2,
      type: 2,
      url_custom_parameters: [],
    },
    label: {
      id: 3866969030,
      name: 'My label',
      resource_name: 'customers/3827277046/labels/3866969030',
      status: 2,
      text_label: { background_color: '#1be779', description: '' },
    },
    ad_group: {
      ad_rotation_mode: 0,
      base_ad_group: 'customers/3827277046/adGroups/45808681353',
      campaign: 'customers/3827277046/campaigns/881817006',
      cpc_bid_micros: 2720000,
      cpm_bid_micros: 10000,
      cpv_bid_micros: 0,
      display_custom_bid_dimension: 0,
      effective_target_cpa_micros: 0,
      effective_target_cpa_source: 0,
      effective_target_roas_source: 0,
      explorer_auto_optimizer_setting: { opt_in: false },
      id: 45808681353,
      labels: [],
      name: 'My ad group',
      resource_name: 'customers/3827277046/adGroups/45808681353',
      status: 2,
      target_cpa_micros: 0,
      targeting_setting: {
        target_restrictions: [
          { targeting_dimension: 3, bid_only: false },
          { targeting_dimension: 4, bid_only: false },
          { targeting_dimension: 5, bid_only: true },
          { targeting_dimension: 6, bid_only: true },
          { targeting_dimension: 7, bid_only: false },
          { targeting_dimension: 8, bid_only: false },
        ],
      },
      type: 2,
      url_custom_parameters: [{ key: 'yy', value: '1' }],
    },
    campaign: {
      ad_serving_optimization_status: 5,
      advertising_channel_sub_type: 0,
      advertising_channel_type: 2,
      base_campaign: 'customers/3827277046/campaigns/881817006',
      bidding_strategy_type: 9,
      campaign_budget: 'customers/3827277046/campaignBudgets/1159840470',
      end_date: '2037-12-30',
      experiment_type: 2,
      frequency_caps: [],
      geo_target_type_setting: { negative_geo_target_type: 4, positive_geo_target_type: 7 },
      id: 881817006,
      labels: ['customers/3827277046/labels/898377018'],
      name: 'My campaign',
      network_settings: {
        target_content_network: false,
        target_google_search: true,
        target_partner_search_network: false,
        target_search_network: true,
      },
      payment_mode: 4,
      resource_name: 'customers/3827277046/campaigns/881817006',
      serving_status: 2,
      start_date: '2017-07-12',
      status: 3,
      targeting_setting: { target_restrictions: [{ targeting_dimension: 3, bid_only: false }] },
      tracking_url_template:
        'https://ad.atdmt.com/s/go;adv=11202207688256;ec=11202207688723;c.a={campaignid};s.a=google;p.a={campaignid};as.a={adgroupid};qpb=1;?bidkw={keyword:defaultkeyword}&dvc={device}&h={lpurl}?utm_source=adwords&utm_medium=PPC&utm_campaign={campaignid}&utm_term={ifsearch:{keyword}}{ifcontent:{placement}}&utm_content={creative}&network={network}&adgroupid={adgroupid}&matchtype={matchtype}&adposition={adposition}&targetid={targetid}&target={target}&device={device}&devicemodel={devicemodel}',
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
        'https://w.opteo.co/workers/parallel?url={lpurl}&domain_id=123443&campaign_id={campaignid}&adgroup_id={adgroupid}&matchtype={matchtype}&network={network}&device={device}&keyword={keyword}&targetid={targetid}',
    },
  },
]
```
