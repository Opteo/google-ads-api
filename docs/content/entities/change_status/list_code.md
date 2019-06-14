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
      last_change_date_time: '2019-05-18 15:51:05.766223',
      resource_name: 'customers/9262111890/changeStatus/1558191065766223-10-82896692-51844020102',
      resource_status: 3,
      resource_type: 10,
    },
    feed: {
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
      id: 82896692,
      name: 'My feed',
      origin: 3,
      resource_name: 'customers/9262111890/feeds/82896692',
      status: 2,
    },
    feed_item: {
      attribute_values: [
        {
          feedAttributeId: { value: 1 },
          stringValue: { value: 'my sitelink text' },
          integerValuesList: [],
          booleanValuesList: [],
          stringValuesList: [],
          doubleValuesList: [],
        },
        {
          feedAttributeId: { value: 3 },
          stringValue: { value: 'description here' },
          integerValuesList: [],
          booleanValuesList: [],
          stringValuesList: [],
          doubleValuesList: [],
        },
        {
          feedAttributeId: { value: 4 },
          stringValue: { value: 'description here line 2' },
          integerValuesList: [],
          booleanValuesList: [],
          stringValuesList: [],
          doubleValuesList: [],
        },
        {
          feedAttributeId: { value: 5 },
          integerValuesList: [],
          booleanValuesList: [],
          stringValuesList: [{ value: 'https://myurl.com' }],
          doubleValuesList: [],
        },
      ],
      feed: 'customers/9262111890/feeds/82896692',
      id: 51844020102,
      policy_infos: [
        {
          placeholderType: { value: 1 },
          feedMappingResourceName: { value: 'customers/9262111890/feedMappings/82896692~91300060' },
          reviewStatus: 0,
          approvalStatus: 0,
          policyTopicEntriesList: [],
          validationStatus: 4,
          validationErrorsList: [],
          qualityApprovalStatus: 0,
          qualityDisapprovalReasonsList: [],
        },
      ],
      resource_name: 'customers/9262111890/feedItems/82896692~51844020102',
      status: 2,
      url_custom_parameters: [],
    },
    ad_group: { id: 0, resource_name: '', url_custom_parameters: [] },
    campaign: { frequency_caps: [], id: 0, resource_name: '', url_custom_parameters: [] },
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
