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
      last_change_date_time: '2019-06-17 18:18:48.122159',
      resource_name: 'customers/9262111890/changeStatus/1560791928122159-10-82896692-51844020102',
      resource_status: 3,
      resource_type: 10,
    },
    feed: {
      attributes: [
        { id: 1, name: 'SitelinkName', type: 4, isPartOfKey: false },
        { id: 2, name: 'SitelinkUrl', type: 6, isPartOfKey: false },
        { id: 3, name: 'SitelinkDescription1', type: 4, isPartOfKey: false },
        { id: 4, name: 'SitelinkDescription2', type: 4, isPartOfKey: false },
        { id: 5, name: 'SitelinkFinalUrls', type: 12, isPartOfKey: false },
        { id: 6, name: 'SitelinkFinalMobileUrls', type: 12, isPartOfKey: false },
        { id: 7, name: 'SitelinkTrackingUrl', type: 6, isPartOfKey: false },
        { id: 8, name: 'SitelinkFinalUrlSuffix', type: 4, isPartOfKey: false },
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
          feedAttributeId: 1,
          stringValue: 'my sitelink text',
          integerValues: [],
          booleanValues: [],
          stringValues: [],
          doubleValues: [],
        },
        {
          feedAttributeId: 3,
          stringValue: 'description here',
          integerValues: [],
          booleanValues: [],
          stringValues: [],
          doubleValues: [],
        },
        {
          feedAttributeId: 4,
          stringValue: 'description here line 2',
          integerValues: [],
          booleanValues: [],
          stringValues: [],
          doubleValues: [],
        },
        {
          feedAttributeId: 5,
          integerValues: [],
          booleanValues: [],
          stringValues: ['https://myurl.com'],
          doubleValues: [],
        },
      ],
      feed: 'customers/9262111890/feeds/82896692',
      id: 51844020102,
      policy_infos: [
        {
          placeholderTypeEnum: 2,
          feedMappingResourceName: 'customers/9262111890/feedMappings/82896692~91300060',
          reviewStatus: 0,
          approvalStatus: 0,
          policyTopicEntries: [],
          validationStatus: 4,
          validationErrors: [],
          qualityApprovalStatus: 0,
          qualityDisapprovalReasons: [],
        },
      ],
      resource_name: 'customers/9262111890/feedItems/82896692~51844020102',
      status: 2,
      url_custom_parameters: [],
    },
    ad_group: { id: 0, labels: [], resource_name: '', url_custom_parameters: [] },
    campaign: { frequency_caps: [], id: 0, labels: [], resource_name: '', url_custom_parameters: [] },
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
