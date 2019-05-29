---
type: list_code
entity: CampaignBidModifier
title: List CampaignBidModifier
order: 3.1
---

```javascript
// Listing all the campaignBidModifiers in the account
let result = await customer.campaignBidModifiers.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.campaignBidModifiers.list({
  constraints: [
    {
      key: 'campaign_bid_modifier.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'campaign_bid_modifier.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    campaign_bid_modifier: {
      campaign: 'customers/3827277046/campaigns/881817006',
      criterion_id: 8000,
      resource_name: 'customers/3827277046/campaignBidModifiers/881817006~8000',
    },
    campaign: {
      ad_serving_optimization_status: 5,
      advertising_channel_type: 2,
      base_campaign: 'customers/3827277046/campaigns/881817006',
      bidding_strategy_type: 6,
      campaign_budget: 'customers/3827277046/campaignBudgets/1159840470',
      end_date: '2037-12-30',
      experiment_type: 2,
      frequency_caps: [],
      geo_target_type_setting: { negative_geo_target_type: 2, positive_geo_target_type: 4 },
      id: 881817006,
      name: 'My campaign',
      network_settings: {
        target_content_network: false,
        target_google_search: true,
        target_partner_search_network: false,
        target_search_network: true,
      },
      payment_mode: 4,
      resource_name: 'customers/3827277046/campaigns/881817006',
      selective_optimization: { conversion_actions: [] },
      serving_status: 2,
      start_date: '2017-07-12',
      status: 2,
      target_cpa: { target_cpa_micros: 20000000 },
      targeting_setting: { target_restrictions: [{ targetingDimension: 3, bidOnly: { value: false } }] },
      tracking_url_template:
        'https://ad.atdmt.com/s/go;adv=11202207688256;ec=11202207688723;c.a={campaignid};s.a=google;p.a={campaignid};as.a={adgroupid};qpb=1;?bidkw={keyword:defaultkeyword}&dvc={device}&h={lpurl}?utm_source=adwords&utm_medium=PPC&utm_campaign={campaignid}&utm_term={ifsearch:{keyword}}{ifcontent:{placement}}&utm_content={creative}&network={network}&adgroupid={adgroupid}&matchtype={matchtype}&adposition={adposition}&targetid={targetid}&target={target}&device={device}&devicemodel={devicemodel}',
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
