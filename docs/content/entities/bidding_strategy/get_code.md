---
title: Get BiddingStrategy
order: 2.1
type: get_code
entity: BiddingStrategy
---

```javascript
// Getting the entity
let result = await customer.biddingStrategies.get('customers/3827277046/biddingStrategies/2039955526')
```

```javascript
// Example result
;({
  campaign_count: 3,
  id: 2039955526,
  name: 'My bidding strategy',
  non_removed_campaign_count: 3,
  resource_name: 'customers/3827277046/biddingStrategies/2039955526',
  status: 2,
  target_impression_share: { cpc_bid_ceiling_micros: 10000000, location: 4, location_fraction_micros: 900000 },
  type: 15,
})
```
