---
type: list
entity: CustomerFeed
title: List CustomerFeed
order: 3
---

This `customer.customerFeeds.list()` method works just like `get`, except that it returns all of the entities in the account. It isn't rate limited, but it can be very slow, so use it sparingly.

```javascript
// Listing all the customerFeeds in the account
let result = await customer.customerFeeds.list()

// Listing with constraints and a limited number of results
let result = await customer.customerFeeds.list({
    constraints: [
        {
            key: 'customer_feed.some_field',
            op: '=',
            val: 'yellow submarine',
        },
    ],
    limit: 15,
})

// Here's what the result might look like
result ===
    [
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
            customer_feed: {
                resource_name: 'customers/9262111890/customerFeeds/77425432',
                feed: 'customers/9262111890/feeds/77425432',
                matching_function: {
                    function_string: 'EQUALS(FEED_ITEM_ID,51842329086)',
                    left_operands: [{ requestContextOperand: { contextType: 2 } }],
                    operator: 4,
                    right_operands: [{ constantOperand: { longValue: { value: 51842329086 } } }],
                },
                placeholder_types: [7],
                status: 2,
            },
            feed: {
                resource_name: 'customers/9262111890/feeds/77425432',
                attributes: [
                    { id: { value: 1 }, name: { value: 'Callout Text' }, type: 4, isPartOfKey: { value: false } },
                ],
                id: 77425432,
                name: 'My feed',
                origin: 3,
                status: 2,
            },
        },
    ]
```
