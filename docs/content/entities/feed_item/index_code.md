---
order: 1.1
type: object_code
entity: FeedItem
title: FeedItem
---

```javascript
// Example FeedItem
const feed_item = {
  attribute_values: [
    {
      feed_attribute_id: 1,
      string_value: 'AdWords Knowledge Base',
      integer_values: [],
      boolean_values: [],
      string_values: [],
      double_values: [],
    },
    {
      feed_attribute_id: 3,
      string_value: 'Adwords Guides, Case Studies',
      integer_values: [],
      boolean_values: [],
      string_values: [],
      double_values: [],
    },
    {
      feed_attribute_id: 4,
      string_value: 'Chrome Extensions and more!',
      integer_values: [],
      boolean_values: [],
      string_values: [],
      double_values: [],
    },
    {
      feed_attribute_id: 5,
      integer_values: [],
      boolean_values: [],
      string_values: ['https://opteo.com/docs'],
      double_values: [],
    },
  ],
  feed: 'customers/3827277046/feeds/43009393',
  geo_targeting_restriction: 0,
  id: 9779152283,
  policy_infos: [
    {
      placeholder_type_enum: 2,
      feed_mapping_resource_name: 'customers/3827277046/feedMappings/43009393~46066123',
      review_status: 3,
      approval_status: 2,
      policy_topic_entries: [{ topic: 'DESTINATION_MISMATCH', type: 2, evidences: [], constraints: [] }],
      validation_status: 4,
      validation_errors: [],
      quality_approval_status: 0,
      quality_disapproval_reasons: [],
    },
  ],
  resource_name: 'customers/3827277046/feedItems/43009393~9779152283',
  status: 3,
  url_custom_parameters: [],
}
```
