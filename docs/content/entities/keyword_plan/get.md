---
title: Get KeywordPlan
order: 2
type: get
entity: KeywordPlan
---

### Get a KeywordPlan

The `customer.keywordPlans.get(resource_name)` method returns the KeywordPlan identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that KeywordPlan

#### Returns

Returns that KeywordPlan as an object.

```javascript
// Getting the entity
let result = await customer.keywordPlans.get('customers/3827277046/keywordPlans/4739396')
```

```javascript
// Example result
;({ resource_name: 'customers/3827277046/keywordPlans/4739396', id: 4739396, name: 'My keyword plan' })
```
