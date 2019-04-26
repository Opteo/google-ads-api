---
title: Create Label
order: 4
type: create
entity: Label
---

### Create Label

This section describes how to create a Label.

```javascript
// Creating the entity

const label = {
  // Your Label here, without immutable fields such as resource_name
}

const result = await customer.labels.create(label)
```

```javascript
// Example result
;['customers/3827277046/labels/872103121']
```
