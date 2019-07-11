---
title: Get FeedItem
order: 2.1
type: get_code
entity: FeedItem
---

```javascript
// Getting the entity
let result = await customer.feedItems.get('customers/3827277046/feedItems/43009393~9779152283')
```

```javascript
// Example result
;({
  attribute_values: [
    {
      feedAttributeId: 1,
      stringValue: 'AdWords Knowledge Base',
      integerValues: [],
      booleanValues: [],
      stringValues: [],
      doubleValues: [],
    },
    {
      feedAttributeId: 3,
      stringValue: 'Adwords Guides, Case Studies',
      integerValues: [],
      booleanValues: [],
      stringValues: [],
      doubleValues: [],
    },
    {
      feedAttributeId: 4,
      stringValue: 'Chrome Extensions and more!',
      integerValues: [],
      booleanValues: [],
      stringValues: [],
      doubleValues: [],
    },
    {
      feedAttributeId: 5,
      integerValues: [],
      booleanValues: [],
      stringValues: ['https://opteo.com/docs'],
      doubleValues: [],
    },
  ],
  feed: 'customers/3827277046/feeds/43009393',
  id: 9779152283,
  policy_infos: [
    {
      placeholderTypeEnum: 2,
      feedMappingResourceName: 'customers/3827277046/feedMappings/43009393~46066123',
      reviewStatus: 3,
      approvalStatus: 2,
      policyTopicEntries: [{ topic: 'DESTINATION_MISMATCH', type: 2, evidences: [], constraints: [] }],
      validationStatus: 4,
      validationErrors: [],
      qualityApprovalStatus: 0,
      qualityDisapprovalReasons: [],
    },
  ],
  resource_name: 'customers/3827277046/feedItems/43009393~9779152283',
  status: 3,
  url_custom_parameters: [],
})
```
