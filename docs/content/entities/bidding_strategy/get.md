---
title: Get BiddingStrategy
order: 2
type: get
entity: BiddingStrategy
---

### Get BiddingStrategy

The `customer.biddingStrategies.get()` method returns all fields for one BiddingStrategy, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

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
