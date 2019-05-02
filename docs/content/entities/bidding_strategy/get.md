---
title: Get BiddingStrategy
order: 2
type: get
entity: BiddingStrategy
---

### Get a BiddingStrategy

The `customer.biddingStrategies.get(resource_name)` method returns the BiddingStrategy identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that BiddingStrategy

#### Returns

Returns that BiddingStrategy as an object.

```javascript
// Getting the entity
let result = await customer.biddingStrategies.get('customers/3827277046/biddingStrategies/1534381593')
```

```javascript
// Example result
;({
  resource_name: 'customers/3827277046/biddingStrategies/1534381593',
  campaign_count: 0,
  id: 1534381593,
  name: 'My bidding strategy',
  non_removed_campaign_count: 0,
  status: 2,
  type: 2,
})
```
