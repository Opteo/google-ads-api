---
type: list
entity: FeedMapping
title: List FeedMapping
order: 3
---

### List all FeedMapping

This `customer.feedMappings.list()` method works just like `get`, except that it returns all of the entities in the account. It isn't rate limited, but it can be very slow, so use it sparingly.

```javascript
// Listing all the feedMappings in the account
let result = await customer.feedMappings.list()

// Listing with constraints and a limited number of results
let result = await customer.feedMappings.list({
  constraints: [
    {
      key: 'feed_mapping.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
})
```

```javascript
// Example result
;[
  {
    customer: {
      resource_name: 'customers/9262111890',
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
      remarketing_setting: {
        google_global_site_tag:
          "<!-- Global site tag (gtag.js) - Google Ads: 797556569 -->\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=AW-797556569\"></script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'AW-797556569');\n</script>\n",
      },
      test_account: true,
      time_zone: 'Europe/London',
    },
    feed: {
      resource_name: 'customers/9262111890/feeds/77425432',
      attributes: [{ id: { value: 1 }, name: { value: 'Callout Text' }, type: 4, isPartOfKey: { value: false } }],
      id: 77425432,
      name: 'My feed',
      origin: 3,
      status: 2,
    },
    feed_mapping: {
      resource_name: 'customers/9262111890/feedMappings/77425432~84739365',
      attribute_field_mappings: [
        {
          feedAttributeId: { value: 1 },
          fieldId: { value: 1 },
          sitelinkField: 0,
          callField: 0,
          appField: 0,
          locationField: 0,
          affiliateLocationField: 0,
          calloutField: 2,
          structuredSnippetField: 0,
          messageField: 0,
          priceField: 0,
          promotionField: 0,
          adCustomizerField: 0,
          dsaPageFeedField: 0,
          locationExtensionTargetingField: 0,
          educationField: 0,
          flightField: 0,
          customField: 0,
          hotelField: 0,
          realEstateField: 0,
          travelField: 0,
          localField: 0,
          jobField: 0,
        },
      ],
      feed: 'customers/9262111890/feeds/77425432',
      placeholder_type: 7,
      status: 2,
    },
  },
]
```
