---
title: Get LanguageConstant
order: 2
type: get
entity: LanguageConstant
---

The `customer.languageConstants.get()` method returns all fields for one LanguageConstant, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript
// Getting the entity
let result = await customer.languageConstants.get('languageConstants/1000')

// Here's what the result might look like
result === { resource_name: 'languageConstants/1000', code: 'en', id: 1000, name: 'English', targetable: true }
```
