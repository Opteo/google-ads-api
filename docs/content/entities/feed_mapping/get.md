---
title: Get FeedMapping
order: 2
type: get
entity: FeedMapping
---

### Get FeedMapping

The `customer.feedMappings.get()` method returns all fields for one FeedMapping, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript
// Getting the entity
let result = await customer.feedMappings.get('customers/9262111890/feedMappings/77425432~84739365')
```

```javascript
// Example result
;({
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
})
```
