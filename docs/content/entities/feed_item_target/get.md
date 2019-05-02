---
title: Get FeedItemTarget
order: 2
type: get
entity: FeedItemTarget
---

### Get a FeedItemTarget

The `customer.feedItemTargets.get(resource_name)` method returns the FeedItemTarget identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that FeedItemTarget

#### Returns

Returns that FeedItemTarget as an object.

```javascript
// Getting the entity
let result = await customer.feedItemTargets.get('customers/1234567890/feedItemTargets/123123123')
```

```javascript

// Example result
(// Todo: add example get() return here)

```
