---
title: Get ExtensionFeedItem
order: 2
type: get
entity: ExtensionFeedItem
---

The `customer.extensionFeedItems.get()` method returns all fields for one ExtensionFeedItem, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript
// Getting the entity
let result = await customer.extensionFeedItems.get('customers/3827277046/extensionFeedItems/9779152283')

// Here's what the result might look like
result ===
    {
        resource_name: 'customers/3827277046/extensionFeedItems/9779152283',
        extension_type: 10,
        sitelink_feed_item: {
            final_mobile_urls: [],
            final_urls: [{ value: 'https://opteo.com/docs' }],
            line_1: 'Adwords Guides, Case Studies',
            line_2: 'Chrome Extensions and more!',
            link_text: 'AdWords Knowledge Base',
        },
        status: 2,
    }
```
