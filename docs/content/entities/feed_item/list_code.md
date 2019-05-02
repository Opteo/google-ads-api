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
      resource_name: 'customers/3827277046/feedItems/43009393~9779152283',
      attribute_values: [
        {
          feedAttributeId: { value: 1 },
          stringValue: { value: 'AdWords Knowledge Base' },
          integerValuesList: [],
          booleanValuesList: [],
          stringValuesList: [],
          doubleValuesList: [],
        },
        {
          feedAttributeId: { value: 3 },
          stringValue: { value: 'Adwords Guides, Case Studies' },
          integerValuesList: [],
          booleanValuesList: [],
          stringValuesList: [],
          doubleValuesList: [],
        },
        {
          feedAttributeId: { value: 4 },
          stringValue: { value: 'Chrome Extensions and more!' },
          integerValuesList: [],
          booleanValuesList: [],
          stringValuesList: [],
          doubleValuesList: [],
        },
        {
          feedAttributeId: { value: 5 },
          integerValuesList: [],
          booleanValuesList: [],
          stringValuesList: [{ value: 'https://opteo.com/docs' }],
          doubleValuesList: [],
        },
      ],
      feed: 'customers/3827277046/feeds/43009393',
      id: 9779152283,
      policy_infos: [
        {
          placeholderType: { value: 1 },
          feedMappingResourceName: { value: 'customers/3827277046/feedMappings/43009393~46066123' },
          reviewStatus: 3,
          approvalStatus: 2,
          policyTopicEntriesList: [
            { topic: { value: 'DESTINATION_MISMATCH' }, type: 2, evidencesList: [], constraintsList: [] },
          ],
          validationStatus: 4,
          validationErrorsList: [],
          qualityApprovalStatus: 0,
          qualityDisapprovalReasonsList: [],
        },
      ],
      status: 2,
      url_custom_parameters: [],
    },
    feed: {
      resource_name: 'customers/3827277046/feeds/43009393',
      attributes: [
        { id: { value: 1 }, name: { value: 'SitelinkName' }, type: 4, isPartOfKey: { value: false } },
        { id: { value: 2 }, name: { value: 'SitelinkUrl' }, type: 6, isPartOfKey: { value: false } },
        { id: { value: 3 }, name: { value: 'SitelinkDescription1' }, type: 4, isPartOfKey: { value: false } },
        { id: { value: 4 }, name: { value: 'SitelinkDescription2' }, type: 4, isPartOfKey: { value: false } },
        { id: { value: 5 }, name: { value: 'SitelinkFinalUrls' }, type: 12, isPartOfKey: { value: false } },
        { id: { value: 6 }, name: { value: 'SitelinkFinalMobileUrls' }, type: 12, isPartOfKey: { value: false } },
        { id: { value: 7 }, name: { value: 'SitelinkTrackingUrl' }, type: 6, isPartOfKey: { value: false } },
        { id: { value: 8 }, name: { value: 'SitelinkFinalUrlSuffix' }, type: 4, isPartOfKey: { value: false } },
      ],
      id: 43009393,
      name: 'My feed',
      origin: 3,
      status: 2,
    },
    ad_group: {
      resource_name: 'customers/3827277046/adGroups/36337682537',
      campaign: 'customers/3827277046/campaigns/729468367',
      cpc_bid_micros: 5000000,
      cpm_bid_micros: 10000,
      cpv_bid_micros: 0,
      effective_target_cpa_micros: 0,
      explorer_auto_optimizer_setting: { opt_in: false },
      id: 36337682537,
      name: 'My ad group',
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
        ],
      },
      type: 2,
      url_custom_parameters: [],
    },
    campaign: {
      resource_name: 'customers/3827277046/campaigns/729468367',
      ad_serving_optimization_status: 4,
      advertising_channel_type: 2,
      bidding_strategy_type: 3,
      campaign_budget: 'customers/3827277046/campaignBudgets/1005586771',
      end_date: '2037-12-30',
      frequency_caps: [],
      geo_target_type_setting: { negative_geo_target_type: 2, positive_geo_target_type: 4 },
      id: 729468367,
      manual_cpc: { enhanced_cpc_enabled: true },
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
      status: 4,
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
