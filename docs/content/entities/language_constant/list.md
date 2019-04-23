---
type: list
entity: LanguageConstant
title: List LanguageConstant
order: 3
---

This `customer.languageConstants.list()` method works just like `get`, except that it returns all of the entities in the account. It isn't rate limited, but it can be very slow, so use it sparingly.

```javascript
// Listing all the languageConstants in the account
let result = await customer.languageConstants.list()

// Listing with constraints and a limited number of results
let result = await customer.languageConstants.list({
    constraints: [
        {
            key: 'language_constant.some_field',
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
            language_constant: {
                resource_name: 'languageConstants/1000',
                code: 'en',
                id: 1000,
                name: 'English',
                targetable: true,
            },
        },
    ]
```
