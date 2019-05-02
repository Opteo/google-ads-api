---
title: Get Label
order: 2
type: get
entity: Label
---

### Get a Label

The `customer.labels.get(resource_name)` method returns the Label identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that Label

#### Returns

Returns that Label as an object.

```javascript
// Getting the entity
let result = await customer.labels.get('customers/3827277046/labels/872103121')
```

```javascript
// Example result
;({
  resource_name: 'customers/3827277046/labels/872103121',
  id: 872103121,
  name: 'My label',
  status: 2,
  text_label: { background_color: '#6633FF', description: 'Non brand, traditional cold traffic via search' },
})
```
