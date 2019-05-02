---
title: Get FeedItem
order: 2
type: get
entity: FeedItem
---

### Get a FeedItem

The `customer.feedItems.get(resource_name)` method returns the FeedItem identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that FeedItem

#### Returns

Returns that FeedItem as an object.

```javascript
// Getting the entity
let result = await customer.feedItems.get('customers/3827277046/feedItems/43009393~9779152283')
```

```javascript
// Example result
;({
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
})
```
