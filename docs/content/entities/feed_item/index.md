---
order: 1
type: object
entity: FeedItem
title: FeedItem
---

## FeedItem

### The FeedItem object

This section describes the FeedItem entity.

```javascript
// Example FeedItem
const feed_item = {
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
}
```
