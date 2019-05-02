---
title: Get LanguageConstant
order: 2
type: get
entity: LanguageConstant
---

### Get a LanguageConstant

The `customer.languageConstants.get(resource_name)` method returns the LanguageConstant identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that LanguageConstant

#### Returns

Returns that LanguageConstant as an object.

```javascript
// Getting the entity
let result = await customer.languageConstants.get('languageConstants/1150')
```

```javascript
// Example result
;({
  resource_name: 'languageConstants/1150',
  code: 'zh_HK',
  id: 1150,
  name: 'Chinese (Hong Kong SAR)',
  targetable: false,
})
```
